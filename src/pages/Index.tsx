import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MainTabs from '@/components/MainTabs';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-accent/30 to-background">
      <Header />
      <HeroSection />
      <MainTabs />
      <Footer />
    </div>
  );
}
