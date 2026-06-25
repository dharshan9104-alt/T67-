"use client";

import { motion } from "framer-motion";
import { Watch, ShieldAlert, Bell, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Watch,
    num: "01",
    title: "Wear it",
    description: "Adjustable, comfortable strap. Put it on and the bracelet starts monitoring your movement automatically in the background.",
  },
  {
    icon: ShieldAlert,
    num: "02",
    title: "Fall detected — or SOS pressed",
    description: "The motion sensor and orientation sensor work together to confirm a real fall. Or press the SOS button yourself for any emergency.",
  },
  {
    icon: Bell,
    num: "03",
    title: "Caregiver alerted instantly",
    description: "Your phone sends notifications to all emergency contacts — via push notification, SMS, phone call, or in-app message.",
  },
  {
    icon: CheckCircle,
    num: "04",
    title: "You can respond",
    description: "If you're okay, cancel the alert. If you can't respond, the system escalates — sharing your location with responders.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative min-h-screen flex items-center py-32 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">
            How It Works
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Four steps. That&apos;s it.
          </h2>
        </motion.div>

        <div className="mt-16 space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="glass rounded-2xl p-7 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:bg-white/[0.04] transition-colors duration-500 group"
            >
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-3xl sm:text-4xl font-bold text-gradient opacity-50 group-hover:opacity-100 transition-opacity">
                  {step.num}
                </span>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-500">
                  <step.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-1 text-muted leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
