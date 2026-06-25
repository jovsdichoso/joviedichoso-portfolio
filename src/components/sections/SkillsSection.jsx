import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Server, GitBranch, Palette, Figma, Cloud } from 'lucide-react';
import { SKILLS } from '../../utils/constants';

const iconMap = {
  Code,
  Smartphone,
  Database,
  Server,
  GitBranch,
  Palette,
  Figma,
  Cloud
};

export default function SkillsSection() {
  const categories = [
    { title: "Frontend", skills: SKILLS.frontend },
    { title: "Backend", skills: SKILLS.backend },
    { title: "UI/UX Design", skills: SKILLS.uiux },
    { title: "Tools", skills: SKILLS.tools }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-dark-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Skills</h2>
          <p className="text-lg text-muted">Technologies I work with</p>
        </motion.div>
        
        <div className="space-y-8">
          {categories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-xl font-semibold text-primary mb-4">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, index) => {
                  const Icon = iconMap[skill.icon] || Code;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      className="bg-dark-bg p-4 rounded-xl border border-dark-border hover:border-primary/50 transition-all group cursor-default"
                    >
                      <Icon className="text-primary mb-2 group-hover:scale-110 transition-transform" size={22} />
                      <p className="font-medium text-gray-300 text-sm">{skill.name}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
