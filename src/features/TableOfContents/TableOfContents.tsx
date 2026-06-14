/**
 * FEATURES LAYER
 * TableOfContents - right sidebar table of contents
 * Shows guide sections on guide page, ZCode sections on ZCode page
 *
 * Anti-monolith: may have state, uses hooks and providers
 */

'use client';

import { useActiveSection } from '@/hooks/useActiveSection';
import { useZCodeActiveSection } from '@/hooks/useZCodeActiveSection';
import { useTheme } from '@/providers/ThemeProvider';
import { tocItems } from '@/data/toc';
import { zcodeNavigation } from '@/data/zcode/newdocs';

interface TableOfContentsProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
  onGoToGuide?: () => void;
}

export function TableOfContents({ currentPage, onNavigate, onGoToGuide }: TableOfContentsProps) {
  const guideActiveId = useActiveSection();
  const isZCode = currentPage === 'zcode';
  const zcodeActiveId = useZCodeActiveSection(isZCode);
  const { theme } = useTheme();
  const th = (dark: string, light: string) => theme === 'light' ? light : dark;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = window.innerWidth < 768 ? 56 : 0;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Guide items (non-page sections only)
  const guideItems = tocItems.filter((item) => !item.isPage);

  return (
    <nav className="hidden lg:block">
      <div className={`sticky top-24 p-4 rounded-lg ${th('bg-white/[0.02]', 'bg-oklch(0.97 0 0)')}`}>
        <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${th('text-white/40', 'text-oklch(0.50 0 0)')}`}>
          {isZCode ? 'ZCode секции' : 'Содержание'}
        </h3>

        {isZCode ? (
          /* ZCode sub-sections */
          <ul className="space-y-0.5 max-h-[calc(100vh-8rem)] overflow-y-auto">
            {zcodeNavigation.map((item) => {
              const isActive = zcodeActiveId === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left text-[11px] py-1.5 px-2 rounded transition-colors flex items-center gap-2 ${
                      isActive
                        ? `text-nyc-taxi font-medium ${th('bg-white/5', 'bg-oklch(0.90 0 0)')}`
                        : `${th('text-white/50 hover:text-white/70', 'text-oklch(0.40 0 0) hover:text-oklch(0.25 0 0)')} ${th('hover:bg-white/5', 'hover:bg-oklch(0.93 0 0)')}`
                    }`}
                  >
                    <span className={`flex-shrink-0 w-4 text-center ${isActive ? 'text-nyc-taxi' : th('text-white/25', 'text-oklch(0.65 0 0)')}`}>
                      {item.num}
                    </span>
                    <span className="truncate">{item.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          /* Guide page sections */
          <ul className="space-y-1">
            {guideItems.map((item) => {
              const isActive = guideActiveId === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      if (currentPage !== 'guide' && onGoToGuide) {
                        onGoToGuide();
                        setTimeout(() => scrollTo(item.id), 150);
                      } else {
                        scrollTo(item.id);
                      }
                    }}
                    className={`w-full text-left text-sm py-1.5 px-2 rounded transition-colors ${
                      isActive
                        ? `text-nyc-taxi ${th('bg-white/5', 'bg-oklch(0.90 0 0)')}`
                        : `${th('text-white/50 hover:text-white/70', 'text-oklch(0.40 0 0) hover:text-oklch(0.25 0 0)')} ${th('hover:bg-white/5', 'hover:bg-oklch(0.93 0 0)')}`
                    }`}
                  >
                    <span className="text-xs opacity-50 mr-2">{item.num}</span>
                    {item.title}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
}