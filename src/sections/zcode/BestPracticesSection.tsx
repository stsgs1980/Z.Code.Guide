"use client";

import { Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { SectionHeader } from "@/ui/SectionHeader";
import { TaxiDivider } from "@/ui/TaxiDivider";
import { bestPractices30 } from "@/data/zcode/bestPractices";

export function BestPracticesSection() {
  const { theme } = useTheme();
  const th = (d: string, l: string) => (theme === "light" ? l : d);

  return (
    <motion.div
      id="best-practices"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader
        num="22"
        title="Лучшие практики"
        subtitle="Работа с Coding Agent"
      />

      {/* Intro card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-6 flex items-center gap-3 ${th(
          "nyc-card-enhanced",
          "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)"
        )}`}
      >
        <div
          className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${th(
            "bg-nyc-taxi/15",
            "bg-oklch(0.95 0.08 85)"
          )}`}
        >
          <Lightbulb className="h-4.5 w-4.5 text-nyc-taxi" />
        </div>
        <p
          className={`text-xs leading-relaxed ${th(
            "text-white/70",
            "text-oklch(0.35 0 0)"
          )}`}
        >
          10 принципов, которые помогут максимально эффективно использовать Coding Agent в повседневной разработке.
        </p>
      </motion.div>

      {/* Practice cards — numbered, alternating backgrounds */}
      <div className="space-y-3 mb-6">
        {bestPractices30.map((practice, i) => {
          const isEven = i % 2 === 1;
          return (
            <motion.div
              key={practice.num}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`rounded-xl p-4 ${th(
                isEven
                  ? "bg-white/[0.02]"
                  : "nyc-card-enhanced",
                isEven
                  ? "border border-oklch(0.88 0 0) bg-oklch(0.95 0 0)"
                  : "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)"
              )}`}
            >
              {/* Number badge + Principle heading */}
              <div className="flex items-start gap-3 mb-2">
                <span
                  className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg flex-shrink-0 ${th(
                    "bg-nyc-taxi/15 text-nyc-taxi",
                    "bg-oklch(0.93 0.06 85) text-oklch(0.55 0.18 60)"
                  )}`}
                >
                  #{practice.num}
                </span>
                <h4 className="font-semibold text-sm leading-snug pt-0.5">
                  {practice.principle}
                </h4>
              </div>

              {/* Description */}
              <p
                className={`text-xs leading-relaxed mb-3 ml-[52px] ${th(
                  "text-white/60",
                  "text-oklch(0.40 0 0)"
                )}`}
              >
                {practice.description}
              </p>

              {/* Detail bullets */}
              <ul className="space-y-1.5 ml-[52px]">
                {practice.details.map((detail, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[5px] ${th(
                        "bg-nyc-taxi/60",
                        "bg-oklch(0.70 0.12 60)"
                      )}`}
                    />
                    <span
                      className={`text-xs leading-relaxed ${th(
                        "text-white/55",
                        "text-oklch(0.38 0 0)"
                      )}`}
                    >
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <TaxiDivider />
    </motion.div>
  );
}