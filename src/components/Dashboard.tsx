import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, TrendingUp, Users, Calendar, Award, Briefcase } from "lucide-react";

const Dashboard = () => {
  const recentNews = [
    {
      title: "New JavaScript Chapter Opens in Bangalore",
      time: "2 hours ago",
      type: "Chapter Launch"
    },
    {
      title: "React Summit 2024 - Call for Speakers",
      time: "4 hours ago", 
      type: "Event Announcement"
    },
    {
      title: "5 New AI/ML Experts Joined the Platform",
      time: "1 day ago",
      type: "New Members"
    }
  ];

  const newMembers = [
    { name: "Sarah Chen", role: "AI Engineer", avatar: "SC", company: "TechCorp" },
    { name: "Raj Patel", role: "Full Stack Dev", avatar: "RP", company: "StartupXYZ" },
    { name: "Emma Wilson", role: "UX Designer", avatar: "EW", company: "DesignHub" },
    { name: "David Kim", role: "DevOps Lead", avatar: "DK", company: "CloudTech" }
  ];

  const upcomingEvents = [
    {
      title: "React Advanced Workshop",
      date: "Dec 15, 2024",
      location: "Mumbai",
      attendees: 120,
      type: "Workshop"
    },
    {
      title: "AI in Healthcare Summit",
      date: "Dec 20, 2024", 
      location: "Bangalore",
      attendees: 300,
      type: "Conference"
    },
    {
      title: "Women in Tech Meetup",
      date: "Dec 22, 2024",
      location: "Delhi",
      attendees: 85,
      type: "Meetup"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Community
            <span className="text-gradient"> Dashboard</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with structured tech event news, new chapter announcements, 
            and community activities. Your central hub for engagement and opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent News & Announcements */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Latest Updates
              </CardTitle>
              <CardDescription>
                Recent tech event news and announcements
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentNews.map((news, index) => (
                <div key={index} className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {news.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{news.time}</span>
                  </div>
                  <h4 className="font-medium text-sm leading-relaxed">{news.title}</h4>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                View All Updates
              </Button>
            </CardContent>
          </Card>

          {/* New Members */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-success" />
                New Members
              </CardTitle>
              <CardDescription>
                Welcome our latest community members
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {newMembers.map((member, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.company}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                View All Members
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                Upcoming Events
              </CardTitle>
              <CardDescription>
                Events happening in your area
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {event.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{event.date}</span>
                  </div>
                  <h4 className="font-medium text-sm mb-2">{event.title}</h4>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{event.location}</span>
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                Browse All Events
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Personalized Recommendations */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <TrendingUp className="h-6 w-6 text-primary" />
                Personalized for You
              </CardTitle>
              <CardDescription className="text-base">
                AI-powered recommendations based on your interests, location, and career goals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-card rounded-lg border">
                  <Award className="h-8 w-8 text-warning mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Career Roadmap</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Personalized learning path to advance your career
                  </p>
                  <Button size="sm" variant="outline">View Roadmap</Button>
                </div>
                
                <div className="text-center p-6 bg-card rounded-lg border">
                  <Briefcase className="h-8 w-8 text-success mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Job Opportunities</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Companies are actively looking for talent like you
                  </p>
                  <Button size="sm" variant="outline">Explore Jobs</Button>
                </div>
                
                <div className="text-center p-6 bg-card rounded-lg border">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Skill Matching</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Connect with events perfect for your skill level
                  </p>
                  <Button size="sm" variant="outline">Find Events</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;