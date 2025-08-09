const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/e6449cf1-08d7-48b0-aa0d-3be78a5bcc67.png" 
                alt="CommuConnect - Community Event Platform Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground">
              Empowering communities through AI-powered event management and continuous learning.
              <span className="block text-sm mt-1 font-medium text-primary">Upskill | Engage | Grow</span>
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">For Organizers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">For Speakers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">For Volunteers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">For Audiences</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 CommuConnect. All rights reserved. Built with ❤️ for the community.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;