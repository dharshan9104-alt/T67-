"use client";

import { motion } from "framer-motion";

export default function Closing() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-coral/5 blur-[120px] animate-pulse-glow [animation-delay:2s]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]">
            <span className="text-white">Simple to wear.</span>
            <br />
            <span className="text-gradient">Powerful when</span>
            <br />
            <span className="text-gradient">it matters.</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-10 text-lg text-muted max-w-md mx-auto"
          >
            SafeStep Bracelet — giving elderly individuals
            safety and independence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-20 pt-10 border-t border-white/[0.06]"
          >
            <p className="text-xs text-muted/30 tracking-widest uppercase">
              SafeStep &middot; Early-Stage Prototype
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
