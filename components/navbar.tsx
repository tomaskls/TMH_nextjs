'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@nextui-org/navbar';
import { Button } from '@nextui-org/button';
import { link as linkStyles } from '@nextui-org/theme';
import clsx from 'clsx';

import { LanguageSwitch } from '@/components/language-switch';
import { ThemeSwitch } from '@/components/theme-switch';
import { Logo } from '@/components/logo/Logo';
import { siteConfig } from '@/config/site';
import { Link, usePathname } from '@/navigation';

const navLinkClass = clsx(
  linkStyles({ color: 'foreground' }),
  'data-[active=true]:text-primary data-[active=true]:font-medium'
);

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const t = useTranslations('navigation');
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <NextUINavbar
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full justify-start items-center gap-10" >
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link aria-label={siteConfig.name} className="flex justify-start items-center gap-1" href="/">
            <Logo aria-hidden="true" className='mt-4' style={{ width: '100px', height: '100px' }} />
            <p className="hidden md:inline font-bold text-inherit text-lg ml-6">
              <span className='text-fuchsia-500'>Tomo</span>rrow&apos;s Media House
            </p>
          </Link>
        </NavbarBrand>
        <li className="hidden lg:flex ml-6">
          <ul className="flex gap-4 justify-start">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href} isActive={isActive(item.href)}>
              <Link
                className={navLinkClass}
                data-active={isActive(item.href)}
                href={item.href}
              >
                {t(item.label)}
              </Link>
            </NavbarItem>
          ))}
          </ul>
        </li>
      </NavbarContent>

      <NavbarContent
        className="hidden lg:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex gap-2">
          <LanguageSwitch />
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.contact}
            variant="flat"
          >
            {t('contact')}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <LanguageSwitch />
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {[...siteConfig.navItems, { label: 'contact', href: siteConfig.links.contact }].map((item) => (
            <NavbarMenuItem key={item.href} isActive={isActive(item.href)}>
              <Link
                className={navLinkClass}
                data-active={isActive(item.href)}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.label)}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
