import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { id: 'home',       label: 'Home' },
  { id: 'skills',     label: 'Skills' },
  { id: 'services',   label: 'Services' },
  { id: 'featured',   label: 'Featured' },
  { id: 'projects',   label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'awards',     label: 'Awards' }
];

const IDS = NAV_LINKS.map((l) => l.id);

function useScrollSpy() {
  const [activeId, setActiveId] = useState(IDS[0]);

  useEffect(() => {
    const OFFSET = 64 + 80;

    function update() {
      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActiveId(IDS[IDS.length - 1]);
        return;
      }
      for (let i = IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(IDS[i]);
        if (el && el.getBoundingClientRect().top <= OFFSET) {
          setActiveId(IDS[i]);
          return;
        }
      }
      setActiveId(IDS[0]);
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return activeId;
}

// Animated hamburger → X morphing button
function HamburgerButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] z-50"
    >
      <motion.span
        animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="block w-6 h-[1.5px] bg-white origin-center"
      />
      <motion.span
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="block w-6 h-[1.5px] bg-white origin-center"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="block w-6 h-[1.5px] bg-white origin-center"
      />
    </button>
  );
}

// Framer Motion variants for the overlay container
const overlayVariants = {
  closed: { opacity: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  open:   { opacity: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

// Each nav item staggers in from below
const itemVariants = {
  closed: { opacity: 0, y: 24 },
  open: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.06,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// Thin decorative line under the active item
const underlineVariants = {
  closed: { scaleX: 0 },
  open: (i) => ({
    scaleX: 1,
    transition: {
      delay: 0.18 + i * 0.06,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled]             = useState(false);
  const activeSection = useScrollSpy();

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = useCallback((id) => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 320); // wait for overlay exit animation
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-dark-bg/95 backdrop-blur-xl border-b border-dark-border'
            : 'bg-dark-bg/80 backdrop-blur-xl border-b border-dark-border'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity z-50"
              aria-label="Go to top"
            >
              <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            </button>

            {/* Desktop nav + Glassmorphic Hire Me Button */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-1">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        isActive ? 'text-primary' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-lg bg-primary/10"
                          transition={{ type: 'spring', duration: 0.35, bounce: 0.15 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
              
              {/* Desktop "Hire Me" Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="group relative px-5 py-2 rounded-xl text-sm font-bold text-white overflow-hidden
                  bg-white/10 backdrop-blur-xl border border-white/20
                  shadow-[0_0_15px_rgba(255,255,255,0.05)]
                  hover:bg-white/20 hover:border-white/50
                  hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
                  transition-all duration-300"
              >
                {/* Animated shine sweep on hover */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out" />
                <span className="relative tracking-wide">Hire Me</span>
              </motion.button>
            </div>

            {/* Animated hamburger */}
            <HamburgerButton
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((v) => !v)}
            />
          </div>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-overlay"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="
              md:hidden fixed inset-0 z-30
              bg-dark-bg/98 backdrop-blur-2xl
              flex flex-col items-center justify-center
              pt-16
            "
          >
            {/* Subtle top gradient fade from navbar edge */}
            <div className="absolute top-16 left-0 right-0 h-px bg-dark-border" />

            {/* Nav items */}
            <ul className="flex flex-col items-center gap-2 w-full px-8">
              {NAV_LINKS.map((link, i) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.li
                    key={link.id}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="w-full flex justify-center"
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`relative group py-3 text-2xl font-light tracking-wide transition-colors duration-200 ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-500 hover:text-gray-200'
                      }`}
                    >
                      {link.label}

                      {/* Animated underline */}
                      <motion.span
                        custom={i}
                        variants={underlineVariants}
                        initial="closed"
                        animate={isActive ? 'open' : 'closed'}
                        className="absolute bottom-2 left-0 right-0 h-px bg-primary origin-left"
                      />
                      {/* Hover underline */}
                      {!isActive && (
                        <span className="absolute bottom-2 left-0 right-0 h-px bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                      )}
                    </button>
                  </motion.li>
                );
              })}
            </ul>

            {/* Mobile "Hire Me" Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-10"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="group relative px-8 py-3 rounded-2xl text-lg font-bold text-white overflow-hidden
                  bg-white/10 backdrop-blur-xl border border-white/20
                  shadow-[0_0_15px_rgba(255,255,255,0.05)]
                  hover:bg-white/20 hover:border-white/50
                  hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
                  transition-all duration-300"
              >
                {/* Animated shine sweep on hover */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out" />
                <span className="relative tracking-wide">Hire Me</span>
              </button>
            </motion.div>

            {/* Bottom number count */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="absolute bottom-10 text-xs tracking-widest text-gray-600 uppercase"
            >
              {NAV_LINKS.findIndex((l) => l.id === activeSection) + 1} / {NAV_LINKS.length}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}