"use-strict";
import { landingPageConfig } from "./constants/landing.config";
import { createAvatar } from "./avatar";
import { imageSources } from "./constants/imageSources";

export const setCustomElementProps = () => {
  let headerComponents = [];
  landingPageConfig?.options?.forEach(({ config, hasSlot }) => {
    const elem = document.createElement("header-component");
    elem.navOptions = config;
    if (hasSlot) {
      elem.innerHTML = `<div slot=${config?.topRightSlot?.slotName}>${
        createAvatar(false, "", imageSources.dark, "Theme-icon").innerHTML
      }</div>`;
    }
    headerComponents.push(elem);
  });
  return headerComponents;
};
