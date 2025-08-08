import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  Calendar,
  Plus,
  Settings,
  LogOut,
  Search,
  Filter
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    {
      title: "Total Jobs Posted",
      value: "24",
      change: "+12%",
      icon: Briefcase,
      color: "text-primary"
    },
    {
      title: "Active Job Seekers",
      value: "156",
      change: "+8%",
      icon: Users,
      color: "text-success"
    },
    {
      title: "Applications Today",
      value: "43",
      change: "+24%",
      icon: TrendingUp,
      color: "text-warning"
    },
    {
      title: "Interviews Scheduled",
      value: "12",
      change: "+5%",
      icon: Calendar,
      color: "text-secondary"
    }
  ];

  const recentApplications = [
    { name: "John Doe", position: "Senior Developer", status: "pending", time: "2 hours ago" },
    { name: "Sarah Wilson", position: "UI Designer", status: "reviewed", time: "4 hours ago" },
    { name: "Mike Johnson", position: "Product Manager", status: "shortlisted", time: "6 hours ago" },
    { name: "Emma Davis", position: "Data Analyst", status: "pending", time: "8 hours ago" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "pending";
      case "reviewed": return "default";
      case "shortlisted": return "success";
      case "rejected": return "rejected";
      default: return "default";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold  bg-clip-text ">
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground">Manage your job portal efficiently</p>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" onClick={() => navigate("/admin/profile")}>
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button variant="ghost" onClick={() => navigate("/login")}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6 space-y-8">
        {/* Quick Actions */}
        <div className="flex gap-4 animate-fade-in">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={() => navigate("/admin/jobs")}
            className="hover-lift"
          >
            <Plus className="w-4 h-4 mr-2" />
            Post New Job
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate("/admin/users")}
            className="hover-lift"
          >
            <Users className="w-4 h-4 mr-2" />
            Manage Users
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {stats.map((stat, index) => (
            <Card key={index} className="hover-lift shadow-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-success">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Applications */}
          <div className="lg:col-span-2">
            <Card className="shadow-card animate-scale-in">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Applications</CardTitle>
                    <CardDescription>
                      Latest job applications received
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Search className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((application, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-4 rounded-lg border bg-muted/10 hover:bg-muted/20 transition-smooth"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-primary-foreground font-medium">
                            {application.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium">{application.name}</p>
                          <p className="text-sm text-muted-foreground">{application.position}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge variant={getStatusColor(application.status)}>
                          {application.status}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {application.time}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-card animate-slide-in-right">
              <CardHeader>
                <CardTitle>Job Performance</CardTitle>
                <CardDescription>This month's overview</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Applications Received</span>
                    <span>156/200</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Positions Filled</span>
                    <span>8/12</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Interview Success Rate</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card animate-slide-in-right">
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Server Status</span>
                  <Badge variant="success">Online</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Email Service</span>
                  <Badge variant="success">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Backup Status</span>
                  <Badge variant="pending">In Progress</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;