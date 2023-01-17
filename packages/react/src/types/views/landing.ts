import { NavBarOptions } from '../third-party/header';

interface Variant {
  name: string;
  config: NavBarOptions;
  hasCustomStyling?: boolean;
  hasSlot?: boolean;
}

export interface LandingPageConfig {
  options: Variant[];
}
