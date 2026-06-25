"use client";

import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="glass-strong rounded-2xl px-6 py-3 flex items-center justify-center">
          <span className="text-sm font-medium tracking-widest uppercase text-subtle">
            Safe<span className="text-accent">Step</span>
          </span>
        </div>
      </div>
    </motion.nav>
  );
}
