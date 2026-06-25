"use client";

import { motion } from "framer-motion";
import { Radar, CircleAlert, Feather, MessageSquare, Zap } from "lucide-react";

const features = [
  {
    icon: Radar,
    title: "Fall Detection",
    description: "Accelerometer detects sudden falls instantly — no button press needed.",
    accent: true,
  },
  {
    icon: CircleAlert,
    title: "SOS Button",
    description: "Large, visible emergency button on top. One press for any emergency.",
    accent: false,
  },
  {
    icon: Feather,
    title: "Lightweight & Comfortable",
    description: "Lightweight, adjustable strap. Designed for 24/7 wear.",
    accent: true,
  },
  {
    icon: MessageSquare,
    title: "Two-Way Audio",
    description: "Built-in speaker for voice communication with responders.",
    accent: false,
  },
  {
    icon: Zap,
    title: "Instant Alerts",
    description: "Contacts notified in seconds with the wearer's live location.",
    accent: true,
  },
];

export default function Features() {
  return (
    <section className="relative min-h-screen flex items-center py-32 overflow-hidden">
      <div className="absolute right-1/4 top-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute left-1/4 bottom-1/4 w-[300px] h-[300px] rounded-full bg-coral/5 blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">
            Features
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Everything it does
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`glass rounded-2xl p-7 group hover:scale-[1.03] transition-all duration-500 cursor-default ${
                i === features.length - 1 ? "sm:col-span-2 lg:col-span-1 sm:max-w-sm sm:mx-auto lg:max-w-none" : ""
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-500 ${
                feature.accent
                  ? "bg-accent/10 group-hover:bg-accent/20"
                  : "bg-coral/10 group-hover:bg-coral/20"
              }`}>
                <feature.icon
                  className={`w-6 h-6 ${feature.accent ? "text-accent" : "text-coral"}`}
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg font-bold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
