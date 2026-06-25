"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Smartphone,
  Users,
  Bell,
  MessageSquare,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";

const steps = [
  {
    icon: AlertTriangle,
    num: "01",
    title: "Fall recognized",
    description: "Both sensors confirm the fall. The processing system triggers an alert.",
  },
  {
    icon: Smartphone,
    num: "02",
    title: "Signal sent to your phone",
    description: "Bracelet wirelessly sends the alert data — including your location and time of fall.",
  },
  {
    icon: Users,
    num: "03",
    title: "Contacts notified",
    description: "Your phone sends notifications to all registered emergency contacts within seconds.",
  },
  {
    icon: Bell,
    num: "04",
    title: "You can respond",
    description: "If you're okay, cancel the alert. If you need help, press SOS for additional assistance.",
  },
];

const alertMethods = [
  { icon: Bell, title: "Push Notification", description: "Alert appears on caregiver's phone screen via the app" },
  { icon: Mail, title: "Text Message (SMS)", description: "Works on any phone — provides location and fall info" },
  { icon: Phone, title: "Phone Call", description: "Voice notification — reaches caregivers even if they're not looking at their phone" },
  { icon: MessageCircle, title: "In-App Chat", description: "Direct messaging between you and caregiver for quick back-and-forth" },
];

export default function AlertFlow() {
  return (
    <section className="relative min-h-screen flex items-center py-32 overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[500px] rounded-full bg-coral/5 blur-[120px]" />

      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-coral">
            Alert System
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            What happens next
          </h2>
          <p className="mt-4 text-lg text-muted max-w-lg mx-auto">
            From detection to help — in seconds, not minutes.
          </p>
        </motion.div>

        {/* Steps */}
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
                <span className="text-3xl sm:text-4xl font-bold text-gradient-warm opacity-50 group-hover:opacity-100 transition-opacity">
                  {step.num}
                </span>
                <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center group-hover:bg-coral/20 transition-colors duration-500">
                  <step.icon className="w-6 h-6 text-coral" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-1 text-muted leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Alert methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            How alerts reach your caregiver
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {alertMethods.map((method, i) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="glass rounded-2xl p-5 text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center mx-auto mb-3">
                  <method.icon className="w-5 h-5 text-coral" strokeWidth={1.5} />
                </div>
                <h4 className="text-sm font-bold text-white">{method.title}</h4>
                <p className="mt-1 text-xs text-muted leading-relaxed">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
