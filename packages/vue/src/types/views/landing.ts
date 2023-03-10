import { NavBarOptions } from '@/types/third-party/header';

interface Variant {
  name: string;
  config: NavBarOptions;
  hasCustomStyling?: boolean;
  hasSlot?: boolean;
  hasSlotWithCustomComponents?: boolean;
}

export interface LandingPageConfig {
  options: Variant[];
}
