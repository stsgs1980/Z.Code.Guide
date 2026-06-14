"use client";

import { Terminal, Copy, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { SectionHeader } from "@/ui/SectionHeader";
import { TaxiDivider } from "@/ui/TaxiDivider";
import { cheatGroups } from "@/data/zcode/cheatsheet";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const th = (d: string, l: string) => (theme === "light" ? l : d);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className={`opacity-0 group-hover:opacity-100 transition-opacity p-0.5 rounded ${th(
        "hover:bg-white/10",
        "hover:bg-oklch(0.88 0 0)"
      )}`}
      aria-label="Скопировать"
    >
      {copied ? (
        <Check className="h-3 w-3 text-green-400" />
      ) : (
        <Copy className={`h-3 w-3 ${th("text-white/40", "text-oklch(0.50 0 0)")}`} />
      )}
    </button>
  );
}

export function CheatsheetSection() {
  const { theme } = useTheme();
  const th = (d: string, l: string) => (theme === "light" ? l : d);

  return (
    <motion.div
      id="cheatsheet"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeader
        num="23"
        title="Шпаргалка"
        subtitle="Краткий справочник"
      />

      {/* Intro */}
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
          <Terminal className="h-4.5 w-4.5 text-nyc-taxi" />
        </div>
        <p
          className={`text-xs leading-relaxed ${th(
            "text-white/70",
            "text-oklch(0.35 0 0)"
          )}`}
        >
          Все основные команды, горячие клавиши и настройки ZCode в одном месте.
        </p>
      </motion.div>

      {/* Cheat groups — compact terminal-style */}
      <div className="space-y-4 mb-6">
        {cheatGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.05 }}
          >
            {/* Group heading */}
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px flex-1 bg-nyc-taxi/20" />
              <h4
                className={`text-[10px] font-bold uppercase tracking-widest ${th(
                  "text-white/40",
                  "text-oklch(0.50 0 0)"
                )}`}
              >
                {group.title}
              </h4>
              <div className="h-px flex-1 bg-nyc-taxi/20" />
            </div>

            {/* Items — table-like rows */}
            <div
              className={`rounded-xl overflow-hidden ${th(
                "nyc-card-enhanced",
                "border border-oklch(0.88 0 0) bg-oklch(0.98 0 0)"
              )}`}
            >
              {group.items.map((item, ii) => (
                <div
                  key={ii}
                  className={`flex items-center gap-3 px-3.5 py-2 group ${th(
                    ii < group.items.length - 1 ? "border-b border-white/[0.04]" : "",
                    ii < group.items.length - 1
                      ? "border-b border-oklch(0.90 0 0)"
                      : ""
                  )}`}
                >
                  {/* Command in code style */}
                  <code
                    className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded-md flex-shrink-0 min-w-0 truncate max-w-[200px] sm:max-w-[260px] ${th(
                      "bg-black/40 text-nyc-taxi border border-white/[0.06]",
                      "bg-oklch(0.20 0 0) text-oklch(0.85 0.05 85) border border-oklch(0.28 0 0)"
                    )}`}
                  >
                    {item.cmd}
                  </code>

                  {/* Description */}
                  <span
                    className={`text-xs flex-1 min-w-0 ${th(
                      "text-white/55",
                      "text-oklch(0.40 0 0)"
                    )}`}
                  >
                    {item.desc}
                  </span>

                  {/* Copy button (desktop only) */}
                  <span className="hidden sm:block flex-shrink-0">
                    <CopyButton text={item.cmd} />
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <TaxiDivider />
    </motion.div>
  );
}