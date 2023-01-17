import { LandingPageConfig } from '../../types/views/landing';
import {
  defaultConfig,
  lightConfig,
  withSlotConfig,
  withCustomEvent,
} from './header.config';

const landingPageConfig: LandingPageConfig = {
  options: [
    {
      name: 'Default',
      config: defaultConfig,
    },
    {
      name: 'Light',
      config: lightConfig,
    },
    {
      name: 'Dark',
      config: defaultConfig,
    },
    {
      name: 'With custom Event',
      config: withCustomEvent,
    },
    {
      name: 'With Right Slot',
      config: withSlotConfig,
      hasSlot: true,
    },
    {
      name: 'With Custom Styling',
      config: defaultConfig,
      hasCustomStyling: true,
    },
  ],
};

export { landingPageConfig };
