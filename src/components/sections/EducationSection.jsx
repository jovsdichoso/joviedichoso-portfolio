import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../../utils/constants';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Education</h2>
          <p className="text-lg text-muted">Academic background</p>
        </motion.div>
        
        <div className="space-y-4">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark-card p-5 rounded-2xl border border-dark-border hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                  <GraduationCap className="text-primary" size={20} />
                </div>
                
                <div className="flex-1">
                  <span className="text-xs text-primary font-semibold uppercase tracking-wider">{edu.type}</span>
                  <h3 className="text-lg font-bold mt-1 mb-1">{edu.degree}</h3>
                  <p className="text-sm text-gray-400">{edu.school}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
