'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = { children: React.ReactNode; initial?: React.ComponentProps<typeof motion.div>['initial'] };

function AnimationWrapper({ children, initial }: Props) {
  const defaultInitial = {
    opacity: 0,
    y: 15,
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={initial || defaultInitial}
        animate={{ opacity: 1, y: 0, x: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.15 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimationWrapper;
