import HeroSection from '../components/sections/HeroSection';
import FeaturedProjectSection from '../components/sections/FeaturedProjectSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import EducationSection from '../components/sections/EducationSection';
import ContactSection from '../components/sections/ContactSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedProjectSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <AchievementsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
