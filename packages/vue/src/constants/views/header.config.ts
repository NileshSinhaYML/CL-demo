import { NavBarOptions } from '@/types/third-party/header';
import { Routes } from '@/constants/routes';

const defaultConfig: NavBarOptions = {
  mode: 'dark',
  logo: 'https://ymedialabs.atlassian.net/s/1jmxwi/b/8/d35727372e299c952e88a10ef82bbaf6/_/jira-logo-scaled.png',
  logoAltText: 'Logo',
  headerText: 'Demo',
  menuLinks: [
    {
      label: 'Home',
      type: 'link',
      url: Routes.Landing,
    },
    {
      label: 'Demo',
      type: 'link',
      url: Routes.Demo,
    },
  ],
};

const lightConfig: NavBarOptions = {
  ...defaultConfig,
  mode: 'light',
};

const withSlotConfig: NavBarOptions = {
  ...defaultConfig,
  topRightSlot: {
    slotName: 'avatar',
  },
};

const withCustomEvent: NavBarOptions = {
  ...defaultConfig,
  menuLinks: [
    {
      label: 'Click Me',
      type: 'button',
      eventName: 'button-click',
    },
  ],
};

const withCustomElementPassedInSlot: NavBarOptions = {
  ...defaultConfig,
  topRightSlot: {
    slotName: 'avatar',
  },
};

export {
  defaultConfig,
  lightConfig,
  withSlotConfig,
  withCustomEvent,
  withCustomElementPassedInSlot,
};
