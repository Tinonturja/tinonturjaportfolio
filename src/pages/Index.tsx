import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import EducationSection from "@/components/portfolio/EducationSection";
import PublicationsSection from "@/components/portfolio/PublicationsSection";
import ResearchPapersSection from "@/components/portfolio/ResearchPapersSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import CertificationsSection from "@/components/portfolio/CertificationsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <PublicationsSection />
      <ResearchPapersSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
