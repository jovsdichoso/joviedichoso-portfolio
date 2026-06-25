import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 bg-dark-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Let's Work Together</h2>
          <p className="text-lg text-muted">Open to opportunities and collaborations</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-3"
        >
          {/* Email */}
          <motion.a
            href={`mailto:${PERSONAL_INFO.email}`}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="group flex items-center justify-between p-5
              bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10
              hover:bg-white/10 hover:border-white/25
              shadow-[0_0_12px_rgba(255,255,255,0.02)]
              hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]
              transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20">
                <Mail className="text-primary" size={18} />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted mb-0.5 uppercase tracking-wider">Email</p>
                <p className="font-medium text-white text-sm">{PERSONAL_INFO.email}</p>
              </div>
            </div>
            <ArrowUpRight
              className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              size={18}
            />
          </motion.a>

          {/* Phone — not a link, kept static but styled consistently */}
          <div
            className="flex items-center justify-between p-5
              bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20">
                <Phone className="text-primary" size={18} />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted mb-0.5 uppercase tracking-wider">Phone</p>
                <p className="font-medium text-white text-sm">{PERSONAL_INFO.phone}</p>
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <motion.a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="group flex items-center justify-between p-5
              bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10
              hover:bg-white/10 hover:border-white/25
              shadow-[0_0_12px_rgba(255,255,255,0.02)]
              hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]
              transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20">
                <Linkedin className="text-primary" size={18} />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted mb-0.5 uppercase tracking-wider">LinkedIn</p>
                <p className="font-medium text-white text-sm">Connect</p>
              </div>
            </div>
            <ArrowUpRight
              className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              size={18}
            />
          </motion.a>

          {/* GitHub */}
          <motion.a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="group flex items-center justify-between p-5
              bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10
              hover:bg-white/10 hover:border-white/25
              shadow-[0_0_12px_rgba(255,255,255,0.02)]
              hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]
              transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20">
                <Github className="text-primary" size={18} />
              </div>
              <div className="text-left">
                <p className="text-xs text-muted mb-0.5 uppercase tracking-wider">GitHub</p>
                <p className="font-medium text-white text-sm">View Code</p>
              </div>
            </div>
            <ArrowUpRight
              className="text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              size={18}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}