import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Server, GitBranch, Palette, Figma, Cloud } from 'lucide-react';
import { SKILLS } from '../../utils/constants';

const iconMap = { Code, Smartphone, Database, Server, GitBranch, Palette, Figma, Cloud };

export default function SkillsSection() {
  const categories = [
    { title: 'Frontend',    skills: SKILLS.frontend },
    { title: 'Backend',     skills: SKILLS.backend  },
    { title: 'UI/UX Design',skills: SKILLS.uiux     },
    { title: 'Tools',       skills: SKILLS.tools    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-dark-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Skills</h2>
          <p className="text-lg text-muted">Technologies I work with</p>
        </motion.div>

        <div className="space-y-6">
          {categories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => {
                  const Icon = iconMap[skill.icon] || Code;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: index * 0.03 }}
                      className="group flex items-center gap-2 px-3 py-2 rounded-lg
                        bg-white/5 border border-white/10
                        hover:bg-white/10 hover:border-white/25
                        transition-all duration-200 cursor-default"
                    >
                      <Icon
                        size={14}
                        className="text-white/50 group-hover:text-white/80 transition-colors duration-200 shrink-0"
                      />
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200 whitespace-nowrap">
                        {skill.name}
                      </span>
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