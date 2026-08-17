import type { LucideIcon } from "lucide-react";
import {
  Award,
  BarChart3,
  Bot,
  Building2,
  Clock,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Database,
  Factory,
  GitBranch,
  Globe,
  GraduationCap,
  HeartPulse,
  Landmark,
  LandPlot,
  Layers,
  LifeBuoy,
  Network,
  Palette,
  RefreshCw,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Store,
  Target,
  TrendingUp,
  Truck,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import type { IconName } from "@/types/content";

const iconMap: Record<IconName, LucideIcon> = {
  code: Code2,
  globe: Globe,
  smartphone: Smartphone,
  cloud: Cloud,
  palette: Palette,
  "shield-check": ShieldCheck,
  "git-branch": GitBranch,
  "bar-chart": BarChart3,
  bot: Bot,
  network: Network,
  refresh: RefreshCw,
  cart: ShoppingCart,
  users: Users,
  cpu: Cpu,
  workflow: Workflow,
  database: Database,
  "heart-pulse": HeartPulse,
  landmark: Landmark,
  "graduation-cap": GraduationCap,
  factory: Factory,
  store: Store,
  truck: Truck,
  building: Building2,
  "land-plot": LandPlot,
  rocket: Rocket,
  target: Target,
  zap: Zap,
  layers: Layers,
  compass: Compass,
  award: Award,
  clock: Clock,
  "trending-up": TrendingUp,
  "life-buoy": LifeBuoy,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = iconMap[name];
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}