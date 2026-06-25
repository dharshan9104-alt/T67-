"use client";

import { motion } from "framer-motion";
import { Clock, Heart, Home, Users } from "lucide-react";

const points = [
  {
    icon: Clock,
    title: "No more lying undiscovered for hours",
    description:
      "Many elderly Singaporeans who fall at home are only found hours — sometimes days — later. SafeStep sends an alert within seconds, closing the gap between fall and response.",
    color: "coral",
  },
  {
    icon: Home,
    title: "Safe aging in place",
    description:
      "With Singapore's rapidly aging population, more seniors want to live independently. SafeStep lets them stay in their own homes while giving families real-time peace of mind.",
    color: "accent",
  },
  {
    icon: Heart,
    title: "Faster response saves lives",
    description:
      "For hip fractures and head injuries, every minute counts. Immediate alerts mean ambulances arrive sooner — reducing complications, hospital stays, and long-term care needs.",
    color: "coral",
  },
  {
    icon: Users,
    title: "Relief for families and caregivers",
    description:
      "Adult children juggling work and caregiving can't always be there. SafeStep acts as a constant safety net — so families worry less and seniors feel supported, not surveilled.",
    color: "accent",
  },
];

export default function Impact() {
  return (
    <section className="relative min-h-screen flex items-center py-32 overflow-hidden">
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute right-0 top-1/3 w-[300px] h-[300px] rounded-full bg-coral/5 blur-[100px]" />

      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">
            Why This Matters
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Helping Singapore&apos;s elderly
            <span className="block text-gradient mt-1">live safely alone</span>
          </h2>
          <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            In Singapore, elderly residents living alone are increasingly at
            risk. Falls happen at home — in bathrooms, kitchens, corridors — and
            too often, no one is around to notice. Some are only discovered
            after hours or even days.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 glass rounded-2xl p-6 sm:p-8 text-center glow-coral"
        >
          <p className="text-xl sm:text-2xl font-bold text-white">
            Over <span className="text-gradient-warm">40%</span> of Singapore&apos;s
            elderly live alone or with only their spouse
          </p>
          <p className="mt-3 text-sm text-muted">
            With no one nearby during a fall, delayed discovery leads to worse
            injuries, longer recoveries, and preventable deaths.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mt-12">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.15 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass rounded-2xl p-7 group hover:bg-white/[0.04] transition-all duration-500"
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors duration-500 ${
                  point.color === "accent"
                    ? "bg-accent/10 group-hover:bg-accent/20"
                    : "bg-coral/10 group-hover:bg-coral/20"
                }`}
              >
                <point.icon
                  className={`w-5 h-5 ${
                    point.color === "accent" ? "text-accent" : "text-coral"
                  }`}
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-lg font-bold text-white">{point.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
