import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft,
  Edit,
  Save,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Plus,
  X,
  Upload,
  Github,
  Linkedin,
  Globe
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const JobSeekerProfile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    title: "Senior React Developer",
    bio: "Passionate frontend developer with 5+ years of experience building scalable web applications. Expertise in React, TypeScript, and modern web technologies.",
    experience: [
      {
        company: "TechCorp",
        position: "Senior Frontend Developer",
        duration: "2022 - Present",
        description: "Lead frontend development for enterprise applications using React and TypeScript."
      },
      {
        company: "StartupXYZ",
        position: "Frontend Developer",
        duration: "2020 - 2022", 
        description: "Built responsive web applications and improved user experience metrics by 40%."
      }
    ],
    education: [
      {
        institution: "University of California",
        degree: "Bachelor of Computer Science",
        year: "2020"
      }
    ],
    skills: ["React", "TypeScript", "JavaScript", "Node.js", "Python", "AWS", "MongoDB", "GraphQL"],
    links: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      portfolio: "https://johndoe.dev"
    }
  });

  const [newSkill, setNewSkill] = useState("");

  const handleSave = () => {
    console.log("Saving profile:", profile);
    setIsEditing(false);
  };

  const addSkill = () => {
    if (newSkill.trim() && !profile.skills.includes(newSkill.trim())) {
      setProfile({
        ...profile,
        skills: [...profile.skills, newSkill.trim()]
      });
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setProfile({
      ...profile,
      skills: profile.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const completionPercentage = 75; // This would be calculated based on filled fields

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/dashboard")}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold  bg-clip-text ">
                My Profile
              </h1>
              <p className="text-muted-foreground">Manage your professional information</p>
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
                <div className="flex justify-center mb-4 relative">
                  <Avatar className="h-24 w-24">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground text-2xl">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button size="icon" variant="outline" className="absolute -bottom-2 -right-2">
                      <Upload className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                <CardTitle className="text-xl">{profile.name}</CardTitle>
                <CardDescription>{profile.title}</CardDescription>
                <Badge variant="secondary" className="w-fit mx-auto">
                  Job Seeker
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
                </div>

                <div className="pt-4 border-t space-y-3">
                  <h4 className="font-medium text-sm">Social Links</h4>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="h-8 w-8">
                      <Globe className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profile Completion */}
            <Card className="shadow-card animate-fade-in">
              <CardHeader>
                <CardTitle className="text-lg">Profile Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Profile completeness</span>
                      <span>{completionPercentage}%</span>
                    </div>
                    <Progress value={completionPercentage} className="h-2" />
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Basic information</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span>Work experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-muted rounded-full"></div>
                      <span>Profile photo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-muted rounded-full"></div>
                      <span>Portfolio projects</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Profile Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card className="shadow-card animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </CardTitle>
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
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={profile.location}
                      onChange={(e) => setProfile({...profile, location: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Professional Title</Label>
                  <Input
                    id="title"
                    value={profile.title}
                    onChange={(e) => setProfile({...profile, title: e.target.value})}
                    disabled={!isEditing}
                    placeholder="e.g. Senior React Developer"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Professional Summary</Label>
                  <Textarea
                    id="bio"
                    value={profile.bio}
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    disabled={!isEditing}
                    className="min-h-[100px]"
                    placeholder="Tell employers about your experience and expertise..."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="shadow-card animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {skill}
                      {isEditing && (
                        <button
                          onClick={() => removeSkill(skill)}
                          className="ml-2 hover:text-destructive"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      )}
                    </Badge>
                  ))}
                </div>
                {isEditing && (
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add a skill"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                    />
                    <Button onClick={addSkill} size="icon">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Work Experience */}
            <Card className="shadow-card animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {profile.experience.map((exp, index) => (
                  <div key={index} className="space-y-3 pb-6 border-b last:border-b-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold">{exp.position}</h4>
                        <p className="text-primary">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.duration}</p>
                      </div>
                      {isEditing && (
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
                {isEditing && (
                  <Button variant="outline" className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Experience
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="shadow-card animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profile.education.map((edu, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">{edu.degree}</h4>
                      <p className="text-primary">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.year}</p>
                    </div>
                    {isEditing && (
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
                {isEditing && (
                  <Button variant="outline" className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Education
                  </Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerProfile;