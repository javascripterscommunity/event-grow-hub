import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CommunityStats from "@/components/CommunityStats";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <CommunityStats />
      <Footer />
    </div>
  );
};

export default Index;
