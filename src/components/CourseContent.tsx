// Course Content Component - Protected content for authenticated users

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Book, Clock, CheckCircle, Lock, LogOut, Award, Play } from "lucide-react";
import { trackDualEvent } from "../utils/dualAnalytics";
import { signOut } from "../lib/auth-client";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";

interface CourseModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  videoUrl?: string;
  completed?: boolean;
}

const COURSE_MODULES: CourseModule[] = [
  {
    id: "module-1",
    title: "Introduction to AI",
    description: "Learn the fundamentals of artificial intelligence and machine learning",
    duration: "15 min",
  },
  {
    id: "module-2",
    title: "Machine Learning Basics",
    description: "Understanding supervised and unsupervised learning",
    duration: "20 min",
  },
  {
    id: "module-3",
    title: "Neural Networks",
    description: "Deep dive into neural networks and deep learning",
    duration: "25 min",
  },
  {
    id: "module-4",
    title: "Practical Applications",
    description: "Real-world AI applications and case studies",
    duration: "30 min",
  },
  {
    id: "module-5",
    title: "AI Ethics & Future",
    description: "Ethical considerations and the future of AI",
    duration: "20 min",
  },
];

interface CourseContentProps {
  user: {
    id: string;
    email: string;
    name?: string;
  };
}

export default function CourseContent({ user }: CourseContentProps) {
  const navigate = useNavigate();
  const [completedModules, setCompletedModules] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Track course access
    trackDualEvent("course_content_accessed", {
      user_id: user.id,
      email: user.email,
      timestamp: new Date().toISOString(),
    });
  }, [user]);

  const handleSignOut = async () => {
    trackDualEvent("course_signout_clicked", { user_id: user.id });
    await signOut();
    navigate("/course");
  };

  const handleModuleClick = (moduleId: string) => {
    trackDualEvent("course_module_started", {
      user_id: user.id,
      module_id: moduleId,
      timestamp: new Date().toISOString(),
    });

    // TODO: Load progress from API
    // fetch(`/api/course/progress/${user.id}`)
  };

  const handleModuleComplete = (moduleId: string) => {
    setCompletedModules((prev) => new Set(prev).add(moduleId));

    trackDualEvent("course_module_completed", {
      user_id: user.id,
      module_id: moduleId,
      timestamp: new Date().toISOString(),
    });

    // TODO: Save progress to API
    // fetch('/api/course/progress', { method: 'POST', body: {...} })
  };

  const completionPercentage = (completedModules.size / COURSE_MODULES.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                AI Masterclass
              </h1>
              <p className="text-gray-600 mt-1 text-sm">
                Welcome, {user.name || user.email}
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSignOut}
              className="text-gray-600 hover:text-gray-900"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Progress Card */}
        <Card className="mb-8 border-gray-200 shadow-sm">
          <CardHeader className="pb-4">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-lg font-semibold">Course Progress</CardTitle>
                <CardDescription className="mt-1">
                  {completedModules.size} of {COURSE_MODULES.length} modules completed
                </CardDescription>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                  {Math.round(completionPercentage)}%
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={completionPercentage} className="h-3" />
          </CardContent>
        </Card>

        {/* Course Modules Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {COURSE_MODULES.map((module, index) => {
            const isCompleted = completedModules.has(module.id);
            const isLocked = index > 0 && !completedModules.has(COURSE_MODULES[index - 1].id);

            return (
              <Card
                key={module.id}
                className={`transition-all border-gray-200 hover:shadow-lg ${
                  isLocked ? "opacity-60 cursor-not-allowed" : "hover:border-purple-300 cursor-pointer"
                } ${isCompleted ? "border-green-200 bg-green-50/50" : ""}`}
                onClick={() => !isLocked && handleModuleClick(module.id)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      isCompleted ? "bg-green-100" : isLocked ? "bg-gray-100" : "bg-gradient-to-br from-purple-100 to-blue-100"
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : isLocked ? (
                        <Lock className="w-6 h-6 text-gray-400" />
                      ) : (
                        <Book className="w-6 h-6 text-purple-600" />
                      )}
                    </div>
                    <Badge variant="outline" className="text-xs border-gray-300">
                      <Clock className="w-3 h-3 mr-1" />
                      {module.duration}
                    </Badge>
                  </div>

                  <CardTitle className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    Module {index + 1}
                  </CardTitle>
                  <h4 className="text-lg font-semibold text-gray-900 mt-2">
                    {module.title}
                  </h4>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-sm text-gray-600 mb-4">
                    {module.description}
                  </CardDescription>

                  {isCompleted ? (
                    <Badge variant="secondary" className="w-full justify-center py-2.5 bg-green-50 text-green-700 border-green-200 hover:bg-green-100">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Completed
                    </Badge>
                  ) : isLocked ? (
                    <Button variant="outline" disabled className="w-full opacity-50">
                      <Lock className="w-4 h-4 mr-2" />
                      Complete Previous Module
                    </Button>
                  ) : (
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleModuleComplete(module.id);
                      }}
                      className="w-full"
                      size="lg"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Start Module
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certificate Section */}
        {completionPercentage === 100 && (
          <Card className="mt-8 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50 shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                Course Completed!
              </CardTitle>
              <CardDescription className="mt-2 text-base">
                Congratulations! You've finished all modules in the AI Masterclass
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button
                onClick={() => {
                  trackDualEvent("certificate_download_clicked", {
                    user_id: user.id,
                  });
                }}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
              >
                <Award className="w-5 h-5 mr-2" />
                Download Certificate
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
