"use client";

import { Zap, Shield, Lock, Lightbulb, Info } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { SectionHeader } from "@/ui/SectionHeader";
import { TaxiDivider } from "@/ui/TaxiDivider";
import {
  executionModes,
  modeSwitchTip,
  modeCombinationTip,
} from "@/data/zcode/executionModes";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Shield,
  Lock,
};

export function ExecutionModesSection() {
  const { theme } = useTheme();
  const th = (d: string, l: string) => (theme === "light" ? l : d);

  const resolveColor = (color: string) => {
    const base: Record<string, { dot: string; badge: string; border: string }> = {
      green: {
        dot: "bg-green-500",
        badge: th("bg-green-500/20 text-green-400", "bg-green-100 text-green-700"),
        border: th("border-green-500/30", "border-green-300"),
      },
      blue: {
        dot: "bg-blue-500",
        badge: th("bg-blue-500/20 text-blue-400", "bg-blue-100 text-blue-700"),
        border: th("border-blue-500/30", "border-blue-300"),
      },
      red: {
        dot: "bg-red-500",
        badge: th("bg-red-500/20 text-red-400", "bg-red-100 text-red-700"),
        border: th("border-red-500/30", "border-red-300"),
      },
    };
    return base[color] || base.blue;
  };

  return (
    <section id="execution-modes">
      <SectionHeader
        num="15"
        title="Режимы выполнения"
        subtitle="Execution Modes"
      />

      {/* 3 Mode Cards */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {executionModes.map((mode, i) => {
            const Icon = iconMap[mode.icon] || Shield;
            const colors = resolveColor(mode.color);
            return (
              <div
                key={mode.name}
                className={`p-4 rounded-xl border ${colors.border} ${th(
                  "bg-white/[0.02]",
                  "bg-oklch(0.98 0 0)"
                )}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${th(
                      "bg-white/5",
                      "bg-oklch(0.93 0 0)"
                    )}`}
                  >
                    <Icon className={`h-4 w-4 text-nyc-taxi`} />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-semibold ${colors.badge}`}
                    >
                      {mode.name}
                    </span>
                  </div>
                </div>

                <p
                  className={`text-xs leading-relaxed mb-3 ${th(
                    "text-white/70",
                    "text-oklch(0.35 0 0)"
                  )}`}
                >
                  {mode.desc}
                </p>

                <div
                  className={`p-2.5 rounded-lg ${th(
                    "bg-white/5",
                    "bg-oklch(0.95 0 0)"
                  )}`}
                >
                  <span
                    className={`text-[10px] font-medium ${th(
                      "text-white/50",
                      "text-oklch(0.50 0 0)"
                    )}`}
                  >
                    Когда использовать:
                  </span>
                  <p
                    className={`text-xs mt-1 ${th(
                      "text-white/80",
                      "text-oklch(0.30 0 0)"
                    )}`}
                  >
                    {mode.when}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Tip boxes */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-6 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Switch Tip */}
          <div
            className={`p-3 rounded-lg flex items-start gap-2.5 ${th(
              "bg-nyc-taxi/5 border border-nyc-taxi/20",
              "bg-amber-50/80 border border-amber-300/50"
            )}`}
          >
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${th(
                "bg-nyc-taxi/20",
                "bg-amber-100"
              )}`}
            >
              <Lightbulb className="h-3.5 w-3.5 text-nyc-taxi" />
            </div>
            <div>
              <h5
                className={`text-xs font-semibold mb-1 ${th(
                  "text-white/80",
                  "text-oklch(0.30 0 0)"
                )}`}
              >
                Переключение режимов
              </h5>
              <p
                className={`text-xs leading-relaxed ${th(
                  "text-white/70",
                  "text-oklch(0.35 0 0)"
                )}`}
              >
                {modeSwitchTip}
              </p>
            </div>
          </div>

          {/* Combination Tip */}
          <div
            className={`p-3 rounded-lg flex items-start gap-2.5 ${th(
              "bg-white/5 border border-white/10",
              "bg-oklch(0.95 0 0) border border-oklch(0.88 0 0)"
            )}`}
          >
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${th(
                "bg-white/5",
                "bg-oklch(0.90 0 0)"
              )}`}
            >
              <Info className="h-3.5 w-3.5 text-nyc-taxi" />
            </div>
            <div>
              <h5
                className={`text-xs font-semibold mb-1 ${th(
                  "text-white/80",
                  "text-oklch(0.30 0 0)"
                )}`}
              >
                Комбинация режимов
              </h5>
              <p
                className={`text-xs leading-relaxed ${th(
                  "text-white/70",
                  "text-oklch(0.35 0 0)"
                )}`}
              >
                {modeCombinationTip}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <TaxiDivider />
    </section>
  );
}