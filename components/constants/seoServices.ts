
export const seoServices = [
  {
    titleKey: "technical.title",
    servicesKeys: [
      "technical.speed",
      "technical.mobile",
      "technical.structure",
      "technical.sitemap",
      "technical.robots"
    ]
  },
  {
    titleKey: "content.title",
    servicesKeys: [
      "content.keywords",
      "content.optimization",
      "content.meta",
      "content.url",
      "content.images"
    ]
  },
  {
    titleKey: "offpage.title",
    servicesKeys: [
      "offpage.strategy",
      "offpage.backlinks",
      "offpage.social",
      "offpage.gmb",
      "offpage.local"
    ]
  },
  {
    titleKey: "analytics.title",
    servicesKeys: [
      "analytics.ga",
      "analytics.gsc",
      "analytics.positions",
      "analytics.competitors",
      "analytics.reports"
    ]
  }
] as const;

// Galima pridėti ir tipus
export interface SEOService {
  titleKey: string;
  servicesKeys: string[];
}
