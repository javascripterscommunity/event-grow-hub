import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-community.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary-glow/20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Build the <span className="text-gradient">Future</span> of
                <br />
                Tech Communities
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Comprehensive AI-powered platform empowering organizers, speakers, volunteers, and audiences 
                through simplified event management, continuous learning, and career growth opportunities.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg">
                Start Building Community
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Global Reach</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img 
                src={heroImage} 
                alt="Community event platform showcasing diverse networking" 
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>
            <div className="absolute -inset-4 gradient-primary rounded-2xl opacity-20 blur-xl animate-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;