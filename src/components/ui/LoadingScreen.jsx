import React from 'react'
import { motion } from 'framer-motion'

/**
 * LoadingScreen — full-viewport intro animation shown on first load.
 */
export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-background flex flex-col items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Logo mark */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'backOut' }}
        className="relative mb-8"
      >
        <div className="w-20 h-20 rounded-2xl bg-surface border border-border flex items-center justify-center shadow-glow">
          <span className="font-display text-2xl font-bold gradient-text-blue">&lt;/&gt;</span>
        </div>
        {/* Rotating ring */}
        <motion.div
          className="absolute inset-[-6px] rounded-2xl border-2 border-transparent border-t-primary border-r-primary/40"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {/* Name */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="font-display text-xl font-semibold text-foreground tracking-wide mb-2"
      >
        Portfolio
      </motion.p>

      {/* Loading dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex gap-1.5 mt-4"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
