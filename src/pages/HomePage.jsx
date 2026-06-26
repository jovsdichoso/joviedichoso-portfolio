import HeroSection from '../components/sections/HeroSection';
import FeaturedProjectSection from '../components/sections/FeaturedProjectSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import ServicesSection from '../components/sections/ServicesSection'; // Your new section
import ExperienceSection from '../components/sections/ExperienceSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import ContactSection from '../components/sections/ContactSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <ServicesSection />
      <FeaturedProjectSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}