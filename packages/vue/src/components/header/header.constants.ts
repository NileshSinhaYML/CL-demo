import { NavBarOptions } from '../../types/third-party/header';
import { Routes } from '@/constants/routes';

export const options: NavBarOptions = {
  mode: 'light',
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
  topRightSlot: {
    slotName: 'slot-div',
  },
};

// {
//   label: 'Home',
//   type: 'link',
//   url: 'home',
// },
// {
//   label: 'Company',
//   type: 'link',
//   url: 'company',
// },
// {
//   label: 'Team',
//   type: 'link',
//   url: 'team',
// },
// {
//   label: 'Map',
//   type: 'button',
//   eventName: 'map-click',
// },
