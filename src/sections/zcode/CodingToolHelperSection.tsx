"use client";

import {
  Terminal,
  Wrench,
  Box,
  Settings,
  HardDrive,
  Languages,
  Play,
  AlertTriangle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { SectionHeader } from "@/ui/SectionHeader";
import { TaxiDivider } from "@/ui/TaxiDivider";
import {
  cthDescription,
  supportedTools,
  cthCapabilities,
  quickStartSteps,
  cthCommands,
  troubleshooting,
} from "@/data/zcode/codingToolHelper";

const capIcons = [Terminal, Settings, Wrench, Box, HardDrive, Languages];
const npxCmd = "npx @z_ai/coding-helper";
const npmCmd = "npm install -g @z_ai/coding-helper";

export function CodingToolHelperSection() {
  const { theme } = useTheme();
  const th = (d: string, l: string) => (theme === "light" ? l : d);

  return (
    <section id="coding-tool-helper">
      <SectionHeader
        num="24"
        title="Coding Tool Helper"
        subtitle="Управление CLI-инструментами"
      />

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={["p-4 rounded-xl mb-4", th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")].join(" ")}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={["w-8 h-8 rounded-lg flex items-center justify-center", th("bg-nyc-taxi/15", "bg-oklch(0.95 0.08 85)")].join(" ")}>
            <Terminal className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4 className={["font-semibold text-sm", th("text-white/80", "text-oklch(0.30 0 0)")].join(" ")}>Что это</h4>
        </div>
        <p className={["text-xs leading-relaxed mb-2", th("text-white/70", "text-oklch(0.35 0 0)")].join(" ")}>
          {cthDescription.summary}
        </p>
        <p className={["text-xs leading-relaxed mb-3", th("text-white/60", "text-oklch(0.40 0 0)")].join(" ")}>
          {cthDescription.details}
        </p>
        <div className="flex gap-2 flex-wrap">
          <span className={["text-[10px] font-mono px-2 py-1 rounded", th("bg-black/30 text-green-400", "bg-emerald-50 text-emerald-700")].join(" ")}>
            {"npm: " + cthDescription.npmPackage}
          </span>
          <span className={["text-[10px] font-mono px-2 py-1 rounded", th("bg-black/30 text-green-400", "bg-emerald-50 text-emerald-700")].join(" ")}>
            {"Node.js >= v" + cthDescription.requirement.replace("Node.js >= ", "")}
          </span>
        </div>
      </motion.div>

      {/* Supported tools */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={["p-4 rounded-xl mb-4", th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")].join(" ")}
      >
        <h4 className={["font-semibold text-sm mb-3", th("text-white/80", "text-oklch(0.30 0 0)")].join(" ")}>Поддерживаемые инструменты</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {supportedTools.map((t, i) => (
            <div key={i} className={["flex items-center gap-2 px-3 py-2 rounded-lg", th("bg-white/5", "bg-oklch(0.95 0 0)")].join(" ")}>
              <Box className="h-3.5 w-3.5 text-nyc-taxi flex-shrink-0" />
              <div>
                <span className="text-xs font-medium text-nyc-taxi">{t.tool}</span>
                <p className={["text-[10px]", th("text-white/50", "text-oklch(0.45 0 0)")].join(" ")}>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Capabilities */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={["p-4 rounded-xl mb-4", th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")].join(" ")}
      >
        <h4 className={["font-semibold text-sm mb-3", th("text-white/80", "text-oklch(0.30 0 0)")].join(" ")}>Ключевые возможности</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {cthCapabilities.map((c, i) => {
            const Icon = capIcons[i] || Terminal;
            return (
              <div key={i} className={["p-3 rounded-lg", th("bg-white/5", "bg-oklch(0.95 0 0)")].join(" ")}>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className={["w-6 h-6 rounded-md flex items-center justify-center", th("bg-nyc-taxi/20 text-nyc-taxi", "bg-oklch(0.93 0 0) text-oklch(0.78 0.16 85)")].join(" ")}>
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-nyc-taxi">{c.title}</span>
                </div>
                <p className={["text-[11px]", th("text-white/55", "text-oklch(0.42 0 0)")].join(" ")}>{c.desc}</p>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Quick start */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={["p-4 rounded-xl mb-4", th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")].join(" ")}
      >
        <div className="flex items-center gap-2 mb-3">
          <Play className="h-4 w-4 text-nyc-taxi" />
          <h4 className={["font-semibold text-sm", th("text-white/80", "text-oklch(0.30 0 0)")].join(" ")}>Быстрый старт</h4>
        </div>
        <div className="space-y-2">
          {quickStartSteps.map((s, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className={["w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium flex-shrink-0 mt-0.5", th("bg-nyc-taxi/20 text-nyc-taxi", "bg-oklch(0.93 0 0) text-oklch(0.78 0.16 85)")].join(" ")}>
                {i + 1}
              </span>
              <div>
                <span className={["text-xs font-medium", th("text-white/80", "text-oklch(0.30 0 0)")].join(" ")}>{s.phase}</span>
                <p className={["text-[11px] leading-relaxed", th("text-white/55", "text-oklch(0.42 0 0)")].join(" ")}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Code snippets */}
        <div className="mt-3 space-y-2">
          <div className={["px-3 py-2 rounded-lg", th("bg-black/30", "bg-emerald-50")].join(" ")}>
            <p className={["text-[10px] font-mono mb-1", th("text-green-400/70", "text-emerald-600")].join(" ")}>{"npx (рекомендуется)"}</p>
            <p className={["text-[11px] font-mono", th("text-white/70", "text-oklch(0.35 0 0)")].join(" ")}>{npxCmd}</p>
          </div>
          <div className={["px-3 py-2 rounded-lg", th("bg-black/30", "bg-emerald-50")].join(" ")}>
            <p className={["text-[10px] font-mono mb-1", th("text-green-400/70", "text-emerald-600")].join(" ")}>{"Глобальная установка"}</p>
            <p className={["text-[11px] font-mono", th("text-white/70", "text-oklch(0.35 0 0)")].join(" ")}>{npmCmd}</p>
            <p className={["text-[11px] font-mono", th("text-white/70", "text-oklch(0.35 0 0)")].join(" ")}>{"chelper"}</p>
          </div>
        </div>
      </motion.div>

      {/* Commands reference */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={["p-4 rounded-xl mb-4", th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")].join(" ")}
      >
        <h4 className={["font-semibold text-sm mb-3", th("text-white/80", "text-oklch(0.30 0 0)")].join(" ")}>Команды</h4>
        <div className="space-y-1.5">
          {cthCommands.map((c, i) => (
            <div key={i} className={["flex items-center justify-between px-3 py-2 rounded-lg", th("bg-white/[0.03]", "bg-oklch(0.95 0 0)")].join(" ")}>
              <span className={["text-[11px] font-mono", th("text-nyc-taxi", "text-oklch(0.50 0.18 60)")].join(" ")}>{c.cmd}</span>
              <span className={["text-[10px] text-right max-w-[60%]", th("text-white/50", "text-oklch(0.45 0 0)")].join(" ")}>{c.desc}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Troubleshooting */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={["p-4 rounded-xl mb-6", th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")].join(" ")}
      >
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="h-4 w-4 text-amber-400" />
          <h4 className={["font-semibold text-sm", th("text-white/80", "text-oklch(0.30 0 0)")].join(" ")}>Решение проблем</h4>
        </div>
        <div className="space-y-3">
          {troubleshooting.map((t, i) => (
            <div key={i} className={["p-3 rounded-lg", th("bg-white/[0.03]", "bg-oklch(0.95 0 0)")].join(" ")}>
              <p className="text-xs font-medium text-amber-400 mb-1">{t.problem}</p>
              <p className={["text-[11px] leading-relaxed", th("text-white/55", "text-oklch(0.42 0 0)")].join(" ")}>{t.solution}</p>
            </div>
          ))}
        </div>
        <p className={["text-[10px] mt-3 leading-relaxed", th("text-white/40", "text-oklch(0.50 0 0)")].join(" ")}>
          {"При возникновении неполадок сначала запустите "}
          <span className="font-mono text-nyc-taxi">{"coding-helper doctor"}</span>
          {" для диагностики."}
        </p>
      </motion.div>

      <TaxiDivider />
    </section>
  );
}
