import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeToggle } from "@/components/theme-toggle";
import { Briefcase, User, Mail, Lock } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<"admin" | "jobseeker" | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  if (!role) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        
        <div className="w-full max-w-md animate-fade-in">
          <Card className="shadow-elegant border-0 bg-card/95 backdrop-blur-sm">
            <CardHeader className="text-center space-y-6">
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  JobPortal Pro
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Choose your role to continue
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                variant="hero"
                size="lg"
                className="w-full h-14"
                onClick={() => setRole("admin")}
              >
                <User className="w-5 h-5 mr-2" />
                Continue as Admin
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full h-14 hover-lift"
                onClick={() => setRole("jobseeker")}
              >
                <Briefcase className="w-5 h-5 mr-2" />
                Continue as Job Seeker
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      
      <div className="w-full max-w-md animate-scale-in">
        <Card className="shadow-elegant border-0 bg-card/95 backdrop-blur-sm">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
              {role === "admin" ? (
                <User className="w-8 h-8 text-primary-foreground" />
              ) : (
                <Briefcase className="w-8 h-8 text-primary-foreground" />
              )}
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">
                {role === "admin" ? "Admin Login" : "Job Seeker Login"}
              </CardTitle>
              <CardDescription>
                Enter your credentials to access your dashboard
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 transition-smooth focus:shadow-card"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 transition-smooth focus:shadow-card"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={handleLogin}
              >
                Sign In
              </Button>
              <Button
                variant="ghost"
                className="w-full"
                onClick={() => setRole(null)}
              >
                Back to Role Selection
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;