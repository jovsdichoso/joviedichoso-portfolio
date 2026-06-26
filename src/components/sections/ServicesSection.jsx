import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Palette, Wrench, Database, ChevronLeft, ChevronRight } from 'lucide-react';
import { SERVICES } from '../../utils/constants';

// Map string names to actual Lucide icons
const iconMap = {
  Globe,
  Smartphone,
  Palette,
  Wrench,
  Database
};

export default function ServicesSection() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Update the active dot when the user scrolls
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    
    // Prevent division by zero if nothing is scrollable
    if (scrollWidth <= clientWidth) {
      setActiveIndex(0);
      return;
    }
    
    // Calculate how far the user has scrolled as a percentage
    const scrollPercentage = scrollLeft / (scrollWidth - clientWidth);
    
    // Map that percentage to the nearest dot index
    const currentIndex = Math.round(scrollPercentage * (SERVICES.length - 1));
    setActiveIndex(currentIndex);
  };

  // Button navigation
  const scroll = (direction) => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Dot navigation
  const scrollToDot = (index) => {
    if (!carouselRef.current) return;
    const { scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const targetScroll = (maxScroll / (SERVICES.length - 1)) * index;
    
    carouselRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden">
      
      {/* Amplified, high-contrast background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-primary/10 via-white/5 to-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-md">
              What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Do</span>
            </h2>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4"
          >
            <button 
              onClick={() => scroll('left')}
              className="p-4 rounded-xl bg-dark-bg border-2 border-white/10 hover:border-white hover:bg-white transition-all duration-300 group shadow-lg"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} className="text-white group-hover:text-black transition-colors" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-xl bg-dark-bg border-2 border-white/10 hover:border-white hover:bg-white transition-all duration-300 group shadow-lg"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} className="text-white group-hover:text-black transition-colors" />
            </button>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-2 -mx-2 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="group relative w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-21px)] shrink-0 snap-start bg-dark-bg p-8 rounded-3xl border-2 border-white/5 hover:border-white/40 transition-all duration-300 overflow-hidden shadow-xl hover:shadow-[0_20px_40px_rgba(255,255,255,0.08)]"
              >
                {/* High-contrast hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon Wrapper: Inverts to solid white with dark icon on hover */}
                <div className="relative w-16 h-16 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white group-hover:border-white group-hover:-translate-y-2 transition-all duration-300">
                  {IconComponent && <IconComponent className="text-gray-300 group-hover:text-black transition-colors duration-300" size={32} />}
                </div>
                
                {/* Text Content */}
                <h3 className="relative text-2xl font-black mb-3 text-gray-300 group-hover:text-white transition-colors duration-300 tracking-wide">
                  {service.title}
                </h3>
                <p className="relative text-gray-500 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300 font-medium">
                  {service.description}
                </p>

                {/* Bold sweeping bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center items-center gap-2 mt-4"
        >
          {SERVICES.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToDot(index)}
              className={`h-2 rounded-full transition-all duration-500 ease-out ${
                activeIndex === index 
                  ? 'w-8 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' 
                  : 'w-2 bg-white/20 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}