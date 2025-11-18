// Email Template with PostHog Tracking

interface EmailTemplateParams {
  email: string;
  magicLinkUrl: string;
  userId: string;
  trackingUrl: string;
}

export const getMagicLinkEmailTemplate = ({
  email,
  magicLinkUrl,
  userId,
  trackingUrl,
}: EmailTemplateParams): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your AI Masterclass Access Link</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f7;">
  
  <!-- PostHog Email Open Tracking Pixel -->
  <img 
    src="${trackingUrl}/track/email-open?user_id=${encodeURIComponent(
    userId
  )}&email=${encodeURIComponent(email)}" 
    width="1" 
    height="1" 
    alt=""
    style="display: none; opacity: 0; position: absolute;"
  />
  
  <!-- Email Container -->
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f5f7; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header with Gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 50px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                🎓 Welcome to AI Masterclass!
              </h1>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              
              <!-- Greeting -->
              <p style="margin: 0 0 20px; font-size: 18px; color: #1d1d1f; line-height: 1.6;">
                Hi there! 👋
              </p>
              
              <!-- Main Message -->
              <p style="margin: 0 0 30px; font-size: 16px; color: #424245; line-height: 1.6;">
                Great news! Your free AI Masterclass course is ready and waiting for you. Click the button below to access your course instantly. This link is valid for <strong>15 minutes</strong>.
              </p>
              
              <!-- CTA Button with Tracking -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 30px 0;">
                <tr>
                  <td align="center">
                    <a 
                      href="${trackingUrl}/track/click?redirect=${encodeURIComponent(
    magicLinkUrl
  )}&user_id=${encodeURIComponent(userId)}"
                      style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; font-size: 18px; font-weight: 600; padding: 16px 48px; border-radius: 8px; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4); transition: transform 0.2s;"
                    >
                      Access Your Course →
                    </a>
                  </td>
                </tr>
              </table>
              
              <!-- What You'll Learn -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 30px 0; background-color: #f9f9f9; border-radius: 8px; padding: 20px;">
                <tr>
                  <td>
                    <p style="margin: 0 0 15px; font-size: 16px; color: #1d1d1f; font-weight: 600;">
                      🚀 What's Inside:
                    </p>
                    <ul style="margin: 0; padding-left: 20px; color: #424245; font-size: 15px; line-height: 1.8;">
                      <li>Complete AI fundamentals course</li>
                      <li>Hands-on practical exercises</li>
                      <li>Real-world case studies</li>
                      <li>Certificate of completion</li>
                    </ul>
                  </td>
                </tr>
              </table>
              
              <!-- Divider -->
              <hr style="border: none; border-top: 1px solid #e5e5e7; margin: 30px 0;">
              
              <!-- Alternative Link -->
              <p style="margin: 0 0 10px; font-size: 14px; color: #86868b;">
                Having trouble with the button? Copy and paste this link into your browser:
              </p>
              <p style="margin: 0 0 30px; font-size: 12px; color: #86868b; word-break: break-all; background-color: #f9f9f9; padding: 10px; border-radius: 4px;">
                ${magicLinkUrl}
              </p>
              
              <!-- Support Info -->
              <p style="margin: 0; font-size: 14px; color: #86868b; line-height: 1.6;">
                Questions? Need help? Reply to this email and we'll get back to you right away.
              </p>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9f9f9; padding: 30px 40px; border-top: 1px solid #e5e5e7;">
              <p style="margin: 0 0 10px; font-size: 13px; color: #86868b; line-height: 1.6;">
                If you didn't request this email, you can safely ignore it. This link will expire automatically.
              </p>
              <p style="margin: 0; font-size: 13px; color: #86868b;">
                © ${new Date().getFullYear()} AI Masterclass. All rights reserved.
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
  
</body>
</html>
  `.trim();
};

// Plain text version for email clients that don't support HTML
export const getMagicLinkEmailTextVersion = ({
  email,
  magicLinkUrl,
}: Omit<EmailTemplateParams, "userId" | "trackingUrl">): string => {
  return `
Welcome to AI Masterclass!

Hi there!

Your free AI Masterclass course is ready. Click the link below to access your course (valid for 15 minutes):

${magicLinkUrl}

What's Inside:
- Complete AI fundamentals course
- Hands-on practical exercises
- Real-world case studies
- Certificate of completion

Questions? Just reply to this email.

If you didn't request this email, you can safely ignore it.

© ${new Date().getFullYear()} AI Masterclass
  `.trim();
};
