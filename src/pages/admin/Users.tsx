import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Search, 
  Filter, 
  Edit, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  ArrowLeft,
  User,
  Crown,
  Star
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminUsers = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@email.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      subscription: "premium",
      status: "active",
      joinDate: "2024-01-15",
      applications: 12,
      role: "Job Seeker"
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah.wilson@email.com",
      phone: "+1 (555) 234-5678",
      location: "New York, NY",
      subscription: "free",
      status: "active",
      joinDate: "2024-02-20",
      applications: 8,
      role: "Job Seeker"
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.johnson@email.com",
      phone: "+1 (555) 345-6789",
      location: "Remote",
      subscription: "basic",
      status: "inactive",
      joinDate: "2024-01-08",
      applications: 15,
      role: "Job Seeker"
    },
    {
      id: 4,
      name: "Emma Davis",
      email: "emma.davis@email.com",
      phone: "+1 (555) 456-7890",
      location: "Chicago, IL",
      subscription: "premium",
      status: "active",
      joinDate: "2024-03-01",
      applications: 6,
      role: "Job Seeker"
    },
    {
      id: 5,
      name: "Alex Smith",
      email: "alex.smith@email.com",
      phone: "+1 (555) 567-8901",
      location: "Los Angeles, CA",
      subscription: "free",
      status: "active",
      joinDate: "2024-02-14",
      applications: 20,
      role: "Job Seeker"
    }
  ];

  const getSubscriptionColor = (subscription: string) => {
    switch (subscription) {
      case "premium": return "premium";
      case "basic": return "pending";
      case "free": return "default";
      default: return "default";
    }
  };

  const getStatusColor = (status: string) => {
    return status === "active" ? "success" : "rejected";
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = 
      filterStatus === "all" || 
      user.status === filterStatus ||
      user.subscription === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/admin/dashboard")}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold  bg-clip-text ">
                User Management
              </h1>
              <p className="text-muted-foreground">Monitor and manage job seeker profiles</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6 space-y-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-fade-in">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Users</p>
                  <p className="text-2xl font-bold">{users.length}</p>
                </div>
                <User className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                  <p className="text-2xl font-bold">{users.filter(u => u.status === "active").length}</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-success flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-success-foreground"></div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Premium Users</p>
                  <p className="text-2xl font-bold">{users.filter(u => u.subscription === "premium").length}</p>
                </div>
                <Crown className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Applications</p>
                  <p className="text-2xl font-bold">
                    {Math.round(users.reduce((acc, u) => acc + u.applications, 0) / users.length)}
                  </p>
                </div>
                <Star className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-fade-in">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant={filterStatus === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterStatus("all")}
            >
              All
            </Button>
            <Button 
              variant={filterStatus === "active" ? "success" : "outline"}
              size="sm"
              onClick={() => setFilterStatus("active")}
            >
              Active
            </Button>
            <Button 
              variant={filterStatus === "premium" ? "premium" : "outline"}
              size="sm"
              onClick={() => setFilterStatus("premium")}
            >
              Premium
            </Button>
          </div>
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 animate-fade-in">
          {filteredUsers.map((user, index) => (
            <Card key={user.id} className="hover-lift shadow-card group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{user.name}</CardTitle>
                      <CardDescription>{user.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Badge variant={getSubscriptionColor(user.subscription)}>
                      {user.subscription}
                    </Badge>
                    <Badge variant={getStatusColor(user.status)} className="text-xs">
                      {user.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span className="truncate">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>{user.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{user.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>Joined {new Date(user.joinDate).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {user.applications} applications
                    </span>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No users found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUsers;