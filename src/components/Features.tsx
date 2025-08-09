import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Organizer Hub",
      description: "Seamless onboarding, chapter management, and event creation tools with automated workflows.",
      icon: "🎯",
      gradient: "from-primary/20 to-accent/20"
    },
    {
      title: "AI-Powered Audience",
      description: "Smart event recommendations, personalized learning paths, and career development tools.",
      icon: "🧠",
      gradient: "from-accent/20 to-primary-glow/20"
    },
    {
      title: "Speaker Connect",
      description: "Automated speaker matching, scheduling, and collaboration tools for seamless coordination.",
      icon: "🎤",
      gradient: "from-primary-glow/20 to-success/20"
    },
    {
      title: "Volunteer Network",
      description: "Easy registration, role assignment, and automated certificate generation for contributors.",
      icon: "🤝",
      gradient: "from-success/20 to-warning/20"
    },
    {
      title: "Venue Coordination",
      description: "Pre-vetted venues, real-time availability, and streamlined booking workflows.",
      icon: "📍",
      gradient: "from-warning/20 to-primary/20"
    },
    {
      title: "Sponsor Management",
      description: "Comprehensive sponsor database with automated proposal and relationship management.",
      icon: "💼",
      gradient: "from-accent/20 to-primary/20"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for
            <span className="text-gradient"> Event Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our modular platform brings together all stakeholders in the event ecosystem,
            powered by AI to create meaningful connections and drive continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="gradient-card border-0 shadow-elegant hover:shadow-glow transition-all duration-300 animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;