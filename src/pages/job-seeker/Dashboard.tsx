import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  DollarSign,
  Building,
  BookmarkPlus,
  Eye,
  Send,
  User,
  FileText,
  CreditCard,
  MessageCircle,
  Phone,
  Settings,
  LogOut,
  TrendingUp,
  Calendar,
  Users
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const JobSeekerDashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const applicationStats = [
    {
      title: "Total Applied",
      value: "12",
      change: "+3",
      icon: Send,
      color: "text-primary"
    },
    {
      title: "Ongoing",
      value: "5",
      change: "+2",
      icon: Clock,
      color: "text-warning"
    },
    {
      title: "Interviews",
      value: "2",
      change: "+1",
      icon: Users,
      color: "text-success"
    },
    {
      title: "Rejected",
      value: "5",
      change: "0",
      icon: TrendingUp,
      color: "text-destructive"
    }
  ];

  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $150k",
      posted: "2 days ago",
      logo: "TC"
    },
    {
      id: 2,
      title: "Product Designer",
      company: "DesignStudio",
      location: "Remote",
      type: "Contract",
      salary: "$80k - $100k",
      posted: "1 week ago",
      logo: "DS"
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "DataTech",
      location: "New York, NY",
      type: "Full-time",
      salary: "$110k - $140k",
      posted: "3 days ago",
      logo: "DT"
    },
    {
      id: 4,
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$90k - $120k",
      posted: "5 days ago",
      logo: "SX"
    }
  ];

  const recentApplications = [
    { 
      id: 1, 
      position: "Senior Developer", 
      company: "TechCorp", 
      status: "pending", 
      appliedDate: "2 days ago" 
    },
    { 
      id: 2, 
      position: "UI Designer", 
      company: "DesignStudio", 
      status: "interview", 
      appliedDate: "1 week ago" 
    },
    { 
      id: 3, 
      position: "Product Manager", 
      company: "StartupXYZ", 
      status: "rejected", 
      appliedDate: "2 weeks ago" 
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "default";
      case "interview": return "secondary";
      case "rejected": return "destructive";
      default: return "default";
    }
  };

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Job Dashboard
            </h1>
            <p className="text-muted-foreground">Find your next opportunity</p>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" onClick={() => navigate("/profile")}>
              <User className="w-4 h-4 mr-2" />
              Profile
            </Button>
            <Button variant="outline" onClick={() => navigate("/subscription")}>
              <CreditCard className="w-4 h-4 mr-2" />
              Subscription
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
        <div className="flex flex-wrap gap-4 animate-fade-in">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={() => navigate("/profile")}
            className="hover-lift"
          >
            <FileText className="w-4 h-4 mr-2" />
            Update Profile
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate("/contact")}
            className="hover-lift"
          >
            <Phone className="w-4 h-4 mr-2" />
            Contact Support
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="hover-lift"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            AI Assistant
          </Button>
        </div>

        {/* Application Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {applicationStats.map((stat, index) => (
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
                  <span className="text-success">{stat.change}</span> this week
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Listings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search Bar */}
            <div className="flex gap-4 animate-fade-in">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="w-4 h-4" />
              </Button>
            </div>

            {/* Job Cards */}
            <div className="space-y-4 animate-fade-in">
              {filteredJobs.map((job, index) => (
                <Card key={job.id} className="hover-lift shadow-card group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                            {job.logo}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <div>
                            <h3 className="text-lg font-semibold group-hover:text-primary transition-smooth">
                              {job.title}
                            </h3>
                            <p className="text-muted-foreground font-medium">{job.company}</p>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="w-4 h-4" />
                              <span>{job.salary}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 ml-4">
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                          <Button variant="outline" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <BookmarkPlus className="w-4 h-4" />
                          </Button>
                        </div>
                        <Button variant="hero" size="sm" className="whitespace-nowrap">
                          <Send className="w-4 h-4 mr-2" />
                          Apply Now
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Posted {job.posted}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Applications */}
            <Card className="shadow-card animate-slide-in-right">
              <CardHeader>
                <CardTitle>Recent Applications</CardTitle>
                <CardDescription>Track your application status</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentApplications.map((application) => (
                  <div key={application.id} className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-sm">{application.position}</p>
                        <p className="text-xs text-muted-foreground">{application.company}</p>
                      </div>
                      <Badge variant={getStatusColor(application.status)}>
                        {application.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Applied {application.appliedDate}
                    </p>
                  </div>
                ))}
                <Button variant="outline" className="w-full" size="sm">
                  View All Applications
                </Button>
              </CardContent>
            </Card>

            {/* Profile Completion */}
            <Card className="shadow-card animate-slide-in-right">
              <CardHeader>
                <CardTitle>Profile Completion</CardTitle>
                <CardDescription>Complete your profile to get better matches</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Profile completeness</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Basic information added</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Work experience added</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted rounded-full"></div>
                    <span>Add portfolio items</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-muted rounded-full"></div>
                    <span>Upload profile photo</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full" size="sm" onClick={() => navigate("/profile")}>
                  Complete Profile
                </Button>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="shadow-card animate-slide-in-right">
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/contact")}>
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => navigate("/subscription")}>
                  <CreditCard className="w-4 h-4 mr-2" />
                  Manage Subscription
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  AI Job Assistant
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;