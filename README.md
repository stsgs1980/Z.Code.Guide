# Z Code - Руководство пользователя

Интерактивный справочник по платформе AI-кодинга **Z Code** — инструменты, модели GLM, MCP-серверы, тарифные планы и настройка.


[![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square)](https://www.typescriptlang.org)
[![Tailwind_CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat-square)](https://ui.shadcn.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## Содержание

| # | Раздел | Описание |
|---|--------|----------|
| 0 | Hero | Статистика платформы, CTA-кнопки |
| 1 | Быстрый старт | Регистрация, API-ключ, настройка за 4 шага |
| 2 | Coding Tool Helper | CLI-утилита `@z_ai/coding-helper` — 13 команд |
| 3 | Инструменты | 10 инструментов кодинга (Claude Code, Cline, Cursor и др.) |
| 4 | Установка | Настройка Anthropic API, OpenAI-совместимый конфиг |
| 5 | MCP-серверы | Vision, Web Search, Web Reader — с конфигами |
| 6 | Тарифы | Lite / Pro / Max — квоты и FAQ |
| 7 | Модели GLM | GLM-5.1, GLM-5-Turbo, GLM-4.7, GLM-4.5-Air |
| 8 | Примеры | 6 сценариев использования с подсказками |
| 9 | Решение проблем | 16 типичных ошибок с решениями |
| 10 | Источники | Ссылки на документацию Z.AI |

## Технологии

- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript 5**
- **Tailwind CSS 4** + shadcn/ui
- **Framer Motion 12**
- **Lucide React** (иконки)

## Запуск

```bash
git clone https://github.com/stsgs1980/Z.Code.Guide.git
cd Z.Code.Guide
bun install
bun run dev
```

Открыть `http://localhost:3000`

## Структура

```css
src/
  app/
    page.tsx              # Главная страница
    layout.tsx            # Root layout
    globals.css           # NYC тема, 60+ CSS-утилит
    api/route.ts          # API route
  components/
    guide/
      sections/           # 11 секций контента
      features/           # Sidebar, Search, ThemeToggle, ScrollToTop, ReadingProgress
      ui/                 # CodeBlock, CopyButton, SectionHeader, StatusDot, TaxiDivider
      data/               # Данные: модели, инструменты, тарифы, ошибки, MCP
      hooks/              # useTheme, useActiveSection, useSearch
public/
  robots.txt
```

## Возможности

- Поиск по разделам (Ctrl+K)
- Переключение темы (Dark/Light)
- Индикатор прогресса чтения
- Навигация по секциям с активным разделом
- Копирование кода одним кликом
- Адаптивная верстка (mobile-first)
- Сайдбар-навигация с иконками

## Лицензия

Private project. All rights reserved.


## Features

- Feature 1 - description
- Feature 2 - description


## Tech Stack

- **Framework** - Next.js
- **Language** - TypeScript
- **Styling** - Tailwind CSS, CSS
- **Libraries** - shadcn/ui, Framer Motion
- **AI** - OpenAI
- **Tools** - React


## Getting Started

### Prerequisites

- Node.js 20+ or Bun

### Installation

```bash
git clone https://github.com/stsgs1980/Z.Code.Guide.git
cd Z.Code.Guide
bun install
```

### Run

```bash
bun run dev
```

## License

[MIT](LICENSE)

---
Built with: Next.js + React + TypeScript + Tailwind CSS
