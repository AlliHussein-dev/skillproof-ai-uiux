"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Building2,
  Search,
  Filter,
  Award,
  Users,
  TrendingUp,
  CheckCircle2,
  Download,
  ExternalLink,
  Mail,
  GraduationCap,
  Star,
  Shield
} from "lucide-react";
import { motion } from "framer-motion";

export default function EmployerDashboardPage() {
  const stats = [
    { label: "Total Candidates", value: "1,247", icon: Users, change: "+12.5%" },
    { label: "Verified Skills", value: "3,891", icon: Award, change: "+8.2%" },
    { label: "Avg. Score", value: "87%", icon: TrendingUp, change: "+3.1%" },
    { label: "Active Searches", value: "23", icon: Search, change: "+5" }
  ];

  const candidates = [
    {
      name: "Sarah Chen",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      skills: [
        { name: "JavaScript", score: 92, verified: true },
        { name: "React", score: 88, verified: true },
        { name: "Node.js", score: 85, verified: true }
      ],
      location: "San Francisco, CA",
      experience: "5 years",
      avgScore: 88,
      certificates: 12
    },
    {
      name: "Michael Rodriguez",
      role: "Data Scientist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      skills: [
        { name: "Python", score: 95, verified: true },
        { name: "Machine Learning", score: 90, verified: true },
        { name: "SQL", score: 92, verified: true }
      ],
      location: "New York, NY",
      experience: "7 years",
      avgScore: 92,
      certificates: 15
    },
    {
      name: "Emily Watson",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      skills: [
        { name: "UI/UX Design", score: 94, verified: true },
        { name: "Figma", score: 89, verified: true },
        { name: "User Research", score: 91, verified: true }
      ],
      location: "Austin, TX",
      experience: "4 years",
      avgScore: 91,
      certificates: 10
    }
  ];

  const topSkills = [
    { name: "JavaScript", candidates: 847, avgScore: 84 },
    { name: "Python", candidates: 723, avgScore: 86 },
    { name: "React", candidates: 654, avgScore: 82 },
    { name: "SQL", candidates: 589, avgScore: 88 },
    { name: "UI/UX Design", candidates: 432, avgScore: 85 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-50 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">Skill Proof AI</h1>
                <p className="text-xs text-muted-foreground">Employer Portal</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button variant="outline" size="sm">
                  Exit Portal
                </Button>
              </Link>
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" />
                <AvatarFallback>TC</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Find Verified Talent</h2>
          <p className="text-muted-foreground">
            Search through thousands of candidates with blockchain-verified skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="glow-card">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <div className="flex items-baseline gap-2 mt-1">
                          <p className="text-3xl font-bold">{stat.value}</p>
                          <Badge variant="secondary" className="text-xs">
                            {stat.change}
                          </Badge>
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <Card className="glow-card">
          <CardHeader>
            <CardTitle>Search Candidates</CardTitle>
            <CardDescription>Find talent with verified skills</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by skills, role, or name..."
                    className="pl-10"
                  />
                </div>
              </div>
              <Select defaultValue="all-skills">
                <SelectTrigger>
                  <SelectValue placeholder="Select skill" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-skills">All Skills</SelectItem>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="sql">SQL</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all-locations">
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-locations">All Locations</SelectItem>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="sf">San Francisco</SelectItem>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="austin">Austin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
              <Badge variant="secondary">1,247 candidates found</Badge>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xl font-semibold">Top Matches</h3>
            {candidates.map((candidate, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="glow-card hover:shadow-lg transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={candidate.image} />
                        <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-lg font-semibold">{candidate.name}</h4>
                            <p className="text-sm text-muted-foreground">{candidate.role}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-primary/10 text-primary">
                              <Star className="w-3 h-3 mr-1 fill-primary" />
                              {candidate.avgScore}%
                            </Badge>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <span>{candidate.location}</span>
                          <span>•</span>
                          <span>{candidate.experience}</span>
                          <span>•</span>
                          <span>{candidate.certificates} certificates</span>
                        </div>

                        <div className="space-y-2 mb-4">
                          <p className="text-sm font-medium">Verified Skills:</p>
                          <div className="flex flex-wrap gap-2">
                            {candidate.skills.map((skill, skillIdx) => (
                              <Badge key={skillIdx} variant="outline" className="gap-1">
                                {skill.verified && <CheckCircle2 className="w-3 h-3 text-green-500" />}
                                {skill.name} ({skill.score}%)
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button size="sm" className="bg-primary hover:bg-primary/90">
                            <Mail className="w-4 h-4 mr-2" />
                            Contact
                          </Button>
                          <Button size="sm" variant="outline">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Profile
                          </Button>
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Download Resume
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            <Card className="glow-card">
              <CardHeader>
                <CardTitle>Top Skills</CardTitle>
                <CardDescription>Most verified skills in our database</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topSkills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <Badge variant="secondary">{skill.candidates}</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${skill.avgScore}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">{skill.avgScore}%</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glow-card bg-gradient-to-br from-primary/10 via-transparent to-accent/10 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Blockchain Verified</p>
                    <p className="text-xs text-muted-foreground">All certificates authenticated</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Verifications</span>
                    <span className="font-semibold">3,891</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Success Rate</span>
                    <span className="font-semibold">98.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Avg. Verification Time</span>
                    <span className="font-semibold">&lt; 1 sec</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glow-card">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <Building2 className="w-12 h-12 text-primary mx-auto" />
                  <div>
                    <h3 className="font-semibold mb-2">Need Help?</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team can help you find the perfect candidates
                    </p>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Schedule Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}