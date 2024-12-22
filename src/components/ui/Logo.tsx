'use client'

import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <motion.svg
      width="200"
      height="50"
      viewBox="0 0 200 50"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-primary)" />
          <stop offset="100%" stopColor="var(--color-secondary, var(--color-primary))" />
        </linearGradient>
      </defs>
      <text
        x="10"
        y="40"
        fontFamily="Play, sans-serif"
        fontSize="40"
        fontWeight="bold"
        fill="url(#gradient)"
      >
        NexusPlay
      </text>
      <circle cx="185" cy="25" r="10" fill="var(--color-primary)" />
    </motion.svg>
  )
}

