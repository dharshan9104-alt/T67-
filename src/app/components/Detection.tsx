"use client";

import { motion } from "framer-motion";
import { Activity, RotateCcw, Check, X } from "lucide-react";

const examples = [
  {
    action: "Sitting down quickly",
    motion: "Some downward motion",
    position: "Person is sitting, not horizontal",
    result: "Not a fall",
    alert: false,
  },
  {
    action: "Actual fall forward",
    motion: "Rapid downward motion",
    position: "Person ends up horizontal",
    result: "Fall detected — alert sent",
    alert: true,
  },
  {
    action: "Bending down",
    motion: "Some motion detected",
    position: "Person stays upright",
    result: "Not a fall",
    alert: false,
  },
  {
    action: "Lying down on bed",
    motion: "Slow, gradual movement",
    position: "Person becomes horizontal",
    result: "Not a fall",
    alert: false,
  },
];

export default function Detection() {
  return (
    <section className="relative min-h-screen flex items-center py-32 overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">
            Dual-Sensor Detection
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            How it knows you fell
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Two sensors working together — so it only alerts when it&apos;s real.
          </p>
        </motion.div>

        {/* Dual sensor explanation */}
        <div className="grid sm:grid-cols-2 gap-5 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8 glow-accent"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
              <Activity className="w-6 h-6 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-white">Sensor 1: Motion</h3>
            <p className="text-sm text-accent/70 mt-1 mb-3">Accelerometer</p>
            <p className="text-muted leading-relaxed">
              Constantly measures: <span className="text-subtle">&ldquo;How fast is the person moving?&rdquo;</span>
              <br />
              Detects sudden, rapid downward motion that&apos;s different from normal daily activity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-2xl p-8 glow-coral"
          >
            <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-5">
              <RotateCcw className="w-6 h-6 text-coral" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-white">Sensor 2: Orientation</h3>
            <p className="text-sm text-coral/70 mt-1 mb-3">Gyroscope</p>
            <p className="text-muted leading-relaxed">
              Constantly measures: <span className="text-subtle">&ldquo;What position is the person in?&rdquo;</span>
              <br />
              Detects when your body goes from upright to horizontal — confirming you&apos;re on the ground.
            </p>
          </motion.div>
        </div>

        {/* The logic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-5 glass rounded-2xl p-8 text-center"
        >
          <p className="text-lg text-subtle">
            A fall is confirmed only when{" "}
            <span className="text-gradient font-semibold">both sensors trigger at the same time</span>
          </p>
          <p className="mt-3 text-sm text-muted">
            Rapid downward motion <span className="text-accent mx-2">+</span> Body becomes horizontal <span className="text-accent mx-2">=</span> <span className="text-white font-semibold">Fall detected</span>
          </p>
        </motion.div>

        {/* Examples */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            How it tells the difference
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {examples.map((ex, i) => (
              <motion.div
                key={ex.action}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className={`glass rounded-2xl p-6 border ${
                  ex.alert ? "border-coral/20" : "border-accent/10"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-white">{ex.action}</h4>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      ex.alert ? "bg-coral/20" : "bg-accent/10"
                    }`}
                  >
                    {ex.alert ? (
                      <Check className="w-4 h-4 text-coral" />
                    ) : (
                      <X className="w-4 h-4 text-accent" />
                    )}
                  </div>
                </div>
                <div className="space-y-1.5 text-sm">
                  <p className="text-muted">
                    <span className="text-subtle">Motion:</span> {ex.motion}
                  </p>
                  <p className="text-muted">
                    <span className="text-subtle">Position:</span> {ex.position}
                  </p>
                  <p className={`font-semibold mt-3 ${ex.alert ? "text-coral" : "text-accent"}`}>
                    {ex.result}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
