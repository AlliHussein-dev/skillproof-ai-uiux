"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Award, 
  Brain,
  Download,
  Share2,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Clock,
  Target,
  Trophy,
  ArrowRight,
  Home
} from "lucide-react";
import { motion } from "framer-motion";

export default function ResultsPage() {
  const [score, setScore] = useState(0);
  const targetScore = 92;

  useEffect(() => {
    const timer = setInterval(() => {
      setScore((prev) => {
        if (prev >= targetScore) {
          clearInterval(timer);
          return targetScore;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  const results = {
    skill: "JavaScript ES6+",
    score: 92,
    passed: true,
    totalQuestions: 20,
    correctAnswers: 18,
    timeSpent: "42:15",
    date: "December 15, 2024",
    percentile: 87,
    strengths: ["Arrow Functions", "Async/Await", "Destructuring"],
    improvements: ["Promises", "Generators"]
  };

  const breakdown = [
    { category: "Syntax & Basics", score: 95, total: 5, correct: 5 },
    { category: "Functions & Scope", score: 90, total: 5, correct: 4 },
    { category: "Async Programming", score: 85, total: 5, correct: 4 },
    { category: "ES6 Features", score: 100, total: 5, correct: 5 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              <span className="font-semibold">Assessment Results</span>
            </div>
            <Link href="/dashboard">
              <Button variant="outline" size="sm">
                <Home className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Score Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="glow-card bg-gradient-to-br from-primary/10 via-transparent to-accent/10 border-primary/20">
            <CardContent className="pt-12 pb-12">
              <div className="text-center space-y-6">
                {/* Trophy Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                  className="inline-flex"
                >
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center animate-pulse-glow">
                    <Trophy className="w-12 h-12 text-primary-foreground" />
                  </div>
                </motion.div>

                {/* Result Status */}
                <div>
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-4xl font-bold mb-2"
                  >
                    Congratulations! 🎉
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-xl text-muted-foreground"
                  >
                    You passed the {results.skill} assessment
                  </motion.p>
                </div>

                {/* Score Display */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="inline-block"
                >
                  <div className="text-8xl font-bold gradient-text">
                    {score}%
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Better than {results.percentile}% of test takers
                  </p>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-6"
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span className="text-2xl font-bold">{results.correctAnswers}/{results.totalQuestions}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Correct Answers</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <span className="text-2xl font-bold">{results.timeSpent}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Time Spent</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Target className="w-5 h-5 text-primary" />
                      <span className="text-2xl font-bold">{results.percentile}th</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Percentile</p>
                  </div>
                </motion.div>

                {/* Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
                >
                  <Link href="/certificate/1">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      <Award className="w-4 h-4 mr-2" />
                      View Certificate
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                  <Button size="lg" variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Results
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Detailed Breakdown */}
        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          {/* Performance Breakdown */}
          <Card className="glow-card">
            <CardHeader>
              <CardTitle>Performance Breakdown</CardTitle>
              <CardDescription>Detailed analysis by category</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {breakdown.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + idx * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.category}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {item.correct}/{item.total}
                      </span>
                      <Badge variant={item.score >= 90 ? "default" : "secondary"}>
                        {item.score}%
                      </Badge>
                    </div>
                  </div>
                  <Progress value={item.score} className="h-2" />
                </motion.div>
              ))}
            </CardContent>
          </Card>

          {/* Insights */}
          <Card className="glow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                AI Insights
              </CardTitle>
              <CardDescription>Personalized recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Strengths */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <h3 className="font-semibold">Strengths</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {results.strengths.map((strength, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-green-500/10 text-green-700 dark:text-green-400">
                      {strength}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Areas to Improve */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Areas to Improve</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {results.improvements.map((area, idx) => (
                    <Badge key={idx} variant="outline">
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* AI Recommendation */}
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm">
                  <span className="font-semibold">AI Recommendation:</span> Based on your performance, 
                  we suggest taking the "Advanced Async JavaScript" course to strengthen your understanding 
                  of Promises and Generators.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="mt-6 glow-card">
          <CardHeader>
            <CardTitle>What's Next?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/test/react" className="block">
                <div className="p-4 border-2 border-border rounded-lg hover:border-primary transition-colors cursor-pointer h-full">
                  <Brain className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Try React Assessment</h3>
                  <p className="text-sm text-muted-foreground">
                    Test your React knowledge next
                  </p>
                </div>
              </Link>
              <Link href="/dashboard" className="block">
                <div className="p-4 border-2 border-border rounded-lg hover:border-primary transition-colors cursor-pointer h-full">
                  <Trophy className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">View All Certificates</h3>
                  <p className="text-sm text-muted-foreground">
                    See your complete achievement history
                  </p>
                </div>
              </Link>
              <Link href="/test/javascript" className="block">
                <div className="p-4 border-2 border-border rounded-lg hover:border-primary transition-colors cursor-pointer h-full">
                  <Target className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Retake Assessment</h3>
                  <p className="text-sm text-muted-foreground">
                    Improve your score even further
                  </p>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
