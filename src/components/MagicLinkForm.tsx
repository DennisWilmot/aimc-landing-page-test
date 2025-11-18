// Magic Link Email Form Component

import React, { useState } from "react";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { sendMagicLink } from "../lib/auth-client";
import { trackDualEvent } from "../utils/dualAnalytics";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export default function MagicLinkForm() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFocus = () => {
    trackDualEvent('course_email_form_focused', {
      timestamp: new Date().toISOString(),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Track form submission
    trackDualEvent('course_email_form_submitted', {
      email,
      timestamp: new Date().toISOString(),
    });

    // Send magic link
    const result = await sendMagicLink(email);

    if (result.success) {
      setSent(true);
      trackDualEvent('magic_link_request_success', {
        email,
        timestamp: new Date().toISOString(),
      });
    } else {
      setError(result.error || 'Failed to send magic link. Please try again.');
      trackDualEvent('magic_link_request_failed', {
        email,
        error: result.error,
        timestamp: new Date().toISOString(),
      });
    }

    setLoading(false);
  };

  if (sent) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <Card className="border-gray-200">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                <Mail className="w-6 h-6 text-gray-700" />
              </div>
              <CardTitle className="text-xl">Check Your Email</CardTitle>
              <CardDescription className="mt-2">
                We sent a magic link to
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-base font-medium text-gray-900 text-center">
                {email}
              </p>

              <Alert className="border-gray-200">
                <AlertDescription>
                  Click the link in the email to access your free AI Masterclass course.
                  The link is valid for <strong>15 minutes</strong>.
                </AlertDescription>
              </Alert>

              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Didn't get it?</strong> Check your spam folder.</p>
                <p><strong>Still nothing?</strong> Try requesting a new link.</p>
              </div>

              <Button
                variant="outline"
                onClick={() => {
                  setSent(false);
                  setEmail("");
                  trackDualEvent("magic_link_resend_clicked", { email });
                }}
                className="w-full border-gray-300"
              >
                Send another link
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Card className="border-gray-200">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-gray-700" />
            </div>
            <CardTitle className="text-xl">
              Free AI Masterclass
            </CardTitle>
            <CardDescription className="mt-2">
              Get instant access to our complete AI course
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <Alert className="border-gray-200">
              <AlertTitle className="font-medium text-sm">What You'll Learn</AlertTitle>
              <AlertDescription>
                <ul className="text-sm space-y-1 mt-2 text-gray-600">
                  <li>• AI fundamentals and core concepts</li>
                  <li>• Practical hands-on exercises</li>
                  <li>• Real-world case studies</li>
                  <li>• Certificate of completion</li>
                </ul>
              </AlertDescription>
            </Alert>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={handleFocus}
                  placeholder="your@email.com"
                  required
                  disabled={loading}
                  className="border-gray-300"
                />
              </div>

              {error && (
                <Alert variant="destructive" className="border-red-200">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full"
                size="lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Get Free Access"
                )}
              </Button>
            </form>

            <p className="text-center text-sm text-gray-500">
              No credit card required. Access sent instantly via email.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

