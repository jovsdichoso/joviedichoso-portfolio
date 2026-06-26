import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../utils/constants';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-bg border-t-2 border-white/10 pt-16 pb-8 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          
          {/* Brand & Big Logo */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <button 
              onClick={scrollToTop}
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="h-20 md:h-24 w-auto filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
              />
            </button>
            <p className="text-gray-500 font-medium text-sm text-center md:text-left max-w-xs mt-2">
              Building scalable and user-friendly digital solutions.
            </p>
          </div>
          
          {/* Social Links with Glassmorphism Hover */}
          <div className="flex gap-4">
            <motion.a 
              href={PERSONAL_INFO.github} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/20 hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] text-gray-400 hover:text-white transition-all duration-300 backdrop-blur-md" 
              aria-label="GitHub"
            >
              <Github size={20} />
            </motion.a>
            <motion.a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/20 hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] text-gray-400 hover:text-white transition-all duration-300 backdrop-blur-md" 
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a 
              href={`mailto:${PERSONAL_INFO.email.split(' | ')[0]}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/20 hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] text-gray-400 hover:text-white transition-all duration-300 backdrop-blur-md" 
              aria-label="Email"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <p className="text-gray-600 text-sm font-medium text-center md:text-left">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors duration-300"
          >
            Back to Top
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/20 transition-colors duration-300">
              <ArrowUp size={16} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}