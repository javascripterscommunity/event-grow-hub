const CommunityStats = () => {
  const stats = [
    { number: "50K+", label: "Active Members", color: "text-primary" },
    { number: "1,200+", label: "Events Organized", color: "text-accent" },
    { number: "300+", label: "Expert Speakers", color: "text-success" },
    { number: "85%", label: "Career Growth Rate", color: "text-warning" },
  ];

  return (
    <section className="py-20 gradient-feature">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Building the Future of
            <span className="text-gradient"> Tech Communities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who are already transforming their careers 
            through our vibrant event ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-float"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className={`text-4xl lg:text-5xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;