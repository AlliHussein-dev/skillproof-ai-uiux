"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Shield,
  Users,
  Award,
  Brain,
  TrendingUp,
  Activity,
  DollarSign,
  FileText,
  Settings,
  Search,
  MoreVertical,
  CheckCircle2,
  XCircle,
  Clock,
  GraduationCap
} from "lucide-react";
import { motion } from "framer-motion";

export default function AdminPage() {
  const stats = [
    { label: "Total Users", value: "12,847", icon: Users, change: "+12.5%", color: "text-blue-500" },
    { label: "Tests Taken", value: "45,291", icon: Brain, change: "+18.2%", color: "text-purple-500" },
    { label: "Certificates Issued", value: "28,934", icon: Award, change: "+15.7%", color: "text-green-500" },
    { label: "Monthly Revenue", value: "$127K", icon: DollarSign, change: "+23.1%", color: "text-yellow-500" }
  ];

  const recentUsers = [
    {
      name: "John Doe",
      email: "john@example.com",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      plan: "Professional",
      status: "active",
      joined: "2 hours ago"
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      plan: "Free",
      status: "active",
      joined: "5 hours ago"
    },
    {
      name: "Mike Johnson",
      email: "mike@example.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      plan: "Enterprise",
      status: "pending",
      joined: "1 day ago"
    }
  ];

  const recentTests = [
    { user: "Sarah Chen", skill: "JavaScript", score: 92, status: "completed", time: "10 mins ago" },
    { user: "David Lee", skill: "Python", score: 88, status: "completed", time: "25 mins ago" },
    { user: "Emma Wilson", skill: "React", score: 0, status: "in-progress", time: "35 mins ago" },
    { user: "Alex Brown", skill: "SQL", score: 95, status: "completed", time: "1 hour ago" }
  ];

  const systemHealth = [
    { metric: "API Response Time", value: "45ms", status: "good" },
    { metric: "Database Load", value: "32%", status: "good" },
    { metric: "Active Sessions", value: "1,247", status: "good" },
    { metric: "Error Rate", value: "0.02%", status: "good" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-card">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center gap-2 border-b border-border px-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <span className="text-lg font-bold gradient-text">Skill Proof AI</span>
              <p className="text-xs text-muted-foreground">Admin Panel</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            <Button variant="secondary" className="w-full justify-start gap-2">
              <Activity className="w-4 h-4" />
              Overview
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Users className="w-4 h-4" />
              Users
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Brain className="w-4 h-4" />
              Tests
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Award className="w-4 h-4" />
              Certificates
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <FileText className="w-4 h-4" />
              Reports
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </Button>
          </nav>

          {/* Logout */}
          <div className="border-t border-border p-4">
            <Link href="/">
              <Button variant="ghost" className="w-full justify-start gap-2">
                Exit Admin
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
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search users, tests, certificates..."
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                All Systems Operational
              </Badge>
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          {/* Welcome */}
          <div>
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Monitor and manage platform operations</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
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
                      <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center ${stat.color}`}>
                        <stat.icon className="w-6 h-6" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="tests">Tests</TabsTrigger>
              <TabsTrigger value="system">System</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Users */}
                <Card className="glow-card">
                  <CardHeader>
                    <CardTitle>Recent Users</CardTitle>
                    <CardDescription>Latest user registrations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentUsers.map((user, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-border">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={user.image} />
                            <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-sm">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{user.plan}</Badge>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Recent Tests */}
                <Card className="glow-card">
                  <CardHeader>
                    <CardTitle>Recent Tests</CardTitle>
                    <CardDescription>Latest assessment activity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentTests.map((test, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-border">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <Brain className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-semibold text-sm">{test.user}</p>
                              <p className="text-xs text-muted-foreground">{test.skill} • {test.time}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {test.status === "completed" ? (
                              <Badge className="bg-green-500/10 text-green-700 dark:text-green-400">
                                {test.score}%
                              </Badge>
                            ) : (
                              <Badge variant="secondary">
                                <Clock className="w-3 h-3 mr-1" />
                                In Progress
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* System Health */}
              <Card className="glow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-primary" />
                    System Health
                  </CardTitle>
                  <CardDescription>Real-time system metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-4">
                    {systemHealth.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-lg border border-border">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm text-muted-foreground">{item.metric}</p>
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        </div>
                        <p className="text-2xl font-bold">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="users">
              <Card className="glow-card">
                <CardHeader>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>Manage all platform users</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Plan</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Joined</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentUsers.map((user, idx) => (
                        <TableRow key={idx}>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={user.image} />
                                <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <span className="font-medium">{user.name}</span>
                            </div>
                          </TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{user.plan}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant={user.status === "active" ? "default" : "secondary"}>
                              {user.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{user.joined}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tests">
              <Card className="glow-card">
                <CardHeader>
                  <CardTitle>Test Management</CardTitle>
                  <CardDescription>Monitor all assessment activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Test management interface would be here...</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="system">
              <Card className="glow-card">
                <CardHeader>
                  <CardTitle>System Settings</CardTitle>
                  <CardDescription>Configure platform settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">System configuration interface would be here...</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
