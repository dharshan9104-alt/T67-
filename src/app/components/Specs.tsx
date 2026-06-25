"use client";

import { motion } from "framer-motion";

const specs = [
  { label: "Weight", value: "~60g" },
  { label: "Battery", value: "7 days" },
  { label: "Sensors", value: "Accelerometer + SOS" },
  { label: "Material", value: "Medical-grade silicone" },
  { label: "Water Resistance", value: "IP67" },
  { label: "Wrist Size", value: "14–22 cm" },
  { label: "Charging", value: "USB-C magnetic" },
  { label: "Connectivity", value: "Bluetooth + Wi-Fi" },
];

export default function Specs() {
  return (
    <section className="relative min-h-screen flex items-center py-32 overflow-hidden">
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="max-w-3xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">
            Specifications
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            The details
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 glass rounded-2xl overflow-hidden"
        >
          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
              className={`flex items-center justify-between px-7 py-5 group hover:bg-white/[0.02] transition-colors duration-300 ${
                i < specs.length - 1 ? "border-b border-white/[0.04]" : ""
              }`}
            >
              <span className="text-muted group-hover:text-subtle transition-colors">{spec.label}</span>
              <span className="font-semibold text-white">{spec.value}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-center text-xs text-muted/40"
        >
          Prototype specs — subject to change
        </motion.p>
      </div>
    </section>
  );
}
