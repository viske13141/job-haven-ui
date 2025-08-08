import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft,
  Check,
  Crown,
  Star,
  Zap,
  Shield,
  Users,
  MessageSquare,
  FileText,
  Calendar,
  TrendingUp,
  Gift
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const JobSeekerSubscription = () => {
  const navigate = useNavigate();
  const [currentPlan] = useState("free"); // This would come from user data

  const plans = [
    {
      id: "free",
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Apply to 5 jobs per month",
        "Basic profile",
        "Email notifications",
        "Community support"
      ],
      limitations: [
        "Limited applications",
        "No priority support",
        "Basic analytics"
      ],
      icon: Users,
      color: "border-muted"
    },
    {
      id: "basic",
      name: "Basic",
      price: "$9.99",
      period: "per month",
      description: "More opportunities and features", 
      features: [
        "Apply to 25 jobs per month",
        "Enhanced profile visibility",
        "Priority email notifications",
        "Basic analytics dashboard",
        "Resume builder",
        "Email support"
      ],
      limitations: [],
      icon: Star,
      color: "border-primary",
      popular: false
    },
    {
      id: "premium",
      name: "Premium",
      price: "$19.99", 
      period: "per month",
      description: "Maximum visibility and unlimited access",
      features: [
        "Unlimited job applications",
        "Premium profile badge",
        "Featured profile placement",
        "Advanced analytics",
        "AI-powered job matching",
        "Priority support",
        "Resume reviews",
        "Interview coaching",
        "Company insights"
      ],
      limitations: [],
      icon: Crown,
      color: "border-warning",
      popular: true
    }
  ];

  const currentPlanData = plans.find(plan => plan.id === currentPlan);
  const usageData = {
    applicationsUsed: currentPlan === "free" ? 3 : currentPlan === "basic" ? 15 : 45,
    applicationsLimit: currentPlan === "free" ? 5 : currentPlan === "basic" ? 25 : 999,
    profileViews: 24,
    savedJobs: 8
  };

  const benefits = [
    {
      icon: Zap,
      title: "Faster Applications",
      description: "Apply to jobs with one-click using saved preferences"
    },
    {
      icon: Shield,
      title: "Profile Protection", 
      description: "Control who can see your profile and contact information"
    },
    {
      icon: TrendingUp,
      title: "Career Analytics",
      description: "Track your application success rate and optimize your strategy"
    },
    {
      icon: MessageSquare,
      title: "AI Assistant",
      description: "Get personalized job recommendations and career advice"
    }
  ];

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
                Subscription Plans
              </h1>
              <p className="text-muted-foreground">Choose the plan that fits your career goals</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6 space-y-8">
        {/* Current Plan Status */}
        <Card className="shadow-card animate-fade-in">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-3">
                  {currentPlanData?.icon && <currentPlanData.icon className="w-6 h-6" />}
                  Current Plan: {currentPlanData?.name}
                  {currentPlan === "premium" && (
                    <Badge variant="outline" className="bg-warning/10 text-warning border-warning">
                      <Crown className="w-3 h-3 mr-1" />
                      Premium
                    </Badge>
                  )}
                </CardTitle>
                <CardDescription>{currentPlanData?.description}</CardDescription>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">{currentPlanData?.price}</div>
                <div className="text-sm text-muted-foreground">{currentPlanData?.period}</div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Job Applications Used</span>
                  <span>
                    {usageData.applicationsUsed} / {usageData.applicationsLimit === 999 ? "Unlimited" : usageData.applicationsLimit}
                  </span>
                </div>
                <Progress 
                  value={usageData.applicationsLimit === 999 ? 50 : (usageData.applicationsUsed / usageData.applicationsLimit) * 100} 
                  className="h-2" 
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Profile Views This Month</span>
                  <span>{usageData.profileViews}</span>
                </div>
                <div className="h-2 bg-muted rounded-full">
                  <div className="h-2 bg-primary rounded-full w-3/5"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Saved Jobs</span>
                  <span>{usageData.savedJobs}</span>
                </div>
                <div className="h-2 bg-muted rounded-full">
                  <div className="h-2 bg-success rounded-full w-2/5"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          {plans.map((plan, index) => (
            <Card 
              key={plan.id} 
              className={`relative shadow-card hover-lift ${plan.color} ${plan.popular ? 'ring-2 ring-warning' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge variant="outline" className="bg-warning text-warning-foreground border-warning">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-3">
                  <div className={`p-3 rounded-full ${plan.id === 'premium' ? 'bg-warning/10' : plan.id === 'basic' ? 'bg-primary/10' : 'bg-muted'}`}>
                    <plan.icon className={`w-6 h-6 ${plan.id === 'premium' ? 'text-warning' : plan.id === 'basic' ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                </div>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="pt-4">
                  <div className="text-3xl font-bold">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">{plan.period}</div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-success" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button
                  variant={currentPlan === plan.id ? "outline" : plan.popular ? "premium" : "hero"}
                  className="w-full"
                  disabled={currentPlan === plan.id}
                >
                  {currentPlan === plan.id ? "Current Plan" : `Upgrade to ${plan.name}`}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <Card className="shadow-card animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="w-6 h-6" />
              Why Upgrade?
            </CardTitle>
            <CardDescription>
              Unlock powerful features to accelerate your job search
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* FAQ or Additional Info */}
        <Card className="shadow-card animate-scale-in">
          <CardHeader>
            <CardTitle>Billing Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">Payment Methods</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Credit/Debit Cards (Visa, MasterCard, AmEx)</p>
                  <p>• PayPal</p>
                  <p>• Bank Transfer</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium">Billing Cycle</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Monthly billing on the same date</p>
                  <p>• Cancel anytime - no long-term contracts</p>
                  <p>• 7-day money-back guarantee</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <div className="flex flex-wrap gap-3">
                <Button variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Billing History
                </Button>
                <Button variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Update Payment Method
                </Button>
                <Button variant="outline">
                  Contact Support
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default JobSeekerSubscription;