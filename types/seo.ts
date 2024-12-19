// types/seo.ts
export interface SEOServiceItem {
    title: string;
    icon: string; // icon identifier
    description?: string;
    items?: Array<{
      title: string;
      icon: string;
    }>;
  }
  
  export interface StatItem {
    value: string;
    label: string;
  }