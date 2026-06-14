"use client";

import { useState } from "react";
import {
  Sun,
  Moon,
  ToggleLeft,
  Zap,
  Monitor,
  Brain,
  GripVertical,
  ArrowLeftRight,
  Layers,
  CalendarDays,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { SectionHeader } from "@/ui/SectionHeader";
import { TaxiDivider } from "@/ui/TaxiDivider";
import {
  themeOptions,
  chatRenderingModes,
  taskGroupingFeatures,
} from "@/data/zcode/interfaceSettings";

const themeIcons = [Sun, Moon, ToggleLeft];
const modeIcons = [Zap, Monitor, Brain];
const featureIcons = [GripVertical, ArrowLeftRight, Layers, CalendarDays];

export function InterfaceSettingsSection() {
  const { theme } = useTheme();
  const th = (d: string, l: string) => (theme === "light" ? l : d);

  return (
    <section id="interface-settings">
      <SectionHeader
        num="19"
        title="Настройка интерфейса"
        subtitle="Персонализация рабочей среды"
      />

      {/* Тема — 3 option cards */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
            <Sun className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4 className="font-semibold text-sm">Тема</h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {themeOptions.map((opt, i) => {
            const Icon = themeIcons[i] || Sun;
            return (
              <motion.div
                key={opt.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`p-3 rounded-xl text-center ${th("bg-white/5 hover:bg-white/8", "bg-oklch(0.95 0 0) hover:bg-oklch(0.93 0 0)")} transition-colors`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2 ${th("bg-white/5", "bg-oklch(0.90 0 0)")}`}>
                  <Icon className="h-5 w-5 text-nyc-taxi" />
                </div>
                <p className="font-semibold text-xs mb-0.5">{opt.name}</p>
                <p className={`text-[10px] ${th("text-white/50", "text-oklch(0.50 0 0)")}`}>{opt.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Режимы рендеринга чата — 3 mode cards */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
            <Monitor className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4 className="font-semibold text-sm">Режимы рендеринга чата</h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {chatRenderingModes.map((mode, i) => {
            const Icon = modeIcons[i] || Monitor;
            return (
              <motion.div
                key={mode.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`p-3 rounded-xl ${th("bg-white/5", "bg-oklch(0.95 0 0)")}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="h-4 w-4 text-nyc-taxi flex-shrink-0" />
                  <span className="font-semibold text-xs">{mode.name}</span>
                </div>
                <p className={`text-[11px] mb-2 leading-relaxed ${th("text-white/60", "text-oklch(0.40 0 0)")}`}>
                  {mode.desc}
                </p>
                <span className={`text-[9px] px-2 py-0.5 rounded-full ${th("bg-nyc-taxi/10 text-nyc-taxi/80", "bg-oklch(0.93 0 0) text-oklch(0.78 0.16 85)")}`}>
                  {mode.when}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Группировка задач — 2x2 grid */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className={`p-4 rounded-xl mb-6 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
            <Layers className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4 className="font-semibold text-sm">Группировка задач</h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {taskGroupingFeatures.map((feat, i) => {
            const Icon = featureIcons[i] || Layers;
            return (
              <motion.div
                key={feat.feature}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`p-3 rounded-xl flex items-center gap-3 ${th("bg-white/5", "bg-oklch(0.95 0 0)")}`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${th("bg-nyc-taxi/10", "bg-oklch(0.93 0 0)")}`}>
                  <Icon className="h-4 w-4 text-nyc-taxi" />
                </div>
                <div>
                  <p className="font-semibold text-xs">{feat.feature}</p>
                  <p className={`text-[10px] ${th("text-white/50", "text-oklch(0.50 0 0)")}`}>{feat.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <TaxiDivider />
    </section>
  );
}