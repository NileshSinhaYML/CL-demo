"use-strict";
import { landingPageConfig } from "./constants/landing.config";

export const setCustomElementProps = () => {
  let headerComponents = [];
  landingPageConfig?.options?.forEach(({ config }) => {
    const elem = document.createElement("header-component");
    elem.navOptions = config;
    headerComponents.push(elem);
  });
  return headerComponents;
};
