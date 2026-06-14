"use client";

import { Smartphone, QrCode, Wifi, CheckCircle, AlertTriangle, Clock, MessageCircle, ArrowLeftRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { SectionHeader } from "@/ui/SectionHeader";
import { TaxiDivider } from "@/ui/TaxiDivider";
import {
  remoteControlWhenToUse,
  remoteControlSetupSteps,
  remoteControlCapabilities,
  remoteControlLimitations,
} from "@/data/zcode/remoteControl";

export function RemoteControlSection() {
  const { theme } = useTheme();
  const th = (d: string, l: string) => (theme === "light" ? l : d);

  const stepIcons = [Smartphone, QrCode, Wifi, CheckCircle];

  return (
    <section id="remote-control">
      <SectionHeader
        num="17"
        title="Remote Control"
        subtitle="Управление с телефона"
      />

      {/* Когда использовать */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
            <Clock className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4 className="font-semibold text-sm">Когда использовать</h4>
        </div>

        <ul className="space-y-2">
          {remoteControlWhenToUse.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${th("bg-nyc-taxi/60", "bg-oklch(0.78 0.16 85)")}`} />
              <p className={`text-xs ${th("text-white/60", "text-oklch(0.40 0 0)")}`}>{item}</p>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Как подключиться */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
            <Smartphone className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4 className="font-semibold text-sm">Как подключиться</h4>
        </div>

        <div className="space-y-2">
          {remoteControlSetupSteps.map((s, i) => {
            const Icon = stepIcons[i] || Smartphone;
            return (
              <div key={s.step} className="flex items-start gap-3">
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-medium ${th("bg-nyc-taxi/20 text-nyc-taxi", "bg-oklch(0.93 0 0) text-oklch(0.78 0.16 85)")}`}>
                    {s.step}
                  </span>
                  <Icon className="h-3.5 w-3.5 text-nyc-taxi mt-0.5" />
                </div>
                <p className={`text-xs ${th("text-white/60", "text-oklch(0.40 0 0)")}`}>{s.action}</p>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Что можно делать — grid of capability cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        {remoteControlCapabilities.map((cap, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`p-3 rounded-xl flex items-start gap-2.5 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
          >
            <CheckCircle className="h-4 w-4 text-nyc-taxi flex-shrink-0 mt-0.5" />
            <p className={`text-xs ${th("text-white/60", "text-oklch(0.40 0 0)")}`}>{cap}</p>
          </motion.div>
        ))}
      </div>

      {/* Ограничения */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-6 ${th("border border-amber-500/20 bg-amber-500/5", "border border-amber-400/30 bg-amber-50/80")}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-amber-500/10", "bg-amber-100")}`}>
            <AlertTriangle className="h-4 w-4 text-amber-400" />
          </div>
          <h4 className={`font-semibold text-sm ${th("text-amber-300", "text-amber-700")}`}>Ограничения</h4>
        </div>

        <ul className="space-y-2">
          {remoteControlLimitations.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <AlertTriangle className="h-3 w-3 text-amber-400/60 flex-shrink-0 mt-0.5" />
              <p className={`text-xs ${th("text-amber-200/70", "text-amber-700/80")}`}>{item}</p>
            </li>
          ))}
        </ul>
      </motion.div>

      <TaxiDivider />
    </section>
  );
}