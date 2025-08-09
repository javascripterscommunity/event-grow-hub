import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Mic, Calendar, MapPin, HandHeart, DollarSign, Zap, Brain } from "lucide-react";

const PlatformModules = () => {
  const modules = [
    {
      icon: Users,
      title: "Organizer Hub",
      description: "Automated onboarding with guided workflows for chapter management",
      features: ["Chapter Creation", "Event Page Builder", "Branding Tools", "Analytics Dashboard"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Brain,
      title: "AI Audience Engine",
      description: "Personalized recommendations and upskilling pathways for career growth",
      features: ["Smart Matching", "Career Roadmaps", "Skill Badges", "Job Placements"],
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Mic,
      title: "Speaker Connect",
      description: "Seamless speaker onboarding with AI-powered scheduling and collaboration",
      features: ["Availability Express", "Auto Scheduling", "Real-time Chat", "Profile Builder"],
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: HandHeart,
      title: "Volunteer Network",
      description: "Chapter-based volunteer management with role assignments and certificates",
      features: ["Role Assignment", "Contribution Tracking", "Auto Certificates", "Recognition System"],
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      icon: MapPin,
      title: "Venue Coordinator",
      description: "Pre-vetted venue partnerships with real-time availability and booking",
      features: ["Venue Database", "Real-time Calendar", "Instant Booking", "Multi-channel Support"],
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    },
    {
      icon: DollarSign,
      title: "Sponsor Management",
      description: "Streamlined sponsorship workflows with automated proposal generation",
      features: ["Sponsor Database", "Auto Proposals", "Deal Tracking", "Relationship CRM"],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Calendar,
      title: "Event Integration",
      description: "Seamless integration with platforms like Lu.ma for comprehensive event management",
      features: ["Registration System", "Ticketing", "Check-in Tools", "Feedback Collection"],
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Zap,
      title: "Community Empathy",
      description: "Supportive ecosystem for mutual help, mentorship, and knowledge sharing",
      features: ["Mentorship Matching", "Support Networks", "Knowledge Base", "Crisis Support"],
      color: "text-success",
      bgColor: "bg-success/10"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Comprehensive Platform
            <span className="text-gradient"> Modules</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Eight powerful modules working together to create the most comprehensive 
            event ecosystem for organizers, speakers, volunteers, and audiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 border-2 hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg ${module.bgColor} flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-6 w-6 ${module.color}`} />
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {module.features.map((feature, featureIndex) => (
                      <Badge 
                        key={featureIndex} 
                        variant="secondary" 
                        className="text-xs"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Explore Module
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card border border-border rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Modular Architecture & UX Focus</h3>
            <p className="text-muted-foreground mb-6">
              Independent modules for registration, onboarding, event creation, and management. 
              Designed with best practices in usability, accessibility, and responsive user experience 
              to accommodate diverse user needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformModules;