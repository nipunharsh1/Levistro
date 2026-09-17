export interface PortfolioItem {
  id: string | number;
  title: string;
  client: string;
  category: 'Branding' | 'Web Platforms' | 'AI & Mobile' | string;
  metric: string;
  metricLabel: string;
  description: string;
  challenge: string;
  solution: string;
  tags: string[];
  gradient?: string;
  accent?: string;
  link?: string;
  created_at?: string;
}

export interface ServiceItem {
  id: string;
  iconName: 'Palette' | 'Code2' | 'Box' | 'Cpu' | string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  stats: string;
  colSpan?: string;
  gradient?: string;
  accentColor?: string;
  borderColor?: string;
  created_at?: string;
}
