import { Routes } from "./routes";

const defaultConfig = {
  mode: "dark",
  logo: "https://ymedialabs.atlassian.net/s/1jmxwi/b/8/d35727372e299c952e88a10ef82bbaf6/_/jira-logo-scaled.png",
  logoAltText: "Logo",
  headerText: "Demo",
  menuLinks: [
    {
      label: "Home",
      type: "link",
      url: Routes.Landing,
    },
    {
      label: "Demo",
      type: "link",
      url: Routes.Demo,
    },
  ],
};

const lightConfig = {
  ...defaultConfig,
  mode: "light",
};

const withSlotConfig = {
  ...defaultConfig,
  topRightSlot: {
    slotName: "avatar",
  },
};

const withSlotConfigLight = {
  ...withSlotConfig,
  mode: "light",
};

const withCustomEvent = {
  ...defaultConfig,
  menuLinks: [
    {
      label: "Click Me",
      type: "button",
      eventName: "button-click",
    },
  ],
};

export {
  defaultConfig,
  lightConfig,
  withSlotConfig,
  withCustomEvent,
  withSlotConfigLight,
};
