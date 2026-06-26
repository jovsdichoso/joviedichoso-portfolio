import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, ArrowUpRight, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 bg-dark-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-3 tracking-tight text-white drop-shadow-md">
            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Together</span>
          </h2>
          <p className="text-lg text-gray-400 font-medium">Open to opportunities and collaborations</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-dark-bg p-8 md:p-10 rounded-3xl border-2 border-white/5 shadow-xl relative overflow-hidden"
          >
            {/* Subtle background glow for the form container */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none" />

            <h3 className="text-3xl font-black mb-8 text-white relative z-10">Send an Inquiry</h3>
            
            <form action="https://formspree.io/f/xkoljarl" method="POST" className="space-y-6 relative z-10">
              
              {/* Name Field */}
              <div className="space-y-2 group/field">
                <label htmlFor="name" className="text-sm font-bold text-gray-500 group-focus-within/field:text-white transition-colors duration-300">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  placeholder="Juan Dela Cruz"
                  className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 outline-none hover:border-white/40 hover:bg-white/10 focus:border-white focus:bg-white/5 focus:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2 group/field">
                <label htmlFor="email" className="text-sm font-bold text-gray-500 group-focus-within/field:text-white transition-colors duration-300">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  placeholder="juan@example.com"
                  className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 outline-none hover:border-white/40 hover:bg-white/10 focus:border-white focus:bg-white/5 focus:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2 group/field">
                <label htmlFor="message" className="text-sm font-bold text-gray-500 group-focus-within/field:text-white transition-colors duration-300">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  required
                  rows="4"
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 outline-none hover:border-white/40 hover:bg-white/10 focus:border-white focus:bg-white/5 focus:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button - Restored to Glassmorphism */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-white overflow-hidden
                  bg-white/10 backdrop-blur-xl border border-white/20
                  shadow-[0_0_16px_rgba(255,255,255,0.05)]
                  hover:bg-white/20 hover:border-white/50
                  hover:shadow-[0_0_22px_rgba(255,255,255,0.15)]
                  transition-all duration-300 mt-4"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out" />
                <span className="relative tracking-wide">Send Inquiry</span>
                <Send size={18} className="relative group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5"
          >
            {/* Email */}
            <motion.a
              href={`mailto:${PERSONAL_INFO.email}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between p-6
                bg-dark-bg rounded-3xl border-2 border-white/5
                hover:border-white/40 hover:bg-white/5
                shadow-lg hover:shadow-[0_15px_30px_rgba(255,255,255,0.05)]
                transition-all duration-300"
            >
              <div className="flex items-center gap-5">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-white group-hover:border-white transition-colors duration-300">
                  <Mail className="text-gray-300 group-hover:text-black transition-colors duration-300" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Email</p>
                  <p className="font-bold text-gray-200 group-hover:text-white transition-colors text-sm">{PERSONAL_INFO.email.split(' | ')[0]}</p>
                </div>
              </div>
              <ArrowUpRight className="text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={20} />
            </motion.a>

            {/* Phone */}
            <div className="flex items-center justify-between p-6 bg-dark-bg rounded-3xl border-2 border-white/5 shadow-lg">
              <div className="flex items-center gap-5">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                  <Phone className="text-gray-300" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Phone</p>
                  <p className="font-bold text-gray-200 text-sm">{PERSONAL_INFO.phone}</p>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <motion.a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between p-6
                bg-dark-bg rounded-3xl border-2 border-white/5
                hover:border-white/40 hover:bg-white/5
                shadow-lg hover:shadow-[0_15px_30px_rgba(255,255,255,0.05)]
                transition-all duration-300"
            >
              <div className="flex items-center gap-5">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-white group-hover:border-white transition-colors duration-300">
                  <Linkedin className="text-gray-300 group-hover:text-black transition-colors duration-300" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">LinkedIn</p>
                  <p className="font-bold text-gray-200 group-hover:text-white transition-colors text-sm">Connect with me</p>
                </div>
              </div>
              <ArrowUpRight className="text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={20} />
            </motion.a>

            {/* GitHub */}
            <motion.a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-between p-6
                bg-dark-bg rounded-3xl border-2 border-white/5
                hover:border-white/40 hover:bg-white/5
                shadow-lg hover:shadow-[0_15px_30px_rgba(255,255,255,0.05)]
                transition-all duration-300"
            >
              <div className="flex items-center gap-5">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-white group-hover:border-white transition-colors duration-300">
                  <Github className="text-gray-300 group-hover:text-black transition-colors duration-300" size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">GitHub</p>
                  <p className="font-bold text-gray-200 group-hover:text-white transition-colors text-sm">View Profile</p>
                </div>
              </div>
              <ArrowUpRight className="text-gray-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={20} />
            </motion.a>

          </motion.div>
        </div>
      </div>
    </section>
  );
}