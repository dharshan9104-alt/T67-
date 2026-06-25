"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const vsManual = [
  { feature: "Detects falls automatically", bracelet: true, other: false },
  { feature: "Works when unconscious", bracelet: true, other: false },
  { feature: "Manual SOS button", bracelet: true, other: true },
  { feature: "Hands-free communication", bracelet: true, other: false },
];

const vsPhone = [
  { feature: "Automatic fall detection", bracelet: true, other: false },
  { feature: "Works if phone is elsewhere", bracelet: true, other: false },
  { feature: "Hands-free communication", bracelet: true, other: false },
  { feature: "Always on your body", bracelet: true, other: false },
];

function StatusIcon({ yes }: { yes: boolean }) {
  return yes ? (
    <div className="w-7 h-7 rounded-full bg-accent/15 flex items-center justify-center">
      <Check className="w-3.5 h-3.5 text-accent" />
    </div>
  ) : (
    <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center">
      <X className="w-3.5 h-3.5 text-muted/40" />
    </div>
  );
}

function ComparisonRow({ feature, ours, theirs }: { feature: string; ours: boolean; theirs: boolean }) {
  return (
    <div className="flex items-center justify-between py-3 border-t border-white/[0.04]">
      <span className="text-sm text-subtle flex-1">{feature}</span>
      <div className="flex items-center gap-6">
        <StatusIcon yes={ours} />
        <StatusIcon yes={theirs} />
      </div>
    </div>
  );
}

export default function Comparison() {
  return (
    <section className="relative min-h-screen flex items-center py-32 overflow-hidden">
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="max-w-4xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">
            Why SafeStep
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Compared to alternatives
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-white/[0.04]">
              <h3 className="text-lg font-bold text-white">vs. Manual Alert Systems</h3>
              <p className="text-xs text-muted mt-1">Button-only devices</p>
            </div>
            <div className="px-6 pb-4">
              <div className="flex items-center justify-end gap-6 pt-4 pb-2">
                <span className="text-xs text-accent/70 uppercase tracking-wider w-7 text-center">Ours</span>
                <span className="text-xs text-muted/50 uppercase tracking-wider w-7 text-center">Theirs</span>
              </div>
              {vsManual.map((row) => (
                <ComparisonRow key={row.feature} feature={row.feature} ours={row.bracelet} theirs={row.other} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-white/[0.04]">
              <h3 className="text-lg font-bold text-white">vs. Just a Smartphone</h3>
              <p className="text-xs text-muted mt-1">Relying on a phone alone</p>
            </div>
            <div className="px-6 pb-4">
              <div className="flex items-center justify-end gap-6 pt-4 pb-2">
                <span className="text-xs text-accent/70 uppercase tracking-wider w-7 text-center">Ours</span>
                <span className="text-xs text-muted/50 uppercase tracking-wider w-7 text-center">Phone</span>
              </div>
              {vsPhone.map((row) => (
                <ComparisonRow key={row.feature} feature={row.feature} ours={row.bracelet} theirs={row.other} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
