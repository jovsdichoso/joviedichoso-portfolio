import { motion } from 'framer-motion';
import { Github, Star, ExternalLink } from 'lucide-react';
import { FEATURED_PROJECT } from '../../utils/constants';

export default function FeaturedProjectSection() {
  return (
    <section id="featured" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Star className="text-primary fill-primary" size={18} />
              <span className="text-primary font-semibold text-sm">Featured Project</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{FEATURED_PROJECT.title}</h2>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              {FEATURED_PROJECT.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-dark-card rounded-2xl border border-dark-border overflow-hidden group/img">
                  <img
                    src={FEATURED_PROJECT.image}
                    alt={FEATURED_PROJECT.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20">
                      {FEATURED_PROJECT.badge}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-bold text-muted uppercase tracking-wider mb-3">Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {FEATURED_PROJECT.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm rounded-lg border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {/* Primary — View Code */}
                <motion.a
                  href={FEATURED_PROJECT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white overflow-hidden
                    bg-white/15 backdrop-blur-xl border border-white/25
                    shadow-[0_0_20px_rgba(255,255,255,0.06)]
                    hover:bg-white/20 hover:border-white/40
                    hover:shadow-[0_0_28px_rgba(255,255,255,0.1)]
                    transition-all duration-300"
                >
                  <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-in-out" />
                  <Github size={15} className="relative" />
                  <span className="relative">View Code</span>
                  <ExternalLink size={12} className="relative group-hover:translate-x-0.5 transition-transform duration-300" />
                </motion.a>

                {/* Secondary — View Live */}
                {FEATURED_PROJECT.liveUrl && (
                  <motion.a
                    href={FEATURED_PROJECT.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium
                      text-zinc-400 hover:text-white
                      bg-white/5 backdrop-blur-xl border border-white/10
                      hover:border-white/30 hover:bg-white/10
                      shadow-[0_0_12px_rgba(255,255,255,0.03)]
                      hover:shadow-[0_0_18px_rgba(255,255,255,0.06)]
                      transition-all duration-300"
                  >
                    <ExternalLink size={14} />
                    View Live
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}