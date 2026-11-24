import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'lime' | 'outline' | 'outline-light';

const variants: Record<Variant, string> = {
  primary: 'bg-ink text-paper hover:bg-ink-3',
  lime: 'bg-lime text-ink hover:bg-lime-2',
  outline: 'border border-ink/15 bg-white/40 text-ink hover:border-ink/40 hover:bg-white',
  'outline-light':
    'border border-white/15 text-paper hover:border-white/40 hover:bg-white/5',
};

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  arrow = false,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  const external = /^(https?:|mailto:|tel:)/.test(href);
  const classes = `group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium transition-colors ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (external) {
    return (
      <a className={classes} href={href}>
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}

export function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] ${dark ? 'text-paper/60' : 'text-muted'}`}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-lime" />
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  dark = false,
  className = '',
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl ${dark ? 'text-paper' : 'text-ink'}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-pretty text-lg leading-relaxed ${dark ? 'text-paper/65' : 'text-muted'}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/** Kursyvinis serif akcentas antraštėse */
export function Accent({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-serif text-[1.08em] font-normal italic tracking-[-0.01em]">
      {children}
    </span>
  );
}

export function Check({ dark = false }: { dark?: boolean }) {
  return (
    <span
      aria-hidden
      className={`mt-[3px] grid size-[18px] shrink-0 place-items-center rounded-full ${dark ? 'bg-lime text-ink' : 'bg-ink text-lime'}`}
    >
      <svg className="size-2.5" fill="none" viewBox="0 0 12 12">
        <path
          d="M2.5 6.5 5 9l4.5-6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </span>
  );
}

export function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M13.5 21v-7.5h2.53l.38-2.94H13.5V8.69c0-.85.24-1.43 1.46-1.43h1.56V4.63A20.9 20.9 0 0 0 14.25 4.5c-2.25 0-3.79 1.37-3.79 3.89v2.17H7.92v2.94h2.54V21h3.04Z" />
    </svg>
  );
}

export function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    >
      <rect height="16" rx="4.5" width="16" x="4" y="4" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="16.9" cy="7.1" fill="currentColor" r="0.9" stroke="none" />
    </svg>
  );
}
