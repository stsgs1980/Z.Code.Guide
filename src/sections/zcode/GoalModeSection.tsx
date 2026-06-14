"use client";

import {
  Target,
  ListOrdered,
  Terminal,
  Lightbulb,
  Activity,
  CircleDot,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { SectionHeader } from "@/ui/SectionHeader";
import { TaxiDivider } from "@/ui/TaxiDivider";
import {
  goalModeWhenToUse,
  goalModeHowItWorks,
  goalModeCommands,
  goalModeTips,
  goalModeWhatHappens,
} from "@/data/zcode/goalMode";

export function GoalModeSection() {
  const { theme } = useTheme();
  const th = (d: string, l: string) => (theme === "light" ? l : d);

  return (
    <section id="goal-mode">
      <SectionHeader
        num="16"
        title="Goal Mode"
        subtitle="Режим целей для сложных задач"
      />

      {/* Section 1: Когда использовать */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
            <Target className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4 className={`font-semibold text-sm ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>
            Когда использовать
          </h4>
        </div>

        <div className="space-y-2">
          {goalModeWhenToUse.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-2.5 p-2.5 rounded-lg ${th(
                "bg-white/5",
                "bg-oklch(0.95 0 0)"
              )}`}
            >
              <CircleDot className="h-3.5 w-3.5 text-nyc-taxi flex-shrink-0 mt-0.5" />
              <p className={`text-xs leading-relaxed ${th("text-white/70", "text-oklch(0.35 0 0)")}`}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Section 2: Как работает — numbered steps */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
            <ListOrdered className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4 className={`font-semibold text-sm ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>
            Как работает
          </h4>
        </div>

        <div className="space-y-2">
          {goalModeHowItWorks.map((s) => (
            <div key={s.step} className="flex items-start gap-2">
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium flex-shrink-0 mt-0.5 ${th(
                  "bg-nyc-taxi/20 text-nyc-taxi",
                  "bg-oklch(0.93 0 0) text-oklch(0.78 0.16 85)"
                )}`}
              >
                {s.step}
              </span>
              <p className={`text-xs leading-relaxed ${th("text-white/70", "text-oklch(0.35 0 0)")}`}>
                {s.action}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Section 3: Commands table */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
            <Terminal className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4 className={`font-semibold text-sm ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>
            Команды
          </h4>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className={`border-b ${th("border-white/10", "border-oklch(0.88 0 0)")}`}>
                <th className={`text-left py-2 pr-4 font-medium ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>
                  Команда
                </th>
                <th className={`text-left py-2 font-medium ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>
                  Описание
                </th>
              </tr>
            </thead>
            <tbody>
              {goalModeCommands.map((c, i) => (
                <tr
                  key={i}
                  className={`border-b last:border-b-0 ${th("border-white/5", "border-oklch(0.92 0 0)")}`}
                >
                  <td className="py-2.5 pr-4 whitespace-nowrap">
                    <code
                      className={`px-2 py-0.5 rounded text-[10px] font-mono ${th(
                        "bg-white/10 text-nyc-taxi",
                        "bg-oklch(0.93 0 0) text-nyc-taxi"
                      )}`}
                    >
                      {c.cmd}
                    </code>
                  </td>
                  <td className={`py-2.5 ${th("text-white/70", "text-oklch(0.35 0 0)")}`}>
                    {c.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-2">
          {goalModeCommands.map((c, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg ${th("bg-white/5", "bg-oklch(0.95 0 0)")}`}
            >
              <code
                className={`text-[10px] font-mono px-2 py-0.5 rounded ${th(
                  "bg-white/10 text-nyc-taxi",
                  "bg-oklch(0.93 0 0) text-nyc-taxi"
                )}`}
              >
                {c.cmd}
              </code>
              <p className={`text-xs mt-1.5 ${th("text-white/70", "text-oklch(0.35 0 0)")}`}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Section 4: Tips */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
            <Lightbulb className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4 className={`font-semibold text-sm ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>
            Советы
          </h4>
        </div>

        <div
          className={`p-3 rounded-lg ${th(
            "bg-nyc-taxi/5 border border-nyc-taxi/20",
            "bg-amber-50/80 border border-amber-300/50"
          )}`}
        >
          <ul className="space-y-2">
            {goalModeTips.map((tip, i) => {
              const isGood = tip.startsWith("Хорошо");
              const isBad = tip.startsWith("Плохо");
              return (
                <li key={i} className="flex items-start gap-2">
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${
                      isGood
                        ? "bg-green-500"
                        : isBad
                        ? "bg-red-500"
                        : "bg-nyc-taxi"
                    }`}
                  />
                  <p
                    className={`text-xs leading-relaxed ${
                      isGood
                        ? th("text-green-400", "text-green-700")
                        : isBad
                        ? th("text-red-400", "text-red-700")
                        : th("text-white/80", "text-oklch(0.30 0 0)")
                    }`}
                  >
                    {tip}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>

      {/* Section 5: Что происходит */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-6 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
            <Activity className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4 className={`font-semibold text-sm ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>
            Что происходит
          </h4>
        </div>

        <div className="space-y-2">
          {goalModeWhatHappens.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-2.5 p-2.5 rounded-lg ${th(
                "bg-white/5",
                "bg-oklch(0.95 0 0)"
              )}`}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium flex-shrink-0 mt-0.5 ${th(
                  "bg-nyc-taxi/20 text-nyc-taxi",
                  "bg-oklch(0.93 0 0) text-oklch(0.78 0.16 85)"
                )}`}
              >
                {i + 1}
              </span>
              <p className={`text-xs leading-relaxed ${th("text-white/70", "text-oklch(0.35 0 0)")}`}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <TaxiDivider />
    </section>
  );
}