import Link from 'next/link';

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      aria-label="Tomorrow's Media House – pradžia"
      className="group inline-flex items-center gap-2.5"
      href="/"
    >
      <span
        aria-hidden
        className={`grid h-9 w-[46px] place-items-center rounded-[10px] font-mono text-[13px] font-bold tracking-tight transition-transform group-hover:-rotate-3 ${dark ? 'bg-lime text-ink' : 'bg-ink text-lime'}`}
      >
        TMH
      </span>
      <span
        className={`hidden text-[13px] font-medium leading-[1.15] tracking-tight sm:block ${dark ? 'text-paper' : 'text-ink'}`}
      >
        Tomorrow&apos;s
        <br />
        Media House
      </span>
    </Link>
  );
}
