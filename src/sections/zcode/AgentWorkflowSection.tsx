"use client";

import {
  Search,
  ListTodo,
  Pencil,
  Play,
  CheckCircle,
  GitCompare,
  MessageSquare,
  Target,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { SectionHeader } from "@/ui/SectionHeader";
import { TaxiDivider } from "@/ui/TaxiDivider";
import {
  simpleTaskSteps,
  agentWorkflowSteps,
  promptElements,
  promptExamples,
} from "@/data/zcode/agentWorkflow";

const iconMap: Record<string, React.ElementType> = {
  Search,
  ListTodo,
  Pencil,
  Play,
  CheckCircle,
  GitCompare,
};

export function AgentWorkflowSection() {
  const { theme } = useTheme();
  const th = (d: string, l: string) => (theme === "light" ? l : d);

  return (
    <section id="agent-workflow">
      <SectionHeader
        num="14"
        title="Работа с Agent"
        subtitle="Базовый рабочий процесс"
      />

      {/* Section 1: Простая задача */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
            <MessageSquare className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4 className={`font-semibold text-sm ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>
            Простая задача
          </h4>
        </div>
        <p className={`text-xs leading-relaxed mb-4 ${th("text-white/70", "text-oklch(0.35 0 0)")}`}>
          Базовый рабочий процесс — от инструкции до готового результата:
        </p>

        <div className="space-y-2">
          {simpleTaskSteps.map((s) => (
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

      {/* Section 2: Что делает Agent — 6 cards in 2x3 / 3x2 grid */}
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
            Что делает Agent
          </h4>
        </div>
        <p className={`text-xs leading-relaxed mb-4 ${th("text-white/70", "text-oklch(0.35 0 0)")}`}>
          Каждый запрос проходит через 6 фаз — от исследования до финального ревью:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {agentWorkflowSteps.map((step, i) => {
            const Icon = iconMap[step.icon] || Search;
            return (
              <div
                key={step.phase}
                className={`p-3 rounded-lg ${th("bg-white/5", "bg-oklch(0.95 0 0)")}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center ${th(
                      "bg-nyc-taxi/20 text-nyc-taxi",
                      "bg-oklch(0.93 0 0) text-oklch(0.78 0.16 85)"
                    )}`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-nyc-taxi">
                    {step.phase}
                  </span>
                </div>
                <p className={`text-xs ${th("text-white/60", "text-oklch(0.40 0 0)")}`}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Section 3: 4 элемента эффективного промпта */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
            <Pencil className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4 className={`font-semibold text-sm ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>
            4 элемента эффективного промпта
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {promptElements.map((el, i) => (
            <div
              key={el.element}
              className={`p-3 rounded-lg ${th("bg-white/5", "bg-oklch(0.95 0 0)")}`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${th(
                    "bg-nyc-taxi/20 text-nyc-taxi",
                    "bg-oklch(0.93 0 0) text-oklch(0.78 0.16 85)"
                  )}`}
                >
                  {i + 1}
                </span>
                <span className="text-xs font-semibold text-nyc-taxi">
                  {el.element}
                </span>
              </div>
              <p className={`text-xs mb-2 ${th("text-white/70", "text-oklch(0.35 0 0)")}`}>
                {el.desc}
              </p>
              <div
                className={`px-2.5 py-1.5 rounded-md text-[10px] font-mono ${th(
                  "bg-black/30 text-green-400",
                  "bg-oklch(0.95 0.015 150) text-oklch(0.40 0.12 150)"
                )}`}
              >
                {el.example}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Section 4: Good vs Bad prompt */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-6 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <h4 className={`font-semibold text-sm mb-3 ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>
          Пример промпта
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Good prompt */}
          <div
            className={`p-3 rounded-lg border-2 ${th(
              "border-green-500/40 bg-green-500/5",
              "border-green-400 bg-green-50/80"
            )}`}
          >
            <div className="flex items-center gap-1.5 mb-2">
              <ThumbsUp className="h-3.5 w-3.5 text-green-500" />
              <span className="text-xs font-semibold text-green-500">
                Хороший промпт
              </span>
            </div>
            <p className={`text-xs leading-relaxed ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>
              {promptExamples.good}
            </p>
          </div>

          {/* Bad prompt */}
          <div
            className={`p-3 rounded-lg border-2 ${th(
              "border-red-500/40 bg-red-500/5",
              "border-red-400 bg-red-50/80"
            )}`}
          >
            <div className="flex items-center gap-1.5 mb-2">
              <ThumbsDown className="h-3.5 w-3.5 text-red-500" />
              <span className="text-xs font-semibold text-red-500">
                Плохой промпт
              </span>
            </div>
            <p className={`text-xs leading-relaxed ${th("text-white/80", "text-oklch(0.30 0 0)")}`}>
              {promptExamples.bad}
            </p>
          </div>
        </div>
      </motion.div>

      <TaxiDivider />
    </section>
  );
}