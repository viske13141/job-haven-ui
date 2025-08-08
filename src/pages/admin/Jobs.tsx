import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  MapPin, 
  Clock, 
  DollarSign,
  Users,
  ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminJobs = () => {
  const navigate = useNavigate();
  const [isPostingJob, setIsPostingJob] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [jobForm, setJobForm] = useState({
    title: "",
    company: "",
    location: "",
    type: "Full-time",
    salary: "",
    description: "",
    requirements: ""
  });

  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $150k",
      applications: 23,
      status: "active",
      posted: "2 days ago"
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "DesignStudio",
      location: "Remote",
      type: "Contract",
      salary: "$80k - $100k",
      applications: 15,
      status: "active",
      posted: "1 week ago"
    },
    {
      id: 3,
      title: "Product Manager",
      company: "StartupXYZ",
      location: "New York, NY",
      type: "Full-time",
      salary: "$130k - $160k",
      applications: 41,
      status: "paused",
      posted: "3 days ago"
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "DataTech",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$110k - $140k",
      applications: 28,
      status: "active",
      posted: "5 days ago"
    }
  ];

  const handlePostJob = () => {
    // Here you would typically submit to backend
    console.log("Posting job:", jobForm);
    setIsPostingJob(false);
    setJobForm({
      title: "",
      company: "",
      location: "",
      type: "Full-time",
      salary: "",
      description: "",
      requirements: ""
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "success";
      case "paused": return "pending";
      case "closed": return "rejected";
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
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate("/admin/dashboard")}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Job Management
              </h1>
              <p className="text-muted-foreground">Create and manage job postings</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6 space-y-8">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 animate-fade-in">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-80">
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
          
          <Dialog open={isPostingJob} onOpenChange={setIsPostingJob}>
            <DialogTrigger asChild>
              <Button variant="hero" className="hover-lift">
                <Plus className="w-4 h-4 mr-2" />
                Post New Job
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Post New Job</DialogTitle>
                <DialogDescription>
                  Create a new job posting to attract qualified candidates.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Job Title</Label>
                    <Input
                      id="title"
                      value={jobForm.title}
                      onChange={(e) => setJobForm({...jobForm, title: e.target.value})}
                      placeholder="e.g. Senior React Developer"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={jobForm.company}
                      onChange={(e) => setJobForm({...jobForm, company: e.target.value})}
                      placeholder="e.g. TechCorp"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={jobForm.location}
                      onChange={(e) => setJobForm({...jobForm, location: e.target.value})}
                      placeholder="e.g. San Francisco, CA"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="salary">Salary Range</Label>
                    <Input
                      id="salary"
                      value={jobForm.salary}
                      onChange={(e) => setJobForm({...jobForm, salary: e.target.value})}
                      placeholder="e.g. $120k - $150k"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Job Description</Label>
                  <Textarea
                    id="description"
                    value={jobForm.description}
                    onChange={(e) => setJobForm({...jobForm, description: e.target.value})}
                    placeholder="Describe the role, responsibilities, and what makes this position exciting..."
                    className="min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Requirements</Label>
                  <Textarea
                    id="requirements"
                    value={jobForm.requirements}
                    onChange={(e) => setJobForm({...jobForm, requirements: e.target.value})}
                    placeholder="List the required skills, experience, and qualifications..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="hero" onClick={handlePostJob} className="flex-1">
                    Post Job
                  </Button>
                  <Button variant="outline" onClick={() => setIsPostingJob(false)} className="flex-1">
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
          {filteredJobs.map((job, index) => (
            <Card key={job.id} className="hover-lift shadow-card group">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                        {job.title}
                      </CardTitle>
                      <Badge variant={getStatusColor(job.status)}>
                        {job.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-base font-medium">
                      {job.company}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-smooth">
                    <Button variant="ghost" size="icon">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>{job.applications} applications</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="text-sm text-muted-foreground">
                    Posted {job.posted}
                  </span>
                  <Button variant="outline" size="sm">
                    View Applications
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No jobs found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminJobs;