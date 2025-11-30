"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Mail, ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="w-full max-w-md relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center justify-center gap-2 mb-8">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold gradient-text">Skill Proof AI</span>
          </Link>

          <Card className="glow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">Reset Password</CardTitle>
              <CardDescription className="text-base">
                Enter your email and we'll send you a reset link
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="pl-10"
                    />
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Send Reset Link
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                <Link href="/login">
                  <Button variant="ghost" className="w-full" size="lg">
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back to Sign In
                  </Button>
                </Link>
              </form>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  Remember your password?{" "}
                  <Link href="/login" className="text-primary font-medium hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
