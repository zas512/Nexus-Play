'use client';

import { motion } from 'framer-motion';

export default function AnimatedHeading() {
  return (
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="text-2xl mt-4 mb-8 text-center text-primary font-bold"
    >
      Your Gateway to Multiplayer Gaming
    </motion.h2>
  );
}

