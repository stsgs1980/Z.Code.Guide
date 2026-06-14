"use client";

import { useState } from "react";
import {
  Bot,
  Smartphone,
  QrCode,
  CheckCircle,
  Link2,
  Settings,
  Trash2,
  MessageCircle,
  ArrowRightLeft,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { SectionHeader } from "@/ui/SectionHeader";
import { TaxiDivider } from "@/ui/TaxiDivider";
import {
  remoteVsBot,
  availableChannels,
  feishuBindingSteps,
  botCapabilities,
  botManagementOptions,
} from "@/data/zcode/botChannel";

export function BotChannelSection() {
  const { theme } = useTheme();
  const th = (d: string, l: string) => (theme === "light" ? l : d);

  return (
    <section id="bot-channel">
      <SectionHeader
        num="18"
        title="Bot Channel"
        subtitle="Feishu / WeChat / Telegram"
      />

      {/* Comparison table: Remote Control vs Bot Channel */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
            <ArrowRightLeft className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4 className="font-semibold text-sm">Сравнение</h4>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Remote Control column */}
          <div className={`p-3 rounded-lg ${th("bg-white/5", "bg-oklch(0.95 0 0)")}`}>
            <div className="flex items-center gap-1.5 mb-2">
              <Smartphone className="h-3.5 w-3.5 text-nyc-taxi" />
              <span className="font-semibold text-xs">Remote Control</span>
            </div>
            <p className={`text-[11px] mb-1 ${th("text-white/60", "text-oklch(0.40 0 0)")}`}>
              {remoteVsBot[0].desc}
            </p>
            <p className={`text-[10px] ${th("text-white/40", "text-oklch(0.55 0 0)")}`}>
              {remoteVsBot[0].detail}
            </p>
            <p className={`text-[11px] mt-2 ${th("text-white/60", "text-oklch(0.40 0 0)")}`}>
              {remoteVsBot[1].desc}
            </p>
          </div>

          {/* Bot Channel column */}
          <div className={`p-3 rounded-lg ${th("bg-white/5", "bg-oklch(0.95 0 0)")}`}>
            <div className="flex items-center gap-1.5 mb-2">
              <Bot className="h-3.5 w-3.5 text-nyc-taxi" />
              <span className="font-semibold text-xs">Bot Channel</span>
            </div>
            <p className={`text-[11px] mb-1 ${th("text-white/60", "text-oklch(0.40 0 0)")}`}>
              {remoteVsBot[2].desc}
            </p>
            <p className={`text-[10px] ${th("text-white/40", "text-oklch(0.55 0 0)")}`}>
              {remoteVsBot[2].detail}
            </p>
            <p className={`text-[11px] mt-2 ${th("text-white/60", "text-oklch(0.40 0 0)")}`}>
              {remoteVsBot[3].desc}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Доступные каналы — grid of channel cards */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
            <MessageCircle className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4 className="font-semibold text-sm">Доступные каналы</h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {availableChannels.map((ch, i) => (
            <motion.div
              key={ch.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`relative p-3 rounded-xl flex items-start gap-2.5 ${th("bg-white/5", "bg-oklch(0.95 0 0)")} ${ch.upcoming ? "opacity-60" : ""}`}
            >
              <Bot className="h-4 w-4 text-nyc-taxi flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-semibold text-xs">{ch.name}</span>
                  {ch.upcoming && (
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium ${th("bg-white/10 text-white/50", "bg-oklch(0.90 0 0) text-oklch(0.45 0 0)")}`}>
                      Soon
                    </span>
                  )}
                </div>
                <p className={`text-[11px] leading-relaxed ${th("text-white/50", "text-oklch(0.45 0 0)")}`}>{ch.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Привязка Feishu — numbered steps */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className={`p-4 rounded-xl mb-4 ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
            <Link2 className="h-4 w-4 text-nyc-taxi" />
          </div>
          <h4 className="font-semibold text-sm">Привязка Feishu</h4>
        </div>

        <div className="space-y-2">
          {feishuBindingSteps.map((s) => (
            <div key={s.step} className="flex items-start gap-2">
              <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-medium flex-shrink-0 mt-0.5 ${th("bg-nyc-taxi/20 text-nyc-taxi", "bg-oklch(0.93 0 0) text-oklch(0.78 0.16 85)")}`}>
                {s.step}
              </span>
              <p className={`text-xs ${th("text-white/60", "text-oklch(0.40 0 0)")}`}>{s.action}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Возможности бота + Управление ботами — 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Возможности бота */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className={`p-4 rounded-xl ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
              <Sparkles className="h-4 w-4 text-nyc-taxi" />
            </div>
            <h4 className="font-semibold text-sm">Возможности бота</h4>
          </div>

          <div className="space-y-2">
            {botCapabilities.map((cap, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="h-3.5 w-3.5 text-nyc-taxi flex-shrink-0" />
                <span className={`text-xs ${th("text-white/60", "text-oklch(0.40 0 0)")}`}>{cap}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Управление ботами */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`p-4 rounded-xl ${th("nyc-card-enhanced", "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)")}`}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${th("bg-white/5", "bg-oklch(0.93 0 0)")}`}>
              <Settings className="h-4 w-4 text-nyc-taxi" />
            </div>
            <h4 className="font-semibold text-sm">Управление ботами</h4>
          </div>

          <div className="space-y-1.5">
            {botManagementOptions.map((opt, i) => (
              <div
                key={i}
                className={`flex items-center justify-between p-2 rounded-lg ${th("bg-white/5", "bg-oklch(0.95 0 0)")}`}
              >
                <div>
                  <p className="font-medium text-xs">{opt.option}</p>
                  <p className={`text-[10px] ${th("text-white/40", "text-oklch(0.55 0 0)")}`}>{opt.desc}</p>
                </div>
                {opt.option === "Delete Bot" ? (
                  <Trash2 className="h-3.5 w-3.5 text-red-400/60" />
                ) : (
                  <Settings className="h-3.5 w-3.5 text-nyc-taxi/40" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <TaxiDivider />
    </section>
  );
}