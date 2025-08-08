import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminJobs from "./pages/admin/Jobs";
import AdminUsers from "./pages/admin/Users";
import AdminProfile from "./pages/admin/Profile";
import JobSeekerDashboard from "./pages/job-seeker/Dashboard";
import JobSeekerProfile from "./pages/job-seeker/Profile";
import JobSeekerSubscription from "./pages/job-seeker/Subscription";
import JobSeekerContact from "./pages/job-seeker/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="job-portal-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/jobs" element={<AdminJobs />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/profile" element={<AdminProfile />} />
            
            {/* Job Seeker Routes */}
            <Route path="/dashboard" element={<JobSeekerDashboard />} />
            <Route path="/profile" element={<JobSeekerProfile />} />
            <Route path="/subscription" element={<JobSeekerSubscription />} />
            <Route path="/contact" element={<JobSeekerContact />} />
            
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
