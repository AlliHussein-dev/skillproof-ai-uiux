"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  Brain, 
  Clock, 
  ChevronRight,
  ChevronLeft,
  Flag,
  AlertCircle
} from "lucide-react";
import { motion } from "framer-motion";

export default function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes in seconds
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const questions = [
    {
      id: 1,
      question: "What is the correct way to declare a variable in JavaScript ES6?",
      options: [
        { id: "a", text: "var myVariable = 10;" },
        { id: "b", text: "let myVariable = 10;" },
        { id: "c", text: "const myVariable = 10;" },
        { id: "d", text: "All of the above" }
      ],
      difficulty: "Easy"
    },
    {
      id: 2,
      question: "Which hook is used for side effects in React?",
      options: [
        { id: "a", text: "useState" },
        { id: "b", text: "useEffect" },
        { id: "c", text: "useContext" },
        { id: "d", text: "useReducer" }
      ],
      difficulty: "Medium"
    },
    {
      id: 3,
      question: "What is the time complexity of binary search?",
      options: [
        { id: "a", text: "O(n)" },
        { id: "b", text: "O(log n)" },
        { id: "c", text: "O(n²)" },
        { id: "d", text: "O(1)" }
      ],
      difficulty: "Medium"
    },
    {
      id: 4,
      question: "Which CSS property is used to create flexbox layouts?",
      options: [
        { id: "a", text: "display: grid" },
        { id: "b", text: "display: flex" },
        { id: "c", text: "display: block" },
        { id: "d", text: "display: inline" }
      ],
      difficulty: "Easy"
    },
    {
      id: 5,
      question: "What is a closure in JavaScript?",
      options: [
        { id: "a", text: "A function that has access to variables in its outer scope" },
        { id: "b", text: "A function that closes the browser" },
        { id: "c", text: "A method to close connections" },
        { id: "d", text: "None of the above" }
      ],
      difficulty: "Hard"
    }
  ];

  const totalQuestions = questions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                <span className="font-semibold">JavaScript Assessment</span>
              </div>
              <Badge variant="outline">Question {currentQuestion + 1}/{totalQuestions}</Badge>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-mono font-semibold">{formatTime(timeLeft)}</span>
              </div>
              <Link href="/results/1">
                <Button variant="outline" size="sm">
                  <Flag className="w-4 h-4 mr-2" />
                  Submit Test
                </Button>
              </Link>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="glow-card">
            <CardContent className="pt-8 pb-8">
              {/* Question Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-medium text-muted-foreground">
                      Question {currentQuestion + 1} of {totalQuestions}
                    </span>
                    <Badge variant={
                      questions[currentQuestion].difficulty === "Easy" ? "secondary" :
                      questions[currentQuestion].difficulty === "Medium" ? "default" :
                      "destructive"
                    }>
                      {questions[currentQuestion].difficulty}
                    </Badge>
                  </div>
                  <h2 className="text-2xl font-bold leading-relaxed">
                    {questions[currentQuestion].question}
                  </h2>
                </div>
              </div>

              {/* AI Tip */}
              <div className="mb-8 p-4 bg-primary/5 border border-primary/20 rounded-lg flex items-start gap-3">
                <Brain className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold mb-1">AI Tip</p>
                  <p className="text-sm text-muted-foreground">
                    Take your time to read the question carefully. The AI is analyzing your response patterns.
                  </p>
                </div>
              </div>

              {/* Options */}
              <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer} className="space-y-3">
                {questions[currentQuestion].options.map((option, idx) => (
                  <motion.div
                    key={option.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    <Label
                      htmlFor={option.id}
                      className={`flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all hover:bg-muted/50 ${
                        selectedAnswer === option.id
                          ? "border-primary bg-primary/5"
                          : "border-border"
                      }`}
                    >
                      <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{option.id.toUpperCase()}.</span>
                          <span>{option.text}</span>
                        </div>
                      </div>
                    </Label>
                  </motion.div>
                ))}
              </RadioGroup>

              {/* Warning */}
              {!selectedAnswer && (
                <div className="mt-6 p-4 bg-muted rounded-lg flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Please select an answer before proceeding to the next question.
                  </p>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                <div className="text-sm text-muted-foreground">
                  {currentQuestion + 1} / {totalQuestions}
                </div>

                {currentQuestion < totalQuestions - 1 ? (
                  <Button
                    onClick={handleNext}
                    disabled={!selectedAnswer}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Link href="/results/1">
                    <Button className="bg-primary hover:bg-primary/90">
                      Submit Test
                      <Flag className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Question Navigator */}
        <Card className="mt-6">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Question Navigator</h3>
            <div className="grid grid-cols-10 gap-2">
              {Array.from({ length: totalQuestions }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentQuestion(idx)}
                  className={`aspect-square rounded-lg border-2 font-semibold text-sm transition-all ${
                    idx === currentQuestion
                      ? "border-primary bg-primary text-primary-foreground"
                      : idx < currentQuestion
                      ? "border-green-500 bg-green-500/10 text-green-500"
                      : "border-border hover:bg-muted"
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
