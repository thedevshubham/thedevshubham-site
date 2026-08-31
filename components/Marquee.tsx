const items = [
  'WRITING CODE',
  'SHIPPING FEATURES',
  'FIXING BUGS',
  'OPTIMIZING PERFORMANCE',
  'AUTOMATING THE BORING PARTS',
];

export default function Marquee() {
  const line = items.join(' ✳ ') + ' ✳ ';
  return (
    <div
      aria-hidden="true"
      className="bg-lime text-ink border-b-2 border-ink overflow-hidden whitespace-nowrap py-4"
    >
      <div className="inline-block animate-marquee font-mono text-sm sm:text-base tracking-wide font-bold">
        <span>{line}</span>
        <span>{line}</span>
      </div>
    </div>
  );
}
