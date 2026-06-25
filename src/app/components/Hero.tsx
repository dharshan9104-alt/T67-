"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

const BraceletViewer = dynamic(() => import("./BraceletViewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-square max-w-lg mx-auto flex items-center justify-center">
      <div className="w-10 h-10 border-2 border-accent/20 border-t-accent rounded-full animate-spin" />
    </div>
  ),
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-coral/5 blur-[100px] animate-pulse-glow [animation-delay:1.5s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/3 blur-[150px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-subtle tracking-wide uppercase">
                Fall-Detection Bracelet
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]"
            >
              <span className="text-gradient">Safe</span>
              <span className="text-white">Step</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 text-lg sm:text-xl text-muted max-w-md mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Two sensors. One bracelet.
              <br />
              <span className="text-subtle">
                Automatic fall detection that calls for help — even when you
                can&apos;t.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="mt-10"
            >
              <a
                href="#problem"
                className="inline-flex items-center gap-2 text-accent/70 hover:text-accent transition-colors duration-300 text-sm"
              >
                <span>Explore the bracelet</span>
                <ChevronDown className="w-4 h-4 animate-bounce" />
              </a>
            </motion.div>
          </div>

          {/* 3D Viewer */}
          <div className="order-1 lg:order-2">
            <BraceletViewer />
          </div>
        </div>
      </div>
    </section>
  );
}
