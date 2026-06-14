"use client";

import { Layout, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { SectionHeader } from "@/ui/SectionHeader";
import { TaxiDivider } from "@/ui/TaxiDivider";
import { interfaceElements, workspaceLayout } from "@/data/zcode/interface";

export function InterfaceSection() {
  const { theme } = useTheme();
  const th = (d: string, l: string) => (theme === "light" ? l : d);

  return (
    <section id="interface">
      <SectionHeader
        num="13"
        title="Интерфейс"
        subtitle="Что где находится в ZCode"
      />

      {/* Workspace Layout Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
            <Layout className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4 className={`font-semibold text-sm ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>
            Расположение элементов
          </h4>
        </div>
        <p className={`text-xs leading-relaxed mb-4 ${th("text-white/70", "text-oklch(0.35 0 0)")}`}>
          ZCode организован вокруг чата с Agent. Вот как выглядит рабочее пространство:
        </p>

        {/* Terminal-style code block */}
        <div className={`rounded-lg overflow-hidden border ${th("border-white/10", "border-oklch(0.88 0 0)")}`}>
          <div className={`flex items-center gap-1.5 px-3 py-2 ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            <span className={`text-[10px] ml-2 font-mono ${th("text-white/40", "text-oklch(0.50 0 0)")}`}>
              workspace-layout
            </span>
          </div>
          <div className={`p-3 overflow-x-auto ${th("bg-black/30", "bg-oklch(0.16 0 0)")}`}>
            <pre className="text-[10px] sm:text-xs font-mono leading-relaxed whitespace-pre">
              <code className="text-nyc-taxi">{workspaceLayout}</code>
            </pre>
          </div>
        </div>
      </motion.div>

      {/* Interface Elements Table (desktop) + Card Grid (mobile) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-6 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
            <Monitor className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4 className={`font-semibold text-sm ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>
            Элементы интерфейса
          </h4>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className={`border-b ${th("border-white/10", "border-oklch(0.88 0 0)")}`}>
                <th className={`text-left py-2 pr-4 font-medium ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>
                  Элемент
                </th>
                <th className={`text-left py-2 pr-4 font-medium ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>
                  Расположение
                </th>
                <th className={`text-left py-2 font-medium ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>
                  Описание
                </th>
              </tr>
            </thead>
            <tbody>
              {interfaceElements.map((item, i) => (
                <tr
                  key={i}
                  className={`border-b last:border-b-0 ${th("border-white/5", "border-oklch(0.92 0 0)")}`}
                >
                  <td className={`py-2.5 pr-4 font-medium text-nyc-taxi whitespace-nowrap`}>
                    {item.element}
                  </td>
                  <td className={`py-2.5 pr-4 whitespace-nowrap ${th("text-white/60", "text-oklch(0.40 0 0)")}`}>
                    {item.location}
                  </td>
                  <td className={`py-2.5 ${th("text-white/70", "text-oklch(0.35 0 0)")}`}>
                    {item.desc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile card grid */}
        <div className="md:hidden space-y-2">
          {interfaceElements.map((item, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg ${th("bg-white/5", "bg-oklch(0.95 0 0)")}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-nyc-taxi">
                  {item.element}
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${th("bg-white/10 text-white/60", "bg-oklch(0.90 0 0) text-oklch(0.45 0 0)")}`}>
                  {item.location}
                </span>
              </div>
              <p className={`text-xs ${th("text-white/70", "text-oklch(0.35 0 0)")}`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <TaxiDivider />
    </section>
  );
}