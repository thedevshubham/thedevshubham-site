import { layout } from '@/lib/content';

export default function MetaRow() {
  return (
    <div className="flex flex-wrap justify-between gap-2 font-mono text-xs text-muted py-4 dashed-b">
      {layout.metaRow.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
