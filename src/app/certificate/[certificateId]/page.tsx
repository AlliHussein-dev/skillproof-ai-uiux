"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Download,
  Share2,
  Shield,
  Calendar,
  User,
  CheckCircle2,
  ExternalLink,
  Home
} from "lucide-react";
import { motion } from "framer-motion";

export default function CertificatePage() {
  const certificate = {
    id: "CERT-2024-JS-001234",
    skill: "JavaScript ES6+",
    recipient: "John Doe",
    score: 92,
    date: "December 15, 2024",
    validUntil: "December 15, 2026",
    issuer: "Skill Proof AI",
    verificationUrl: "https://skillproof.ai/verify/CERT-2024-JS-001234",
    blockchainHash: "0x1234567890abcdef..."
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <span className="font-semibold">Certificate</span>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <Home className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Certificate Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="glow-card bg-gradient-to-br from-primary/5 via-background to-accent/5 border-primary/20 overflow-hidden">
            <CardContent className="p-12 relative">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4">
                    <Award className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h1 className="text-4xl font-bold mb-2">Certificate of Achievement</h1>
                  <p className="text-muted-foreground">This certifies that</p>
                </div>

                {/* Recipient Name */}
                <div className="text-center mb-8">
                  <h2 className="text-5xl font-bold gradient-text mb-2">{certificate.recipient}</h2>
                  <p className="text-xl text-muted-foreground">
                    has successfully demonstrated proficiency in
                  </p>
                </div>

                {/* Skill */}
                <div className="text-center mb-8">
                  <Badge className="text-xl px-6 py-2 bg-primary text-primary-foreground">
                    {certificate.skill}
                  </Badge>
                </div>

                {/* Score */}
                <div className="text-center mb-8">
                  <p className="text-muted-foreground mb-2">Achievement Score</p>
                  <p className="text-6xl font-bold gradient-text">{certificate.score}%</p>
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Issue Date</p>
                      <p className="font-semibold">{certificate.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Shield className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Valid Until</p>
                      <p className="font-semibold">{certificate.validUntil}</p>
                    </div>
                  </div>
                </div>

                {/* Verification */}
                <div className="border-t border-border pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Certificate ID</p>
                      <p className="font-mono font-semibold">{certificate.id}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-primary">Blockchain Verified</span>
                    </div>
                  </div>
                </div>

                {/* Signature */}
                <div className="mt-8 pt-6 border-t border-border text-center">
                  <div className="inline-block">
                    <div className="text-2xl font-bold gradient-text mb-2">Skill Proof AI</div>
                    <p className="text-sm text-muted-foreground">Authorized Certificate Issuer</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Verification Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Blockchain Verification */}
          <Card className="glow-card">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Blockchain Verified</h3>
                  <p className="text-sm text-muted-foreground">
                    This certificate is permanently recorded on the blockchain for authenticity.
                  </p>
                </div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Transaction Hash</p>
                <p className="text-sm font-mono break-all">{certificate.blockchainHash}</p>
              </div>
              <Button variant="outline" className="w-full mt-4" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                View on Blockchain
              </Button>
            </CardContent>
          </Card>

          {/* Public Verification */}
          <Card className="glow-card">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Public Verification</h3>
                  <p className="text-sm text-muted-foreground">
                    Anyone can verify this certificate's authenticity using the ID.
                  </p>
                </div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Verification URL</p>
                <p className="text-sm break-all">{certificate.verificationUrl}</p>
              </div>
              <Button variant="outline" className="w-full mt-4" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                Verify Certificate
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Share Options */}
        <Card className="mt-6 glow-card">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Share Your Achievement</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Button variant="outline" className="justify-start">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </Button>
              <Button variant="outline" className="justify-start">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Twitter
              </Button>
              <Button variant="outline" className="justify-start">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </Button>
              <Button variant="outline" className="justify-start">
                <Share2 className="w-4 h-4 mr-2" />
                More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}