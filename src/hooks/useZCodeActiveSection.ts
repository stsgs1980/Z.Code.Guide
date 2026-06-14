/**
 * HOOKS LAYER
 * useZCodeActiveSection - tracks visible ZCode sub-section
 *
 * Anti-monolith: pure intersection observer, no UI
 */

'use client';

import { useState, useEffect } from 'react';
import { zcodeNavigation } from '@/data/zcode/newdocs';

export function useZCodeActiveSection(enabled: boolean) {
  const [activeId, setActiveId] = useState<string>('interface');

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      {
        rootMargin: '-15% 0px -65% 0px',
        threshold: 0,
      }
    );

    // Small delay to ensure DOM is ready after page switch
    const timer = setTimeout(() => {
      for (const item of zcodeNavigation) {
        const el = document.getElementById(item.id);
        if (el) observer.observe(el);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [enabled]);

  return activeId;
}