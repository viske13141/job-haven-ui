import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  Mail,
  Phone,
  MessageCircle,
  Clock,
  CheckCircle,
  HelpCircle,
  FileText,
  Bug,
  Star,
  Send,
  MessageSquare,
  Bot,
  User
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const JobSeekerContact = () => {
  const navigate = useNavigate();
  const [contactForm, setContactForm] = useState({
    subject: "",
    category: "general",
    message: "",
    priority: "normal"
  });

  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: "bot",
      message: "Hello! I'm your AI assistant. How can I help you today?",
      timestamp: "10:30 AM"
    }
  ]);
  const [chatInput, setChatInput] = useState("");

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      status: "Available",
      statusColor: "success"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      status: "24h response",
      statusColor: "pending"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      status: "Premium only",
      statusColor: "outline"
    },
    {
      icon: Bot,
      title: "AI Assistant",
      description: "Get instant answers to common questions",
      status: "Always available",
      statusColor: "success"
    }
  ];

  const faqItems = [
    {
      question: "How do I apply to more jobs?",
      answer: "You can upgrade your plan to increase your application limit. Free users get 5 applications per month, Basic gets 25, and Premium gets unlimited.",
      category: "Applications"
    },
    {
      question: "Why isn't my profile showing up in searches?",
      answer: "Make sure your profile is complete and public. Premium users get enhanced visibility and featured placement.",
      category: "Profile"
    },
    {
      question: "How do I update my subscription?",
      answer: "Visit your subscription page to upgrade, downgrade, or cancel your plan. Changes take effect immediately.",
      category: "Billing"
    },
    {
      question: "Can I get interview coaching?",
      answer: "Yes! Premium subscribers get access to professional interview coaching and resume review services.",
      category: "Premium"
    }
  ];

  const categories = [
    { value: "general", label: "General Inquiry" },
    { value: "technical", label: "Technical Issue" },
    { value: "billing", label: "Billing Question" },
    { value: "profile", label: "Profile Help" },
    { value: "applications", label: "Application Issues" },
    { value: "feedback", label: "Feedback" }
  ];

  const handleSubmitContact = () => {
    console.log("Submitting contact form:", contactForm);
    // Here you would submit to backend
    alert("Thank you for contacting us! We'll get back to you soon.");
    setContactForm({
      subject: "",
      category: "general",
      message: "",
      priority: "normal"
    });
  };

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    
    const newMessage = {
      id: chatMessages.length + 1,
      sender: "user",
      message: chatInput,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages([...chatMessages, newMessage]);
    setChatInput("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: chatMessages.length + 2,
        sender: "bot",
        message: "Thank you for your message! I'm analyzing your question and will provide helpful information shortly.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

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
                Contact & Support
              </h1>
              <p className="text-muted-foreground">Get help when you need it</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6 space-y-8">
        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {supportOptions.map((option, index) => (
            <Card key={index} className="hover-lift shadow-card cursor-pointer">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-primary/10">
                    <option.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-lg">{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Badge variant={option.statusColor === "success" ? "success" : option.statusColor === "pending" ? "pending" : "outline"}>
                  {option.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="space-y-6">
            <Card className="shadow-card animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Describe your issue and we'll get back to you soon
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      value={contactForm.category}
                      onChange={(e) => setContactForm({...contactForm, category: e.target.value})}
                      className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm"
                    >
                      {categories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priority">Priority</Label>
                    <select
                      id="priority"
                      value={contactForm.priority}
                      onChange={(e) => setContactForm({...contactForm, priority: e.target.value})}
                      className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm"
                    >
                      <option value="low">Low</option>
                      <option value="normal">Normal</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                    placeholder="Brief description of your issue"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    placeholder="Please provide as much detail as possible..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button variant="hero" onClick={handleSubmitContact} className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="shadow-card animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="w-5 h-5" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqItems.map((faq, index) => (
                  <div key={index} className="space-y-2 p-4 rounded-lg border bg-muted/10">
                    <div className="flex items-start justify-between">
                      <h4 className="font-medium text-sm">{faq.question}</h4>
                      <Badge variant="outline" className="text-xs">
                        {faq.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* AI Chat Assistant */}
          <div className="space-y-6">
            <Card className="shadow-card animate-slide-in-right h-[600px] flex flex-col">
              <CardHeader className="flex-shrink-0">
                <CardTitle className="flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  AI Assistant
                </CardTitle>
                <CardDescription>
                  Get instant answers to your questions
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col p-0">
                {/* Chat Messages */}
                <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                  {chatMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex gap-3 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className="flex-shrink-0">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${msg.sender === 'user' ? 'bg-primary' : 'bg-secondary'}`}>
                            {msg.sender === 'user' ? (
                              <User className="w-4 h-4 text-primary-foreground" />
                            ) : (
                              <Bot className="w-4 h-4 text-secondary-foreground" />
                            )}
                          </div>
                        </div>
                        <div className={`p-3 rounded-lg ${msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                          <p className="text-sm">{msg.message}</p>
                          <p className={`text-xs mt-1 ${msg.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                            {msg.timestamp}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="p-6 border-t">
                  <div className="flex gap-2">
                    <Input
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Type your message..."
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button onClick={handleSendMessage} size="icon">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-card animate-slide-in-right">
              <CardHeader>
                <CardTitle>Other Ways to Reach Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">support@jobportal.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone (Premium)</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri: 9AM-6PM PST</p>
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

export default JobSeekerContact;