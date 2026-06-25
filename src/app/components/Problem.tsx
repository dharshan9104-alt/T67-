"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "1 in 4", label: "adults over 65 fall each year", color: "accent" },
  { value: "37%", label: "can't get up without help", color: "coral" },
  { value: "95%", label: "of hip fractures from falls", color: "accent" },
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
            of injury in older adults
          </h2>
          <p className="mt-6 text-lg text-muted max-w-xl mx-auto leading-relaxed">
            Most elderly people living alone can&apos;t depend on neighbors or family
            for immediate help. A fall can leave someone on the ground for hours
            — unable to reach a phone, unable to call out.
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
          Source: CDC &amp; National Council on Aging
        </motion.p>
      </div>
    </section>
  );
}
