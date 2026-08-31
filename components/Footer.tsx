import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="grain bg-dark text-cream py-16">
      <div className="max-w-[1080px] mx-auto px-7">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#9C9788] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-lime" aria-hidden="true" />
          GOT A PROJECT? A BUG? DOUBTS?
        </div>
        <Link
          href="/contact"
          className="display text-lime text-[clamp(48px,9vw,96px)] flex items-center gap-6 leading-none w-fit"
        >
          WRITE ME
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
        <div className="mt-8 font-mono text-xs text-[#9C9788] flex flex-wrap justify-between gap-2.5">
          <span>
            GitHub:{' '}
            <a href="https://github.com/thedevshubham" className="underline">
              @thedevshubham
            </a>
          </span>
          <span>Remote · building for clients worldwide</span>
        </div>
      </div>
    </footer>
  );
}
