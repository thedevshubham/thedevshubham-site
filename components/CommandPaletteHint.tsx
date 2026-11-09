'use client';

import { layout } from '@/lib/content';

const { before, key, after } = layout.commandPalette.hint;

export default function CommandPaletteHint() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('open-command-palette'))}
      className="inline-flex items-center gap-2 font-mono text-xs text-forest-green hover:text-forest-green transition-colors"
    >
      {before}
      <kbd className="border border-ink rounded px-1.5 py-0.5 bg-white text-forest-green">{key}</kbd>
      {after}
    </button>
  );
}
