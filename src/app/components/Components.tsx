"use client";

import { motion } from "framer-motion";
import {
  CircleAlert,
  Activity,
  RotateCcw,
  Volume2,
  Wifi,
  Cpu,
} from "lucide-react";

const parts = [
  {
    icon: CircleAlert,
    title: "SOS Emergency Button",
    detail: "Red button on top of the bracelet",
    description:
      "One press sends an emergency alert to your caregiver's phone. Gives you direct control — if you need help for any reason, you don't need to wait for the sensors.",
    accent: true,
  },
  {
    icon: Activity,
    title: "Motion Sensor",
    detail: "Accelerometer",
    description:
      "Measures how fast and in what direction you're moving. Normal movements produce lower readings. A sudden, rapid downward motion triggers a higher reading — signaling a potential fall.",
    accent: false,
  },
  {
    icon: RotateCcw,
    title: "Orientation Sensor",
    detail: "Gyroscope",
    description:
      "Detects the angle and position of your body in real-time. It knows if you're standing upright or lying horizontal — confirming whether you've ended up on the ground.",
    accent: true,
  },
  {
    icon: Volume2,
    title: "Speaker",
    detail: "Built-in on the bracelet",
    description:
      "Lets you hear alerts and communicate with emergency contacts hands-free. Receives audio from your phone or responders so you don't need to hold anything.",
    accent: false,
  },
  {
    icon: Wifi,
    title: "Wireless Connection",
    detail: "Bracelet-to-phone communication",
    description:
      "Sends sensor data to your phone wirelessly. Your phone then connects to the cloud to reach emergency contacts. No cables needed for communication.",
    accent: true,
  },
  {
    icon: Cpu,
    title: "Processing System",
    detail: "The brain of the bracelet",
    description:
      "Reads data from both sensors and decides: is this a fall or normal activity? If a fall is confirmed, it triggers the alert. This is what makes the bracelet intelligent.",
    accent: false,
  },
];

export default function Components() {
  return (
    <section className="relative min-h-screen flex items-center py-32 overflow-hidden">
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
      <div className="absolute right-0 bottom-1/4 w-[300px] h-[300px] rounded-full bg-coral/5 blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-accent">
            Anatomy
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            6 parts. One bracelet.
          </h2>
          <p className="mt-4 text-lg text-muted max-w-lg mx-auto">
            Every component serves a purpose in keeping you safe.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {parts.map((part, i) => (
            <motion.div
              key={part.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.5,
                delay: 0.05 + i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="glass rounded-2xl p-6 group hover:bg-white/[0.04] transition-all duration-500 cursor-default"
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors duration-500 ${
                  part.accent
                    ? "bg-accent/10 group-hover:bg-accent/20"
                    : "bg-coral/10 group-hover:bg-coral/20"
                }`}
              >
                <part.icon
                  className={`w-5 h-5 ${part.accent ? "text-accent" : "text-coral"}`}
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-base font-bold text-white">{part.title}</h3>
              <p className="text-xs text-accent/70 mt-0.5 mb-2">{part.detail}</p>
              <p className="text-sm text-muted leading-relaxed">
                {part.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
