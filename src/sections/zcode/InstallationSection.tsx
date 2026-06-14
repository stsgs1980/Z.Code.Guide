"use client";

import { Download, Monitor, Terminal, Apple } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { SectionHeader } from "@/ui/SectionHeader";
import { TaxiDivider } from "@/ui/TaxiDivider";
import {
  downloadInfo,
  installSteps,
  verificationTip,
} from "@/data/zcode/installation";

const platformIcons: Record<string, React.ElementType> = {
  windows: Monitor,
  macos: Apple,
  linux: Terminal,
};

const platformLabels: Record<string, string> = {
  windows: "Windows",
  macos: "macOS",
  linux: "Linux",
};

export function InstallationSection() {
  const { theme } = useTheme();
  const th = (d: string, l: string) => (theme === "light" ? l : d);

  return (
    <section id="installation">
      <SectionHeader
        num="02"
        title="Установка и первый запуск"
        subtitle="Быстрый старт с ZCode"
      />

      {/* Download card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-4 ${th(
          "nyc-card-enhanced",
          "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)"
        )}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center ${th(
              "bg-nyc-taxi/15",
              "bg-oklch(0.95 0.08 85)"
            )}`}
          >
            <Download className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4
            className={`font-semibold text-sm ${th(
              "text-white/80",
              "text-oklch(0.30 0 0)"
            )}`}
          >
            Скачивание
          </h4>
        </div>

        <p
          className={`text-xs leading-relaxed mb-3 ${th(
            "text-white/70",
            "text-oklch(0.35 0 0)"
          )}`}
        >
          Перейдите на{" "}
          <span className="text-nyc-taxi font-medium">
            {downloadInfo.siteUrl}
          </span>{" "}
          и нажмите <span className="font-medium">Download</span>. Текущая
          версия:{" "}
          <span
            className={`font-mono text-[11px] px-1.5 py-0.5 rounded ${th(
              "bg-nyc-taxi/15 text-nyc-taxi",
              "bg-oklch(0.93 0.06 85) text-oklch(0.50 0.18 60)"
            )}`}
          >
            v{downloadInfo.currentVersion}
          </span>
        </p>

        {/* Platform table */}
        <div className="space-y-1.5">
          {downloadInfo.platforms.map((p, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-3 py-2 rounded-lg ${th(
                "bg-white/[0.03]",
                "bg-oklch(0.95 0 0)"
              )}`}
            >
              <span
                className={`text-xs font-medium ${th(
                  "text-white/70",
                  "text-oklch(0.30 0 0)"
                )}`}
              >
                {p.platform}
              </span>
              <span
                className={`text-[10px] font-mono ${th(
                  "text-white/40",
                  "text-oklch(0.50 0 0)"
                )}`}
              >
                {p.format}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Install steps per platform */}
      {(["macos", "windows", "linux"] as const).map((platform) => {
        const Icon = platformIcons[platform];
        const steps = installSteps[platform];
        return (
          <motion.div
            key={platform}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-4 rounded-xl mb-4 ${th(
              "nyc-card-enhanced",
              "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)"
            )}`}
          >
            <div className="flex items-center gap-2 mb-3">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center ${th(
                  "bg-white/5",
                  "bg-oklch(0.93 0 0)"
                )}`}
              >
                <Icon className="h-4 w-4 text-nyc-taxi" />
              </div>
              <h4
                className={`font-semibold text-sm ${th(
                  "text-white/80",
                  "text-oklch(0.30 0 0)"
                )}`}
              >
                {platformLabels[platform]}
              </h4>
            </div>

            <div className="space-y-2">
              {steps.map((s) => (
                <div key={s.step} className="flex items-start gap-2">
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium flex-shrink-0 mt-0.5 ${th(
                      "bg-nyc-taxi/20 text-nyc-taxi",
                      "bg-oklch(0.93 0 0) text-oklch(0.78 0.16 85)"
                    )}`}
                  >
                    {s.step}
                  </span>
                  <p
                    className={`text-xs leading-relaxed ${th(
                      "text-white/70",
                      "text-oklch(0.35 0 0)"
                    )}`}
                  >
                    {s.action}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        );
      })}

      {/* Verification tip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-6 ${th(
          "nyc-card-enhanced",
          "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)"
        )}`}
      >
        <div className="flex items-center gap-2 mb-2">
          <div
            className={`w-2 h-2 rounded-full bg-green-400 ${th(
              "",
              ""
            )}`}
          />
          <h4
            className={`font-semibold text-sm ${th(
              "text-white/80",
              "text-oklch(0.30 0 0)"
            )}`}
          >
            Проверка установки
          </h4>
        </div>
        <p
          className={`text-xs leading-relaxed ${th(
            "text-white/70",
            "text-oklch(0.35 0 0)"
          )}`}
        >
          {verificationTip}
        </p>
      </motion.div>

      <TaxiDivider />
    </section>
  );
}