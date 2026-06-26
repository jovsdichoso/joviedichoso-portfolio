import { motion } from 'framer-motion';
import {
  Trophy,
  Award,
  FileText,
  ExternalLink,
} from 'lucide-react';
import { ACHIEVEMENTS } from '../../utils/constants';

export default function AchievementsSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Trophy':
        return Trophy;
      case 'Award':
        return Award;
      default:
        return FileText;
    }
  };

  return (
    <section id="awards" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Achievements & Certifications
          </h2>

          <p className="text-lg text-muted">
            Awards, recognitions, certifications, and professional development.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((item, index) => {
            const Icon = getIcon(item.icon);

            return (
              <motion.a
                key={item.id}
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                className="bg-dark-bg rounded-2xl overflow-hidden border border-dark-border hover:border-primary/50 transition-all group"
              >
                {/* Certificate Preview */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-primary text-black px-4 py-2 rounded-full flex items-center gap-2">
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">
                        View Certificate
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon
                      size={22}
                      className="text-primary flex-shrink-0"
                    />

                    <h3 className="text-lg font-bold">
                      {item.title}
                    </h3>
                  </div>

                  {item.description && (
                    <p className="text-gray-400 text-sm mb-2">
                      {item.description}
                    </p>
                  )}

                  {item.issuer && (
                    <p className="text-gray-400 text-sm mb-3">
                      {item.issuer}
                    </p>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-primary font-medium text-sm">
                      {item.year}
                    </span>

                    <ExternalLink
                      size={18}
                      className="text-primary"
                    />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}