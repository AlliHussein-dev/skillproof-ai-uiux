"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Award, 
  Brain, 
  CheckCircle2, 
  Clock, 
  FileCheck, 
  GraduationCap, 
  Shield, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Users, 
  Zap,
  ArrowRight,
  Star
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Testing",
      description: "Advanced AI evaluates your skills with precision and provides intelligent feedback."
    },
    {
      icon: Award,
      title: "Verified Certificates",
      description: "Blockchain-verified certificates that employers can trust and verify instantly."
    },
    {
      icon: Clock,
      title: "Real-Time Results",
      description: "Get immediate feedback and detailed analytics on your performance."
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is encrypted and protected with enterprise-grade security."
    },
    {
      icon: TrendingUp,
      title: "Skill Tracking",
      description: "Monitor your progress and improvement over time with detailed analytics."
    },
    {
      icon: Users,
      title: "Employer Recognition",
      description: "Connect with top employers actively seeking verified talent."
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Choose Your Skill",
      description: "Select from 100+ professional skills across technology, business, and creative fields.",
      icon: Target
    },
    {
      step: "02",
      title: "Take AI Assessment",
      description: "Complete adaptive tests that adjust to your skill level in real-time.",
      icon: Brain
    },
    {
      step: "03",
      title: "Get Certified",
      description: "Receive blockchain-verified certificates recognized by leading employers.",
      icon: Award
    },
    {
      step: "04",
      title: "Showcase Skills",
      description: "Share your achievements and get discovered by top companies.",
      icon: Sparkles
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for exploring and trying out basic assessments",
      features: [
        "3 skill assessments per month",
        "Basic certificates",
        "Email support",
        "Public profile",
        "Progress tracking"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "per month",
      description: "Ideal for serious professionals building their portfolio",
      features: [
        "Unlimited skill assessments",
        "Blockchain-verified certificates",
        "Priority support",
        "Advanced analytics",
        "Custom branding",
        "Employer visibility",
        "Certificate downloads"
      ],
      cta: "Start Free Trial",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For organizations managing large-scale assessments",
      features: [
        "Everything in Professional",
        "Custom assessment creation",
        "API access",
        "Dedicated account manager",
        "White-label solution",
        "Advanced integrations",
        "Custom reporting"
      ],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "Tech Corp",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      content: "Skill Proof AI helped me land my dream job! The certificates are recognized by top tech companies.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager",
      company: "Innovation Labs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      content: "The AI assessments are incredibly accurate. I've improved my skills significantly through their feedback.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "HR Director",
      company: "Global Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      content: "We use Skill Proof AI to verify candidate skills. It's saved us countless hours in the hiring process.",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How does AI-powered assessment work?",
      answer: "Our AI analyzes your responses in real-time, adapting question difficulty based on your performance. It evaluates not just correctness, but also problem-solving approach, efficiency, and depth of understanding."
    },
    {
      question: "Are the certificates recognized by employers?",
      answer: "Yes! Our certificates are blockchain-verified and recognized by 500+ leading companies worldwide. Each certificate has a unique verification code that employers can instantly validate."
    },
    {
      question: "What skills can I get certified in?",
      answer: "We offer 100+ skills across technology (programming, cloud, data science), business (project management, marketing), design (UI/UX, graphic design), and more. New skills are added monthly."
    },
    {
      question: "How long does an assessment take?",
      answer: "Most assessments take 30-60 minutes. The AI adapts to your pace, so you can take breaks if needed. You'll receive results immediately after completion."
    },
    {
      question: "Can I retake an assessment?",
      answer: "Yes! You can retake any assessment to improve your score. We track your progress over time, showing your improvement journey to potential employers."
    },
    {
      question: "What's included in the free plan?",
      answer: "The free plan includes 3 assessments per month, basic certificates, and access to your public profile. It's perfect for exploring the platform and getting your first certifications."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0E27]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#1A1F3A]/90 border-b border-blue-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 hover-glow">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg shadow-blue-500/50">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Skill Proof AI</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/employer-dashboard" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                For Employers
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-white border border-blue-500/30 hover:bg-blue-500/10">Sign In</Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/50">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
        
        {/* Floating elements with blue glow */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 rounded-full blur-3xl bg-blue-500/20 animate-pulse-glow"
          animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full blur-3xl bg-purple-500/15 animate-pulse-glow"
          animate={{ y: [0, -40, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-blue-500/15 text-blue-400 border border-blue-500/30">
                <Sparkles className="w-3 h-3 mr-1" />
                AI-Powered Skill Certification
              </Badge>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Prove Your Skills with{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI Precision</span>
              </h1>
              
              <p className="text-xl mb-8 leading-relaxed text-gray-300">
                Get blockchain-verified certificates recognized by top employers worldwide. 
                Our AI adapts to your skill level for accurate, fair assessments.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/register">
                  <Button size="lg" className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/50">
                    Start Free Assessment
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-blue-500/40 hover:bg-blue-500/10">
                    See How It Works
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>500+ companies trust us</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl p-8 bg-[#1A1F3A] border border-blue-500/30 shadow-xl shadow-blue-500/20">
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl bg-blue-500/30 animate-pulse-glow" />
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500/20">
                        <Brain className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">AI Assessment</p>
                        <p className="text-sm text-gray-400">In Progress</p>
                      </div>
                    </div>
                    <Badge className="bg-blue-500/20 text-blue-400">Live</Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Progress</span>
                      <span className="font-medium text-white">67%</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden bg-[#0A0E27]">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        animate={{ width: "67%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-blue-500/20">
                    <div>
                      <p className="text-2xl font-bold text-white">15</p>
                      <p className="text-xs text-gray-400">Questions</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">12:34</p>
                      <p className="text-xs text-gray-400">Time Left</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">92%</p>
                      <p className="text-xs text-gray-400">Accuracy</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating certificate preview */}
              <motion.div
                className="absolute -bottom-6 -left-6 rounded-xl p-4 shadow-xl bg-[#1A1F3A] border border-blue-500/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500/20">
                    <Award className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Certificate Ready</p>
                    <p className="text-xs text-gray-400">Verified by AI</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1F3A]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 glow-primary-soft" style={{ background: 'rgba(161, 201, 154, 0.15)', color: '#A1C99A', border: '1px solid rgba(161, 201, 154, 0.3)' }}>
              <Zap className="w-3 h-3 mr-1" />
              Features
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Everything You Need to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Succeed</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-300">
              Powerful features designed to help you showcase your skills and get recognized
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-[#0A0E27] border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-blue-500/20">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0E27]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/15 text-blue-400 border border-blue-500/30">
              <FileCheck className="w-3 h-3 mr-1" />
              Simple Process
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Get Certified in <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">4 Easy Steps</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-300">
              From selection to certification in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/40 to-transparent" style={{ transform: 'translateX(-50%)' }} />
                  )}
                  
                  <div className="text-center">
                    <div className="relative inline-block mb-4">
                      <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto bg-blue-500/15">
                        <Icon className="w-10 h-10 text-blue-400" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm bg-blue-500 text-white">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1F3A]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/15 text-blue-400 border border-blue-500/30">
              <Sparkles className="w-3 h-3 mr-1" />
              Pricing
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Choose Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Plan</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-300">
              Start free, upgrade when you're ready
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full relative bg-[#0A0E27] ${plan.highlighted ? 'border-2 border-blue-500 shadow-xl shadow-blue-500/20' : 'border border-blue-500/20'}`}>
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-blue-500 text-white">Most Popular</Badge>
                    </div>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="ml-2 text-gray-400">/ {plan.period}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <Link href="/register">
                      <Button 
                        className={`w-full mb-6 ${plan.highlighted ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/50' : 'bg-transparent text-white border border-blue-500/40 hover:bg-blue-500/10'}`}
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                    
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-blue-400" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0E27]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/15 text-blue-400 border border-blue-500/30">
              <Users className="w-3 h-3 mr-1" />
              Testimonials
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Loved by <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Professionals</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-300">
              Join thousands who've transformed their careers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-[#1A1F3A] border border-blue-500/20 hover:border-blue-500/40 transition-all">
                  <CardContent className="pt-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
                      ))}
                    </div>
                    
                    <p className="mb-6 text-gray-300">{testimonial.content}</p>
                    
                    <div className="flex items-center gap-3">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/30"
                      />
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1F3A]">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/15 text-blue-400 border border-blue-500/30">
              FAQ
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
              Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="rounded-lg px-6 bg-[#0A0E27] border border-blue-500/20 hover:border-blue-500/40 transition-all">
                <AccordionTrigger className="text-left hover:no-underline text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0E27]">
        <div className="container mx-auto max-w-4xl">
          <Card className="relative overflow-hidden bg-[#1A1F3A] border-2 border-blue-500/40 shadow-xl shadow-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
            <CardContent className="relative pt-12 pb-12 text-center">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                Ready to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Prove Your Skills?</span>
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
                Join 50,000+ professionals who've advanced their careers with verified certifications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/50">
                    Start Free Assessment
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline" className="text-white border-blue-500/40 hover:bg-blue-500/10">
                    Sign In
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-500/20 bg-[#1A1F3A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4 hover-glow">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-500 shadow-lg shadow-blue-500/50">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold text-white">Skill Proof AI</span>
              </Link>
              <p className="text-sm text-gray-400">
                AI-powered skill certification platform trusted by professionals worldwide.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Roadmap</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-blue-500/20">
            <p className="text-sm text-gray-400">
              © 2024 Skill Proof AI. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="gap-1 border-blue-500/30 text-blue-400">
                <Shield className="w-3 h-3" />
                Enterprise Security
              </Badge>
              <Badge variant="outline" className="gap-1 border-blue-500/30 text-blue-400">
                <Award className="w-3 h-3" />
                Blockchain Verified
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}