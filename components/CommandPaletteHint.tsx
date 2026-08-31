'use client';

export default function CommandPaletteHint() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('open-command-palette'))}
      className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-ink transition-colors"
    >
      Press
      <kbd className="border border-ink rounded px-1.5 py-0.5 bg-white text-ink">⌘K</kbd>
      for everything
    </button>
  );
}
