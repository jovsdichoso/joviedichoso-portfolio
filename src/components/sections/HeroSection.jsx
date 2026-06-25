import { motion } from 'framer-motion';
import { Download, Github, ArrowRight, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function HeroSection() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-20 md:pt-16 px-4"
    >
      <div className="max-w-6xl mx-auto w-full flex-1 flex items-center">
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">

            {/* Mobile profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center md:hidden"
            >
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-white/10 group/img">
                <img
                  src="/profile.jpg"
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                />
              </div>
            </motion.div>

            {/* Text content */}
            <div className="space-y-5 text-center md:text-left">

              {/* Availability badge */}
              <motion.div {...fadeUp(0.1)} className="flex justify-center md:justify-start">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20 tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Available for opportunities
                </span>
              </motion.div>

              {/* Name */}
              <motion.h1
                {...fadeUp(0.2)}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
              >
                {PERSONAL_INFO.name}
              </motion.h1>

              {/* Role */}
              <motion.p
                {...fadeUp(0.3)}
                className="text-base sm:text-lg text-muted font-medium"
              >
                {PERSONAL_INFO.role}
              </motion.p>

              {/* Bio */}
              <motion.p
                {...fadeUp(0.4)}
                className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0"
              >
                {PERSONAL_INFO.bio}
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                {...fadeUp(0.5)}
                className="flex flex-wrap items-center gap-3 justify-center md:justify-start"
              >
                {/* Primary — View Work */}
                <motion.button
                  onClick={() => scrollToSection('featured')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative px-6 py-3 rounded-xl font-semibold text-sm text-white overflow-hidden
                    bg-white/15 backdrop-blur-xl border border-white/25
                    shadow-[0_0_20px_rgba(255,255,255,0.06)]
                    hover:bg-white/20 hover:border-white/40
                    hover:shadow-[0_0_28px_rgba(255,255,255,0.1)]
                    transition-all duration-300"
                >
                  {/* Animated shine sweep on hover */}
                  <span
                    className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full
                      bg-gradient-to-r from-transparent via-white/20 to-transparent
                      transition-transform duration-700 ease-in-out"
                  />
                  <span className="relative flex items-center gap-2">
                    View Work
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </span>
                </motion.button>

                {/* Secondary — Resume */}
                <motion.a
                  href={PERSONAL_INFO.resume}
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium
                    text-zinc-400 hover:text-white
                    bg-white/5 backdrop-blur-xl border border-white/10
                    hover:border-white/30 hover:bg-white/10
                    shadow-[0_0_12px_rgba(255,255,255,0.03)]
                    hover:shadow-[0_0_18px_rgba(255,255,255,0.06)]
                    transition-all duration-300"
                >
                  <Download size={14} className="transition-colors duration-300" />
                  Resume
                </motion.a>

                {/* Secondary — GitHub */}
                <motion.a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium
                    text-zinc-400 hover:text-white
                    bg-white/5 backdrop-blur-xl border border-white/10
                    hover:border-white/30 hover:bg-white/10
                    shadow-[0_0_12px_rgba(255,255,255,0.03)]
                    hover:shadow-[0_0_18px_rgba(255,255,255,0.06)]
                    transition-all duration-300"
                >
                  <Github size={14} className="transition-colors duration-300" />
                  GitHub
                </motion.a>
              </motion.div>
            </div>

            {/* Desktop profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="hidden md:flex justify-center md:justify-end"
            >
              <div className="relative">
                {/* Subtle glow ring behind image */}
                <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-2xl scale-110 pointer-events-none" />
                <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-white/10 group/img">
                  <img
                    src="/profile.jpg"
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={() => scrollToSection('featured')}
        className="mb-8 text-gray-600 hover:text-primary transition-colors flex flex-col items-center gap-1.5"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </motion.button>
    </section>
  );
}