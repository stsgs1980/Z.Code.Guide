"use client";

import { History, Calendar, Sparkles, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { SectionHeader } from "@/ui/SectionHeader";
import { TaxiDivider } from "@/ui/TaxiDivider";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { changelogEntries, evolutionSummary } from "@/data/zcode/changelog";

export function ChangelogSection() {
  const { theme } = useTheme();
  const th = (d: string, l: string) => (theme === "light" ? l : d);

  const v300 = changelogEntries.filter((e) => e.version.startsWith("3."));
  const older = changelogEntries.filter((e) => !e.version.startsWith("3."));

  return (
    <motion.div
      id="changelog"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader
        num="24"
        title="История релизов"
        subtitle="ZCode — все обновления"
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
          <History className="h-4.5 w-4.5 text-nyc-taxi" />
        </div>
        <p
          className={`text-xs leading-relaxed ${th(
            "text-white/70",
            "text-oklch(0.35 0 0)"
          )}`}
        >
          Хронология всех версий ZCode — от ранних итераций до крупного обновления 3.0.
        </p>
      </motion.div>

      {/* === 3.0.x entries — expanded by default === */}
      <div className="space-y-4 mb-6">
        {v300.map((entry, i) => (
          <motion.div
            key={entry.version}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className={`rounded-xl p-4 ${th(
              "nyc-card-enhanced",
              "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)"
            )}`}
          >
            {/* Version badge + date */}
            <div className="flex items-center gap-3 mb-1">
              <span
                className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md ${th(
                  "bg-nyc-taxi/15 text-nyc-taxi border border-nyc-taxi/20",
                  "bg-oklch(0.93 0.06 85) text-oklch(0.50 0.18 60) border border-oklch(0.88 0.04 85)"
                )}`}
              >
                v{entry.version}
              </span>
              <span
                className={`flex items-center gap-1 text-[10px] ${th(
                  "text-white/40",
                  "text-oklch(0.55 0 0)"
                )}`}
              >
                <Calendar className="h-3 w-3" />
                {entry.date}
              </span>
            </div>

            {/* Headline */}
            {entry.headline && (
              <p className="text-xs font-semibold text-nyc-taxi mb-3">
                {entry.headline}
              </p>
            )}

            {/* Новое */}
            {entry.newFeatures.length > 0 && (
              <div className="mb-3">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Sparkles className="h-3 w-3 text-green-400" />
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider ${th(
                      "text-white/40",
                      "text-oklch(0.50 0 0)"
                    )}`}
                  >
                    Новое
                  </span>
                </div>
                <ul className="space-y-1">
                  {entry.newFeatures.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0 mt-[5px]" />
                      <span
                        className={`text-xs leading-relaxed ${th(
                          "text-white/60",
                          "text-oklch(0.38 0 0)"
                        )}`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Исправления */}
            {entry.fixes.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Wrench className={`h-3 w-3 ${th("text-white/30", "text-oklch(0.60 0 0)")}`} />
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider ${th(
                      "text-white/30",
                      "text-oklch(0.55 0 0)"
                    )}`}
                  >
                    Исправления
                  </span>
                </div>
                <ul className="space-y-1">
                  {entry.fixes.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[5px] ${th(
                          "bg-white/25",
                          "bg-oklch(0.72 0 0)"
                        )}`}
                      />
                      <span
                        className={`text-xs leading-relaxed ${th(
                          "text-white/45",
                          "text-oklch(0.45 0 0)"
                        )}`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* === Older versions — accordion, collapsed by default === */}
      <div className="mb-6">
        <Accordion type="multiple" className="w-full">
          <AccordionItem
            value="older-versions"
            className={`rounded-xl overflow-hidden border-0 ${th(
              "nyc-card-enhanced",
              "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)"
            )}`}
          >
            <AccordionTrigger
              className={`px-4 text-xs font-semibold hover:no-underline ${th(
                "text-white/60",
                "text-oklch(0.40 0 0)"
              )}`}
            >
              Ранние версии (2.7 — 2.13)
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <div className="space-y-4">
                {older.map((entry) => (
                  <div
                    key={entry.version}
                    className={`rounded-lg p-3 ${th(
                      "bg-white/[0.02]",
                      "bg-oklch(0.95 0 0)"
                    )}`}
                  >
                    {/* Version + date */}
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${th(
                          "bg-white/5 text-white/60",
                          "bg-oklch(0.92 0 0) text-oklch(0.40 0 0)"
                        )}`}
                      >
                        v{entry.version}
                      </span>
                      <span
                        className={`flex items-center gap-1 text-[10px] ${th(
                          "text-white/30",
                          "text-oklch(0.55 0 0)"
                        )}`}
                      >
                        <Calendar className="h-2.5 w-2.5" />
                        {entry.date}
                      </span>
                    </div>

                    {/* Новое */}
                    {entry.newFeatures.length > 0 && (
                      <div className="mb-2">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Sparkles className="h-2.5 w-2.5 text-green-400" />
                          <span
                            className={`text-[9px] font-bold uppercase tracking-wider ${th(
                              "text-white/35",
                              "text-oklch(0.50 0 0)"
                            )}`}
                          >
                            Новое
                          </span>
                        </div>
                        <ul className="space-y-0.5">
                          {entry.newFeatures.map((f, j) => (
                            <li key={j} className="flex items-start gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-green-400 flex-shrink-0 mt-[5px]" />
                              <span
                                className={`text-[11px] leading-relaxed ${th(
                                  "text-white/50",
                                  "text-oklch(0.40 0 0)"
                                )}`}
                              >
                                {f}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Исправления */}
                    {entry.fixes.length > 0 && (
                      <div>
                        <div className="flex items-center gap-1.5 mb-1">
                          <Wrench className={`h-2.5 w-2.5 ${th("text-white/25", "text-oklch(0.60 0 0)")}`} />
                          <span
                            className={`text-[9px] font-bold uppercase tracking-wider ${th(
                              "text-white/25",
                              "text-oklch(0.55 0 0)"
                            )}`}
                          >
                            Исправления
                          </span>
                        </div>
                        <ul className="space-y-0.5">
                          {entry.fixes.map((f, j) => (
                            <li key={j} className="flex items-start gap-1.5">
                              <span
                                className={`w-1 h-1 rounded-full flex-shrink-0 mt-[5px] ${th(
                                  "bg-white/20",
                                  "bg-oklch(0.72 0 0)"
                                )}`}
                              />
                              <span
                                className={`text-[11px] leading-relaxed ${th(
                                  "text-white/40",
                                  "text-oklch(0.45 0 0)"
                                )}`}
                              >
                                {f}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* === Evolution Summary Table === */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`rounded-xl overflow-hidden mb-6 ${th(
          "nyc-card-enhanced",
          "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)"
        )}`}
      >
        <div className="p-4 pb-2">
          <h4
            className={`text-xs font-bold uppercase tracking-wider mb-1 ${th(
              "text-white/40",
              "text-oklch(0.50 0 0)"
            )}`}
          >
            Общая картина
          </h4>
        </div>

        {/* Table */}
        <div className="px-4 pb-4">
          <table className="w-full text-xs">
            <thead>
              <tr
                className={`border-b ${th(
                  "border-white/[0.06]",
                  "border-oklch(0.90 0 0)"
                )}`}
              >
                <th
                  className={`text-left py-2 pr-4 font-semibold text-[10px] uppercase tracking-wider ${th(
                    "text-white/40",
                    "text-oklch(0.50 0 0)"
                  )}`}
                >
                  Период
                </th>
                <th
                  className={`text-left py-2 font-semibold text-[10px] uppercase tracking-wider ${th(
                    "text-white/40",
                    "text-oklch(0.50 0 0)"
                  )}`}
                >
                  Фокус
                </th>
              </tr>
            </thead>
            <tbody>
              {evolutionSummary.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b last:border-b-0 ${th(
                    "border-white/[0.04]",
                    "border-oklch(0.93 0 0)"
                  )}`}
                >
                  <td className="py-2.5 pr-4">
                    <span
                      className={`font-mono text-[11px] font-medium ${th(
                        "text-nyc-taxi",
                        "text-oklch(0.50 0.18 60)"
                      )}`}
                    >
                      {row.period}
                    </span>
                  </td>
                  <td
                    className={`py-2.5 text-xs ${th(
                      "text-white/60",
                      "text-oklch(0.38 0 0)"
                    )}`}
                  >
                    {row.focus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <TaxiDivider />
    </motion.div>
  );
}