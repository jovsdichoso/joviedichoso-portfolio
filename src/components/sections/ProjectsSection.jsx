import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { PROJECTS } from '../../utils/constants';

export default function ProjectsSection() {
  // State to track if the grid is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  // We skip the first project (Featured)[cite: 14]
  const otherProjects = PROJECTS.slice(1);
  
  // Show all if expanded, otherwise limit to top 3
  const visibleProjects = isExpanded ? otherProjects : otherProjects.slice(0, 3);

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      
      {/* Amplified, high-contrast background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-primary/10 via-white/5 to-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* High-Contrast Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-md mb-3">
            More <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg font-medium">Other applications I've built</p>
        </motion.div>

        {/* Grid Layout */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -12 }}
                className="group relative flex flex-col bg-dark-bg rounded-3xl border-2 border-white/5 hover:border-white/40 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)]"
              >
                {/* High-contrast hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0" />
                
                {/* Project Image */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/10 via-accent/5 to-transparent flex items-center justify-center border-b-2 border-white/5 group-hover:border-white/20 transition-colors duration-300 overflow-hidden z-10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Text Content & Buttons */}
                <div className="p-8 flex flex-col flex-grow relative z-10">
                  <h3 className="text-2xl font-black mb-3 text-gray-300 group-hover:text-white transition-colors duration-300 tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300 font-medium mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-white/5 text-gray-400 group-hover:text-gray-200 group-hover:bg-white/10 text-xs rounded-xl border border-white/10 group-hover:border-white/30 transition-colors duration-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="group/btn relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white overflow-hidden
                          bg-white/10 backdrop-blur-xl border border-white/20
                          shadow-[0_0_16px_rgba(255,255,255,0.05)]
                          hover:bg-white/20 hover:border-white/50
                          hover:shadow-[0_0_22px_rgba(255,255,255,0.15)]
                          transition-all duration-300"
                      >
                        <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out" />
                        <span className="relative tracking-wide">View Live</span>
                        <ExternalLink size={14} className="relative group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / View Less Button */}
        {otherProjects.length > 3 && (
          <motion.div 
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-dark-bg border-2 border-white/10 hover:border-white hover:bg-white text-white hover:text-black font-bold tracking-wide transition-all duration-300 shadow-lg"
            >
              {isExpanded ? 'Show Less' : 'View All Projects'}
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} className="transition-colors" />
              </motion.div>
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
}