import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../../utils/constants';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">More Projects</h2>
          <p className="text-lg text-muted">Other applications I've built</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.slice(1).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-dark-card rounded-2xl border border-dark-border hover:border-white/20 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/5 to-transparent flex items-center justify-center border-b border-dark-border overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-5 space-y-3">
                <h3 className="text-xl font-bold group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-white/5 text-zinc-400 text-xs rounded-lg border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-1">
                  {/* Primary — View Code */}
                  {project.github !== '#' && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="group/btn relative inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold text-white overflow-hidden
                        bg-white/15 backdrop-blur-xl border border-white/25
                        shadow-[0_0_16px_rgba(255,255,255,0.05)]
                        hover:bg-white/20 hover:border-white/40
                        hover:shadow-[0_0_22px_rgba(255,255,255,0.09)]
                        transition-all duration-300"
                    >
                      <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out" />
                      <Github size={13} className="relative" />
                      <span className="relative">View Code</span>
                    </motion.a>
                  )}

                  {/* Secondary — Live */}
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium
                        text-zinc-400 hover:text-white
                        bg-white/5 backdrop-blur-xl border border-white/10
                        hover:border-white/30 hover:bg-white/10
                        shadow-[0_0_10px_rgba(255,255,255,0.02)]
                        hover:shadow-[0_0_16px_rgba(255,255,255,0.06)]
                        transition-all duration-300"
                    >
                      <ExternalLink size={13} />
                      Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}