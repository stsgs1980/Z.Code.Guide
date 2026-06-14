"use client";

import { Key, Globe, Server, ChevronRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { SectionHeader } from "@/ui/SectionHeader";
import { TaxiDivider } from "@/ui/TaxiDivider";
import {
  providerTypes,
  setupEntryPoints,
  bigModelSteps,
  bigModelApiInfo,
  zaiInfo,
  thirdPartyProviders,
  thirdPartySetupSteps,
} from "@/data/zcode/apiKeysSetup";

export function ApiKeysSetupSection() {
  const { theme } = useTheme();
  const th = (d: string, l: string) => (theme === "light" ? l : d);

  return (
    <section id="api-keys">
      <SectionHeader
        num="03"
        title="API Key Setup"
        subtitle="Подключение AI-моделей"
      />

      {/* Provider types */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-nyc-taxi/15", "bg-oklch(0.95 0.08 85)")}`}>
            <Key className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4 className={`font-semibold text-sm ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>
            Три способа подключения
          </h4>
        </div>
        <div className="space-y-2">
          {providerTypes.map((p, i) => (
            <div key={i} className={`p-3 rounded-lg ${th("bg-white/5", "bg-oklch(0.95 0 0)")}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-nyc-taxi">{p.name}</span>
                {p.recommended && (
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${th("bg-nyc-taxi/15 text-nyc-taxi", "bg-oklch(0.93 0.06 85) text-oklch(0.50 0.18 60)")}`}>
                    {p.recommended}
                  </span>
                )}
              </div>
              <p className={`text-xs leading-relaxed ${th("text-white/60", "text-oklch(0.40 0 0)")}`}>{p.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Entry points */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
            <Globe className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4 className={`font-semibold text-sm ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>Точки входа для настройки</h4>
        </div>
        <div className="space-y-2">
          {setupEntryPoints.map((ep, i) => (
            <div key={i} className="flex items-start gap-2">
              <ChevronRight className="h-3.5 w-3.5 text-nyc-taxi flex-shrink-0 mt-0.5" />
              <div>
                <span className={`text-xs font-medium ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>{ep.method}</span>
                <p className={`text-[11px] leading-relaxed ${th("text-white/55", "text-oklch(0.42 0 0)")}`}>{ep.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* BigModel setup */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <h4 className={`font-semibold text-sm mb-3 ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>Подключение BigModel</h4>
        <div className="space-y-2 mb-3">
          {bigModelSteps.map((s) => (
            <div key={s.step} className="flex items-start gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium flex-shrink-0 mt-0.5 ${th("bg-nyc-taxi/20 text-nyc-taxi", "bg-oklch(0.93 0 0) text-oklch(0.78 0.16 85)")}`}>
                {s.step}
              </span>
              <p className={`text-xs leading-relaxed ${th("text-white/70", "text-oklch(0.35 0 0)")}`}>{s.action}</p>
            </div>
          ))}
        </div>
        <div className={`px-3 py-2 rounded-lg ${th("bg-black/30", "bg-oklch(0.95 0.015 150)")}`}>
          <p className={`text-[10px] font-mono mb-1 ${th("text-green-400", "text-oklch(0.40 0.12 150)")}`}>Base URL</p>
          <p className={`text-[11px] font-mono ${th("text-white/60", "text-oklch(0.35 0 0)")}`}>{bigModelApiInfo.baseUrl}</p>
          <p className={`text-[10px] font-mono mb-1 mt-2 ${th("text-green-400", "text-oklch(0.40 0.12 150)")}`}>Модели</p>
          <p className={`text-[11px] font-mono ${th("text-white/60", "text-oklch(0.35 0 0)")}`}>{bigModelApiInfo.models}</p>
        </div>
        <p className={`text-[10px] leading-relaxed mt-2 ${th("text-white/45", "text-oklch(0.50 0 0)")}`}>{bigModelApiInfo.trialNote}</p>
      </motion.div>

      {/* Z.AI setup */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <h4 className={`font-semibold text-sm mb-3 ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>Подключение Z.AI</h4>
        <div className="space-y-2 mb-3">
          {zaiInfo.setupSteps.map((s, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium flex-shrink-0 mt-0.5 ${th("bg-nyc-taxi/20 text-nyc-taxi", "bg-oklch(0.93 0 0) text-oklch(0.78 0.16 85)")}`}>
                {i + 1}
              </span>
              <p className={`text-xs leading-relaxed ${th("text-white/70", "text-oklch(0.35 0 0)")}`}>{s}</p>
            </div>
          ))}
        </div>
        <div className={`px-3 py-2 rounded-lg ${th("bg-black/30", "bg-oklch(0.95 0.015 150)")}`}>
          <p className={`text-[10px] font-mono mb-1 ${th("text-green-400", "text-oklch(0.40 0.12 150)")}`}>Base URL</p>
          <p className={`text-[11px] font-mono ${th("text-white/60", "text-oklch(0.35 0 0)")}`}>{zaiInfo.baseUrl}</p>
        </div>
      </motion.div>

      {/* Third-party providers table */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`rounded-xl overflow-hidden mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="p-4 pb-2">
          <div className="flex items-center gap-2 mb-1">
            <Server className="h-4 w-4 text-nyc-taxi" />
            <h4 className={`font-semibold text-sm ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>Сторонние провайдеры</h4>
          </div>
        </div>
        <div className="px-4 pb-3 overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className={`border-b ${th("border-white/[0.06]", "border-oklch(0.90 0 0)")}`}>
                <th className={`text-left py-2 pr-3 font-semibold text-[10px] uppercase tracking-wider ${th("text-white/40", "text-oklch(0.50 0 0)")}`}>Провайдер</th>
                <th className={`text-left py-2 pr-3 font-semibold text-[10px] uppercase tracking-wider ${th("text-white/40", "text-oklch(0.50 0 0)")}`}>Base URL</th>
                <th className={`text-left py-2 font-semibold text-[10px] uppercase tracking-wider ${th("text-white/40", "text-oklch(0.50 0 0)")}`}>Модели</th>
              </tr>
            </thead>
            <tbody>
              {thirdPartyProviders.map((p, i) => (
                <tr key={i} className={`border-b last:border-b-0 ${th("border-white/[0.04]", "border-oklch(0.93 0 0)")}`}>
                  <td className="py-2 pr-3 font-medium text-nyc-taxi">{p.provider}</td>
                  <td className={`py-2 pr-3 font-mono text-[10px] ${th("text-white/50", "text-oklch(0.40 0 0)")}`}>{p.baseUrl}</td>
                  <td className={`py-2 text-[11px] ${th("text-white/60", "text-oklch(0.38 0 0)")}`}>{p.models}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Third-party setup steps */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <h4 className={`font-semibold text-sm mb-3 ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>Подключение любого провайдера</h4>
        <div className="space-y-2">
          {thirdPartySetupSteps.map((s) => (
            <div key={s.step} className="flex items-start gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium flex-shrink-0 mt-0.5 ${th("bg-nyc-taxi/20 text-nyc-taxi", "bg-oklch(0.93 0 0) text-oklch(0.78 0.16 85)")}`}>
                {s.step}
              </span>
              <p className={`text-xs leading-relaxed ${th("text-white/70", "text-oklch(0.35 0 0)")}`}>{s.action}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Verification */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-6 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-400" />
          <p className={`text-xs leading-relaxed ${th("text-white/70", "text-oklch(0.35 0 0)")}`}>
            Выберите канал из селектора моделей в чате и отправьте короткую тестовую инструкцию. Если модель отвечает стабильно — настройка завершена.
          </p>
        </div>
      </motion.div>

      <TaxiDivider />
    </section>
  );
}