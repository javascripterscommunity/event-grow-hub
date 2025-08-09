import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CommunityStats from "@/components/CommunityStats";
import PlatformModules from "@/components/PlatformModules";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <PlatformModules />
      <CommunityStats />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default Index;