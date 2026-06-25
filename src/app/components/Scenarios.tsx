"use client";

import { motion } from "framer-motion";
import { Bath, Brain, Hand } from "lucide-react";

const scenarios = [
  {
    icon: Bath,
    title: "Bathroom Slip",
    color: "accent",
    steps: [
      "You slip on a wet bathroom floor",
      "Bracelet detects the sudden fall",
      "Alert sent to your caregiver",
      "You're okay — you press cancel",
      "No further action needed",
    ],
  },
  {
    icon: Brain,
    title: "Unconscious Fall",
    color: "coral",
    steps: [
      "You fall and hit your head, lose consciousness",
      "Bracelet detects the fall automatically",
      "Alert sent — you can't respond",
      "Caregiver sees no response, initiates help",
      "Your location is sent to responders",
    ],
  },
  {
    icon: Hand,
    title: "Intentional SOS",
    color: "accent",
    steps: [
      "You're feeling faint but haven't fallen",
      "You press the SOS button",
      "Emergency alert sent immediately",
      "Caregiver responds right away",
      "Help arrives before a fall even happens",
    ],
  },
];

export default function Scenarios() {
  return (
    <section className="relative min-h-screen flex items-center py-32 overflow-hidden">
      <div className="absolute right-0 top-1/3 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">
            Real-World Scenarios
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            When it matters most
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mt-16">
          {scenarios.map((scenario, i) => (
            <motion.div
              key={scenario.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`glass rounded-2xl p-7 flex flex-col ${
                scenario.color === "accent" ? "glow-accent" : "glow-coral"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    scenario.color === "accent" ? "bg-accent/10" : "bg-coral/10"
                  }`}
                >
                  <scenario.icon
                    className={`w-5 h-5 ${scenario.color === "accent" ? "text-accent" : "text-coral"}`}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-bold text-white">{scenario.title}</h3>
              </div>

              <ol className="space-y-3 flex-1">
                {scenario.steps.map((step, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold ${
                        scenario.color === "accent"
                          ? "bg-accent/15 text-accent"
                          : "bg-coral/15 text-coral"
                      }`}
                    >
                      {j + 1}
                    </span>
                    <span className="text-sm text-muted leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
