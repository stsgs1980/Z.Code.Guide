# Z Code Guide

Interactive reference guide for the Z Code AI coding platform -- tools, GLM models, MCP servers, pricing plans, and setup.

[![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square)](https://www.typescriptlang.org)
[![Tailwind_CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat-square)](https://ui.shadcn.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## Features

- Section search (Ctrl+K)
- Dark/Light theme switching
- Reading progress indicator
- Active section navigation with scroll tracking
- One-click code copy
- Mobile-first responsive layout
- Sidebar navigation with icons
- 10 coding tool guides (Claude Code, Cline, Cursor, and more)
- GLM model reference (GLM-5.1, GLM-5-Turbo, GLM-4.7, GLM-4.5-Air)
- MCP server configuration guides (Vision, Web Search, Web Reader)
- Pricing plan comparison (Lite / Pro / Max) with quotas and FAQ
- 16 common error solutions
- 6 usage scenario examples with prompts
- Coding Tool Helper CLI (`@z_ai/coding-helper`) with 13 commands

## Tech Stack

- **Framework** - Next.js
- **Language** - TypeScript
- **UI Library** - React
- **Styling** - Tailwind CSS
- **Components** - shadcn/ui
- **Animation** - Framer Motion
- **Icons** - Lucide React

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

Open `http://localhost:3000`

## Project Structure

- `src/app/page.tsx` - Main page
- `src/app/layout.tsx` - Root layout
- `src/app/globals.css` - NYC theme with 60+ CSS utilities
- `src/app/api/route.ts` - API route
- `src/components/guide/sections/` - 11 content sections (Hero, Quick Start, Tools, Setup, MCP, Pricing, Models, Examples, Troubleshooting, Sources)
- `src/components/guide/features/` - Sidebar, Search, ThemeToggle, ScrollToTop, ReadingProgress
- `src/components/guide/ui/` - CodeBlock, CopyButton, SectionHeader, StatusDot, TaxiDivider
- `src/components/guide/data/` - Model, tool, pricing, error, and MCP data
- `src/components/guide/hooks/` - useTheme, useActiveSection, useSearch
- `public/robots.txt`

## License

[MIT](LICENSE)

---
Built with: Next.js + React + TypeScript + Tailwind CSS