"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Award, 
  Brain, 
  ChevronRight, 
  Clock, 
  Download,
  GraduationCap, 
  LogOut,
  Menu,
  Search,
  Settings,
  TrendingUp,
  Trophy,
  User,
  Bell,
  Target,
  Code,
  Palette,
  BarChart3,
  Shield
} from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";

export default function DashboardPage() {
  const stats = [
    { label: "Certificates", value: "12", icon: Award, color: "text-primary" },
    { label: "Tests Taken", value: "28", icon: Brain, color: "text-primary" },
    { label: "Hours Studied", value: "156", icon: Clock, color: "text-primary" },
    { label: "Rank", value: "#247", icon: Trophy, color: "text-primary" }
  ];

  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      skills: [
        { name: "JavaScript", level: 85, status: "certified", lastTest: "2 days ago" },
        { name: "Python", level: 92, status: "certified", lastTest: "1 week ago" },
        { name: "React", level: 78, status: "in-progress", lastTest: "Ongoing" }
      ]
    },
    {
      title: "Design",
      icon: Palette,
      skills: [
        { name: "UI/UX Design", level: 88, status: "certified", lastTest: "3 days ago" },
        { name: "Figma", level: 75, status: "not-started", lastTest: "Not taken" }
      ]
    },
    {
      title: "Data Science",
      icon: BarChart3,
      skills: [
        { name: "Machine Learning", level: 70, status: "in-progress", lastTest: "Ongoing" },
        { name: "SQL", level: 95, status: "certified", lastTest: "1 month ago" }
      ]
    }
  ];

  const recentCertificates = [
    {
      id: 1,
      skill: "Advanced Python",
      score: 92,
      date: "Dec 15, 2024",
      verified: true,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      skill: "UI/UX Design",
      score: 88,
      date: "Dec 12, 2024",
      verified: true,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      skill: "JavaScript ES6+",
      score: 85,
      date: "Dec 10, 2024",
      verified: true,
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=100&h=100&fit=crop"
    }
  ];

  const testHistory = [
    { skill: "Python", score: 92, date: "Dec 15, 2024", status: "passed", duration: "45m" },
    { skill: "UI/UX Design", score: 88, date: "Dec 12, 2024", status: "passed", duration: "52m" },
    { skill: "JavaScript", score: 85, date: "Dec 10, 2024", status: "passed", duration: "38m" },
    { skill: "React", score: 65, date: "Dec 8, 2024", status: "in-progress", duration: "25m" },
    { skill: "SQL", score: 95, date: "Nov 28, 2024", status: "passed", duration: "41m" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center gap-2 border-b border-border px-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center glow-primary-soft">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold gradient-text">Skill Proof AI</span>
          </div>

          {/* User Profile */}
          <div className="border-b border-border p-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 ring-2 ring-primary/20">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">John Doe</p>
                <p className="text-xs text-muted-foreground truncate">john@example.com</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            <Link href="/dashboard">
              <Button variant="secondary" className="w-full justify-start gap-2 hover-glow">
                <Target className="w-4 h-4" />
                Dashboard
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Brain className="w-4 h-4" />
                My Tests
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Award className="w-4 h-4" />
                Certificates
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <TrendingUp className="w-4 h-4" />
                Progress
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Settings className="w-4 h-4" />
                Settings
              </Button>
            </Link>
          </nav>

          {/* Logout */}
          <div className="border-t border-border p-4">
            <Link href="/">
              <Button variant="ghost" className="w-full justify-start gap-2 text-primary hover:text-primary/80">
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-xl">
          <div className="flex h-16 items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search skills, tests, certificates..."
                  className="pl-10 focus-ring"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
              </Button>
              <Link href="/">
                <Button variant="outline" size="sm" className="hover-glow">
                  View Profile
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <h1 className="text-3xl font-bold glow-text">Welcome back, John! 👋</h1>
                <p className="text-muted-foreground mt-1">Track your progress and continue learning</p>
              </div>
              <Link href="/test/new">
                <Button size="lg" className="bg-primary hover:bg-primary/90 press-animate">
                  <Brain className="w-4 h-4 mr-2" />
                  Start New Test
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glow-card hover-glow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-3xl font-bold mt-1 text-primary">{stat.value}</p>
                      </div>
                      <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center glow-radial ${stat.color}`}>
                        <stat.icon className="w-6 h-6" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Skill Progress */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="glow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Your Skills</CardTitle>
                      <CardDescription>Track your progress across different skills</CardDescription>
                    </div>
                    <Button variant="outline" size="sm" className="hover-glow">View All</Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skillCategories.map((category, idx) => (
                    <div key={idx} className="space-y-4">
                      <div className="flex items-center gap-2">
                        <category.icon className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold">{category.title}</h3>
                      </div>
                      <div className="space-y-3">
                        {category.skills.map((skill, skillIdx) => (
                          <div key={skillIdx} className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">{skill.name}</span>
                                {skill.status === "certified" && (
                                  <Badge variant="default" className="h-5 text-xs bg-primary/10 text-primary border-primary/20">
                                    <Award className="w-3 h-3 mr-1" />
                                    Certified
                                  </Badge>
                                )}
                                {skill.status === "in-progress" && (
                                  <Badge variant="secondary" className="h-5 text-xs">
                                    In Progress
                                  </Badge>
                                )}
                              </div>
                              <span className="text-primary font-semibold">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                            <p className="text-xs text-muted-foreground">Last test: {skill.lastTest}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Test History */}
              <Card className="glow-card">
                <CardHeader>
                  <CardTitle>Recent Test History</CardTitle>
                  <CardDescription>Your latest assessment results</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {testHistory.map((test, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors hover-glow cursor-pointer">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center glow-radial">
                            <Brain className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold">{test.skill}</p>
                            <p className="text-xs text-muted-foreground">{test.date} • {test.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={test.status === "passed" ? "default" : "secondary"} className="bg-primary/10 text-primary border-primary/20">
                            {test.score}%
                          </Badge>
                          <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Widgets */}
            <div className="space-y-6">
              {/* Recent Certificates */}
              <Card className="glow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Recent Certificates
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentCertificates.map((cert) => (
                    <div key={cert.id} className="relative overflow-hidden rounded-lg border border-border p-4 hover:shadow-lg transition-all hover-glow cursor-pointer">
                      <div className="absolute top-2 right-2">
                        {cert.verified && (
                          <Badge className="bg-primary/10 text-primary border-primary/20">
                            <Shield className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3 mb-3">
                        <img 
                          src={cert.image} 
                          alt={cert.skill}
                          className="w-12 h-12 rounded-lg object-cover ring-2 ring-primary/20"
                        />
                        <div>
                          <p className="font-semibold">{cert.skill}</p>
                          <p className="text-xs text-muted-foreground">{cert.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-primary" />
                          <span className="text-lg font-bold text-primary">{cert.score}%</span>
                        </div>
                        <Link href={`/certificate/${cert.id}`}>
                          <Button variant="ghost" size="sm" className="hover-glow">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                  <Link href="/dashboard">
                    <Button variant="outline" className="w-full hover-glow">
                      View All Certificates
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="glow-card">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="/test/new">
                    <Button variant="outline" className="w-full justify-start gap-2 hover-glow">
                      <Brain className="w-4 h-4" />
                      Start Assessment
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button variant="outline" className="w-full justify-start gap-2 hover-glow">
                      <Award className="w-4 h-4" />
                      View Certificates
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button variant="outline" className="w-full justify-start gap-2 hover-glow">
                      <User className="w-4 h-4" />
                      Edit Profile
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Progress Card */}
              <Card className="glow-card glow-edge bg-gradient-to-br from-primary/10 via-transparent to-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto glow-primary-strong animate-pulse-glow">
                      <Trophy className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">Level 12</p>
                      <p className="text-sm text-muted-foreground">Professional</p>
                    </div>
                    <Progress value={65} className="h-2" />
                    <p className="text-xs text-muted-foreground">350 XP to next level</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}