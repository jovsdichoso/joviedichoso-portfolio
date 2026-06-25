import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';
import { ACHIEVEMENTS } from '../../utils/constants';

export default function AchievementsSection() {
  return (
    <section id="awards" className="py-24 px-4 bg-dark-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Awards</h2>
          <p className="text-lg text-muted">Recognition & achievements</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {ACHIEVEMENTS.map((achievement, index) => {
            const Icon = achievement.icon === 'Trophy' ? Trophy : Award;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-bg p-5 rounded-2xl border border-dark-border hover:border-primary/50 transition-all group"
              >
                <Icon className="text-primary mb-3 group-hover:scale-110 transition-transform" size={24} />
                <h3 className="text-lg font-bold mb-1">{achievement.title}</h3>
                {achievement.description && (
                  <p className="text-gray-400 text-sm mb-2">{achievement.description}</p>
                )}
                <p className="text-primary text-sm font-medium">{achievement.year}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
