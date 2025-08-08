import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  Edit,
  Save,
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  Calendar,
  Shield,
  Settings
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminProfile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@jobportal.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    company: "JobPortal Pro",
    department: "Operations",
    bio: "Experienced administrator with 5+ years managing job portals and recruitment platforms. Passionate about connecting talent with opportunities.",
    joinDate: "2023-01-15"
  });

  const handleSave = () => {
    // Here you would typically save to backend
    console.log("Saving profile:", profile);
    setIsEditing(false);
  };

  const stats = [
    { label: "Jobs Posted", value: "24", color: "text-primary" },
    { label: "Users Managed", value: "156", color: "text-success" },
    { label: "Applications", value: "432", color: "text-warning" },
    { label: "Interviews", value: "89", color: "text-secondary" }
  ];

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
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Admin Profile
              </h1>
              <p className="text-muted-foreground">Manage your account settings and information</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant={isEditing ? "success" : "outline"}
              onClick={isEditing ? handleSave : () => setIsEditing(true)}
            >
              {isEditing ? (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </>
              ) : (
                <>
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </>
              )}
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Overview */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-card animate-fade-in">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-24 w-24">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl">
                      AU
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-xl">{profile.name}</CardTitle>
                <CardDescription className="flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" />
                  System Administrator
                </CardDescription>
                <Badge variant="success" className="w-fit mx-auto">
                  Active
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>{profile.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>{profile.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{profile.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-muted-foreground" />
                    <span>{profile.company}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>Joined {new Date(profile.joinDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-card animate-fade-in">
              <CardHeader>
                <CardTitle className="text-lg">Performance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-3 rounded-lg bg-muted/20">
                      <div className={`text-2xl font-bold ${stat.color}`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="shadow-card animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </CardTitle>
                <CardDescription>
                  Update your personal details and contact information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) => setProfile({...profile, name: e.target.value})}
                      disabled={!isEditing}
                      className={isEditing ? "border-primary" : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({...profile, email: e.target.value})}
                      disabled={!isEditing}
                      className={isEditing ? "border-primary" : ""}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={profile.phone}
                      onChange={(e) => setProfile({...profile, phone: e.target.value})}
                      disabled={!isEditing}
                      className={isEditing ? "border-primary" : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={profile.location}
                      onChange={(e) => setProfile({...profile, location: e.target.value})}
                      disabled={!isEditing}
                      className={isEditing ? "border-primary" : ""}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={profile.company}
                      onChange={(e) => setProfile({...profile, company: e.target.value})}
                      disabled={!isEditing}
                      className={isEditing ? "border-primary" : ""}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department</Label>
                    <Input
                      id="department"
                      value={profile.department}
                      onChange={(e) => setProfile({...profile, department: e.target.value})}
                      disabled={!isEditing}
                      className={isEditing ? "border-primary" : ""}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    value={profile.bio}
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    disabled={!isEditing}
                    className={`min-h-[100px] ${isEditing ? "border-primary" : ""}`}
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* System Settings */}
            <Card className="shadow-card animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  System Settings
                </CardTitle>
                <CardDescription>
                  Configure system preferences and security settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Permissions</h4>
                    <div className="space-y-2">
                      <Badge variant="success">User Management</Badge>
                      <Badge variant="success">Job Posting</Badge>
                      <Badge variant="success">System Configuration</Badge>
                      <Badge variant="success">Analytics Access</Badge>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Security</h4>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full">
                        Change Password
                      </Button>
                      <Button variant="outline" className="w-full">
                        Enable 2FA
                      </Button>
                      <Button variant="outline" className="w-full">
                        Session Management
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;