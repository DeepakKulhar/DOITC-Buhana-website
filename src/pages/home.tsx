import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import OfficeInfo from "@/components/office-info";
import ServicesSection from "@/components/services-section";
import StatisticsSection from "@/components/statistics-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <OfficeInfo />
      <ServicesSection />
      <StatisticsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}