"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { DigitalClock } from './DigitalClock';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevents the background website from scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'About', href: '/about', icon: '▲' },
    { label: 'Projects', href: '/projects', icon: '◆' },
    { label: 'Contact', href: '/contact', icon: '⚡' },
  ];

  const menuVariants: Variants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      x: '-100%',
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const linkVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-gradient-to-b from-slate-950/95 to-slate-900/90 backdrop-blur-lg border-b border-cyan-500/30 shadow-lg shadow-cyan-500/10'
            : 'bg-gradient-to-b from-slate-950/80 via-slate-900/40 to-transparent border-b border-cyan-500/10'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative group z-50">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-10 h-10">
                {/* Try to load actual logo, fallback to text */}
                <Image
                  src="/logos/jcls-logo.png"
                  alt="JCLs Logo"
                  fill
                  className="object-contain"
                  priority
                />
                {/* Fallback logo */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded flex items-center justify-center text-white font-black text-xs">
                  JCLs
                </div>
              </div>
              <motion.span
                className="font-black text-lg tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 hidden sm:inline"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                LABS
              </motion.span>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Center */}
          <motion.div
            className="hidden md:flex items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {navLinks.map((link) => (
              <motion.div key={link.href} whileHover={{ scale: 1.05 }}>
                <Link
                  href={link.href}
                  className="group relative px-4 py-2 text-sm font-mono uppercase tracking-wider text-neutral-400 hover:text-cyan-400 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-xs">{link.icon}</span>
                    {link.label}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-500/20"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Clock + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Digital Clock */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <DigitalClock />
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded"
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded"
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 pt-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 md:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-purple-500/5"></div>

            <div className="relative z-10 px-6 py-8 space-y-6">
              {/* Clock in mobile menu */}
              <motion.div
                className="mb-8 pb-6 border-b border-cyan-500/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <p className="text-xs font-mono text-neutral-500 mb-3">LOCAL TIME</p>
                <DigitalClock />
              </motion.div>

              {/* Navigation Links */}
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 hover:scale-105 transition-transform duration-300 py-2"
                  >
                    <span className="text-lg mr-2">{link.icon}</span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Divider */}
              <motion.div
                className="my-8 h-px bg-gradient-to-r from-cyan-500/20 via-transparent to-purple-500/20"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4 }}
              />

              {/* Footer in menu */}
              <motion.div
                className="text-xs font-mono text-neutral-500 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p>System Operations</p>
                <p className="text-cyan-400">Olowojare Muhammed</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
