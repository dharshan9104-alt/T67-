"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "1 in 3", label: "elderly aged 65+ in Singapore fall each year", color: "accent" },
  { value: "40%", label: "of injury-related deaths in Singapore are from falls", color: "coral" },
  { value: "85%", label: "of elderly trauma cases in emergency departments are falls", color: "accent" },
];

export default function Problem() {
  return (
    <section id="problem" className="relative min-h-screen flex items-center py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-border" />
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] rounded-full bg-coral/5 blur-[120px]" />

      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-coral">
            The Problem
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Falls are the{" "}
            <span className="text-gradient-warm">#1 cause</span>
            <br />
            of injury in older Singaporeans
          </h2>
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            In Singapore, elderly residents living alone are increasingly at risk.
            Falls happen at home — in bathrooms, kitchens, corridors — and too
            often, no one is around to notice. Some are only discovered after
            hours or even days.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5 mt-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`glass rounded-2xl p-8 text-center hover:scale-[1.02] transition-transform duration-500 ${
                stat.color === "accent" ? "glow-accent" : "glow-coral"
              }`}
            >
              <p className={`text-5xl sm:text-6xl font-bold tracking-tight ${
                stat.color === "accent" ? "text-gradient" : "text-gradient-warm"
              }`}>
                {stat.value}
              </p>
              <p className="mt-3 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center text-xs text-muted/50"
        >
          Sources: Singapore MOH, Health Promotion Board &amp; Singapore Medical Journal
        </motion.p>
      </div>
    </section>
  );
}
