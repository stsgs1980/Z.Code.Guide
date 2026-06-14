"use client";

import { useState } from "react";
import {
  BarChart3,
  Coins,
  Activity,
  Flame,
  Clock,
  TrendingUp,
  Grid3X3,
  Trophy,
  Calendar,
  CreditCard,
  Hourglass,
  Cpu,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { SectionHeader } from "@/ui/SectionHeader";
import { TaxiDivider } from "@/ui/TaxiDivider";
import {
  appUsageMetrics,
  appUsagePeriods,
  codingPlanMetrics,
} from "@/data/zcode/usageStats";

const appIcons = [
  Coins,
  Activity,
  Calendar,
  Flame,
  Clock,
  TrendingUp,
  Grid3X3,
  Trophy,
];

const planIcons = [
  CreditCard,
  Calendar,
  Hourglass,
  Cpu,
  Wrench,
];

export function UsageStatsSection() {
  const { theme } = useTheme();
  const th = (d: string, l: string) => (theme === "light" ? l : d);
  const [activePeriod, setActivePeriod] = useState(appUsagePeriods[1]);

  return (
    <section id="usage-stats">
      <SectionHeader
        num="20"
        title="Usage Stats"
        subtitle="Статистика использования"
      />

      {/* App Usage — tab-like section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
              <BarChart3 className="h-4 w-4 text-nyc-taxi" />
            </div>
            <h4 className="font-semibold text-sm">App Usage</h4>
          </div>

          {/* Period selector pills */}
          <div className={`flex gap-1 p-0.5 rounded-lg ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
            {appUsagePeriods.map((period) => (
              <button
                key={period}
                onClick={() => setActivePeriod(period)}
                className={`text-[10px] px-2 py-1 rounded-md font-medium transition-colors ${
                  activePeriod === period
                    ? th("bg-nyc-taxi/20 text-nyc-taxi", "bg-oklch(0.85 0.12 85) text-oklch(0.50 0.16 60)")
                    : th("text-white/40 hover:text-white/60", "text-oklch(0.50 0 0) hover:text-oklch(0.35 0 0)")
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Metric cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {appUsageMetrics.map((metric, i) => {
            const Icon = appIcons[i] || BarChart3;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className={`flex items-center gap-2.5 p-2.5 rounded-lg ${th("bg-white/5", "bg-oklch(0.95 0 0)")}`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${th("bg-nyc-taxi/10", "bg-oklch(0.93 0 0)")}`}>
                  <Icon className="h-3.5 w-3.5 text-nyc-taxi" />
                </div>
                <span className={`text-xs ${th("text-white/60", "text-oklch(0.40 0 0)")}`}>{metric}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Coding Plan */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className={`p-4 rounded-xl mb-6 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
            <CreditCard className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4 className="font-semibold text-sm">Coding Plan</h4>
        </div>

        <div className="space-y-2">
          {codingPlanMetrics.map((metric, i) => {
            const Icon = planIcons[i] || CreditCard;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`flex items-center gap-2.5 p-2.5 rounded-lg ${th("bg-white/5", "bg-oklch(0.95 0 0)")}`}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${th("bg-nyc-taxi/10", "bg-oklch(0.93 0 0)")}`}>
                  <Icon className="h-3.5 w-3.5 text-nyc-taxi" />
                </div>
                <span className={`text-xs ${th("text-white/60", "text-oklch(0.40 0 0)")}`}>{metric}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <TaxiDivider />
    </section>
  );
}