'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const logoVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -180 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-purple-500/5 animate-pulse"></div>

      <motion.div
        className="relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div variants={logoVariants} className="mb-8 flex justify-center">
          <div className="relative w-24 h-24">
            {/* Animated rings around logo */}
            <motion.div
              className="absolute inset-0 border-2 border-cyan-400 rounded-full"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-2 border border-purple-400 rounded-full"
              animate={{ rotate: -360, scale: [1, 0.9, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
            {/* Logo placeholder - will show actual logo */}
            <div className="absolute inset-4 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center text-white font-black text-xl">
              JCLs
            </div>
          </div>
        </motion.div>

        {/* Brand Name with typewriter effect */}
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            JARE'S CHOICE
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div variants={itemVariants}>
          <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300 font-light tracking-wider mb-8">
            LABS
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants}>
          <p className="text-neutral-400 font-light text-lg mb-8">
            Engineering Absolute Scale
          </p>
        </motion.div>

        {/* Loading indicator */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-2"
        >
          <motion.div
            className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <motion.div
            className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, delay: 0.2, repeat: Infinity }}
          />
          <motion.div
            className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, delay: 0.4, repeat: Infinity }}
          />
        </motion.div>

        {/* Skip button */}
        <motion.div variants={itemVariants} className="mt-8">
          <Link
            href="/"
            className="text-sm font-mono text-neutral-400 hover:text-cyan-400 transition-colors border-b border-neutral-600 hover:border-cyan-400 pb-1"
          >
            [ Skip Intro ]
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
