'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';

import { Logo } from '@/components/Logo';
import { CONTACT, NAV } from '@/config/site';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Atidarius meniu telefone – neleidžiame slinkti puslapio fone
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  // Mobilus meniu atvaizduojamas šalia <header>, ne jo viduje: backdrop-blur
  // antraštėje tampa „fixed“ elementų atskaitos tašku ir meniu gautų 0 aukštį.
  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-colors duration-300 ${scrolled || open ? 'border-b border-line/70 bg-paper/85 backdrop-blur-xl' : 'border-b border-transparent'}`}
      >
        <div className="container-x flex h-[72px] items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Pagrindinis meniu" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV.map((item) => {
                const active = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      aria-current={active ? 'page' : undefined}
                      className={`rounded-full px-3.5 py-2 text-[15px] transition-colors hover:bg-ink/5 ${active ? 'font-medium text-ink' : 'text-ink/70 hover:text-ink'}`}
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              className="group hidden h-10 items-center gap-2 rounded-full bg-ink px-5 text-[14px] font-medium text-paper transition-colors hover:bg-ink-3 sm:inline-flex"
              href="/kontaktai"
            >
              Aptarti projektą
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <button
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label={open ? 'Uždaryti meniu' : 'Atidaryti meniu'}
              className="grid size-10 place-items-center rounded-full border border-ink/10 lg:hidden"
              type="button"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-x-0 top-[73px] bottom-0 z-30 overflow-y-auto bg-paper lg:hidden"
          id="mobile-menu"
        >
          <nav aria-label="Mobilus meniu" className="container-x py-6">
            <ul className="divide-y divide-line">
              {[...NAV, { label: 'Kontaktai', href: '/kontaktai' }].map(
                (item) => (
                  <li key={item.href}>
                    <Link
                      className="flex items-center justify-between py-4 text-2xl font-medium tracking-tight"
                      href={item.href}
                      onClick={close}
                    >
                      {item.label}
                      <ArrowRight aria-hidden className="size-5 text-muted" />
                    </Link>
                  </li>
                )
              )}
            </ul>
            <div className="mt-8 space-y-1 text-muted">
              <a
                className="block text-lg text-ink"
                href={`tel:${CONTACT.phone}`}
              >
                {CONTACT.phoneDisplay}
              </a>
              <a
                className="block text-lg text-ink"
                href={`mailto:${CONTACT.email}`}
              >
                {CONTACT.email}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
