export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    { label: "home", href: "/" },
    { label: "about", href: "/about" },
    { label: "blog", href: "/blog" },
    { label: "docs", href: "/docs" },
    { label: "seo", href: "/seo" },
  ],
   
  
  navMenuItems: [
    { label: "home", href: "/" },
    { label: "about", href: "/about" },
    { label: "blog", href: "/blog" },
    { label: "docs", href: "/docs" },
    { label: "seo", href: "/seo" },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
