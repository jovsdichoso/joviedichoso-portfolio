import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import { EXPERIENCE } from '../../utils/constants';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Experience</h2>
          <p className="text-lg text-muted">Work history</p>
        </motion.div>

        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-dark-card p-6 rounded-2xl border border-dark-border hover:border-white/20 transition-all duration-300 mb-4 last:mb-0"
          >
            <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                  <Briefcase className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-base text-primary font-medium">{exp.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted text-sm">
                <Calendar size={14} />
                {exp.period}
              </div>
            </div>

            <ul className="space-y-2 ml-14">
              {exp.responsibilities.map((resp, i) => (
                <li key={i} className="text-gray-400 flex items-start gap-2 text-sm">
                  <span className="text-accent mt-1">→</span>
                  {resp}
                </li>
              ))}
            </ul>

            {exp.link && (
              <div className="ml-14 mt-5">
                <motion.a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white overflow-hidden
                    bg-white/15 backdrop-blur-xl border border-white/25
                    shadow-[0_0_16px_rgba(255,255,255,0.05)]
                    hover:bg-white/20 hover:border-white/40
                    hover:shadow-[0_0_22px_rgba(255,255,255,0.09)]
                    transition-all duration-300"
                >
                  <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out" />
                  <ExternalLink size={14} className="relative group-hover:translate-x-0.5 transition-transform duration-300" />
                  <span className="relative">View Blog</span>
                </motion.a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}