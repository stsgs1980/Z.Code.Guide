"use client";

import { Zap, Shield, Workflow, Smartphone, Lock, Puzzle } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { SectionHeader } from "@/ui/SectionHeader";
import { TaxiDivider } from "@/ui/TaxiDivider";
import { zcodeDefinition, twoKeyStrengths, coreCapabilities } from "@/data/zcode/whatIsZcode";

const capIcons = [Zap, Shield, Workflow, Smartphone, Lock, Puzzle];

export function WhatIsZcodeSection() {
  const { theme } = useTheme();
  const th = (d: string, l: string) => (theme === "light" ? l : d);

  return (
    <section id="what-is-zcode">
      <SectionHeader
        num="01"
        title="Что такое ZCode 3.0"
        subtitle="Agentic Development Environment"
      />

      {/* Definition card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-nyc-taxi/15", "bg-oklch(0.95 0.08 85)")}`}>
            <Zap className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4 className={`font-semibold text-sm ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>
            {zcodeDefinition.tagline}
          </h4>
        </div>
        <p className={`text-xs leading-relaxed ${th("text-white/70", "text-oklch(0.35 0 0)")}`}>
          {zcodeDefinition.description}
        </p>
      </motion.div>

      {/* Two key strengths */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <h4 className={`font-semibold text-sm mb-3 ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>
          Две ключевые силы
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {twoKeyStrengths.map((s, i) => (
            <div key={i} className={`p-3 rounded-lg ${th("bg-white/5", "bg-oklch(0.95 0 0)")}`}>
              <p className="text-xs font-semibold text-nyc-taxi mb-1">{s.strength}</p>
              <p className={`text-xs leading-relaxed ${th("text-white/60", "text-oklch(0.40 0 0)")}`}>{s.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Core capabilities — 6 cards */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-6 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <h4 className={`font-semibold text-sm mb-3 ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>
          Основные возможности
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {coreCapabilities.map((cap, i) => {
            const Icon = capIcons[i] || Zap;
            return (
              <div key={i} className={`p-3 rounded-lg ${th("bg-white/5", "bg-oklch(0.95 0 0)")}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center ${th("bg-nyc-taxi/20 text-nyc-taxi", "bg-oklch(0.93 0 0) text-oklch(0.78 0.16 85)")}`}>
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-nyc-taxi">{cap.title}</span>
                </div>
                <p className={`text-xs ${th("text-white/60", "text-oklch(0.40 0 0)")}`}>{cap.desc}</p>
              </div>
            );
          })}
        </div>
      </motion.div>

      <TaxiDivider />
    </section>
  );
}