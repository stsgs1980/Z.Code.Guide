"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { SectionHeader } from "@/ui/SectionHeader";
import { TaxiDivider } from "@/ui/TaxiDivider";
import { newFeatures30 } from "@/data/zcode/newFeatures";

export function NewFeaturesSection() {
  const { theme } = useTheme();
  const th = (d: string, l: string) => (theme === "light" ? l : d);

  return (
    <motion.div
      id="new-features"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader
        num="21"
        title="Новое в 3.0"
        subtitle="Ключевые нововведения ZCode 3.0"
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
          <Sparkles className="h-4.5 w-4.5 text-nyc-taxi" />
        </div>
        <p
          className={`text-xs leading-relaxed ${th(
            "text-white/70",
            "text-oklch(0.35 0 0)"
          )}`}
        >
          ZCode 3.0 — крупнейшее обновление с собственным Agent-ядром, GLM-оптимизацией и полностью переработанным интерфейсом.
        </p>
      </motion.div>

      {/* Feature cards — vertical stack with left accent border */}
      <div className="space-y-3 mb-6">
        {newFeatures30.map((feature, i) => (
          <motion.div
            key={feature.num}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className={`rounded-xl overflow-hidden ${th(
              "nyc-card-enhanced",
              "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)"
            )}`}
          >
            {/* Left accent + content */}
            <div className="flex">
              {/* Accent bar */}
              <div className="w-1 bg-nyc-taxi flex-shrink-0" />

              {/* Card body */}
              <div className="flex-1 p-4">
                {/* Header row */}
                <div className="flex items-center gap-2.5 mb-2">
                  <span
                    className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md ${th(
                      "bg-nyc-taxi/15 text-nyc-taxi",
                      "bg-oklch(0.93 0.06 85) text-oklch(0.55 0.18 60)"
                    )}`}
                  >
                    {feature.num}
                  </span>
                  <h4 className="font-semibold text-sm leading-tight">
                    {feature.title}
                  </h4>
                </div>

                {/* Description */}
                <p
                  className={`text-xs mb-3 ${th(
                    "text-white/50",
                    "text-oklch(0.45 0 0)"
                  )}`}
                >
                  {feature.desc}
                </p>

                {/* Feature bullets */}
                <ul className="space-y-1.5">
                  {feature.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-nyc-taxi flex-shrink-0 mt-[5px]" />
                      <span
                        className={`text-xs ${th(
                          "text-white/65",
                          "text-oklch(0.35 0 0)"
                        )}`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <TaxiDivider />
    </motion.div>
  );
}