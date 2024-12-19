// constants/seoIcons.ts
import {
    Search,
    Settings,
    FileText,
    Link2,
    BarChart2,
    Smartphone,
    Globe,
    FileCode,
    Bot,
    Key,
    Pen,
    Image,
    Share2,
    MapPin,
    LineChart,
    TrendingUp,
} from 'lucide-react';

export const ICON_MAP = {
  settings: Settings,
  search: Search,
  fileText: FileText,
  link: Link2,
  barChart: BarChart2,
  smartphone: Smartphone,
  globe: Globe,
  fileCode: FileCode,
  bot: Bot,
  key: Key,
  pen: Pen,
  image: Image,
  share: Share2,
  mapPin: MapPin,
  lineChart: LineChart,
  trendingUp: TrendingUp,
} as const;

export type IconName = keyof typeof ICON_MAP;