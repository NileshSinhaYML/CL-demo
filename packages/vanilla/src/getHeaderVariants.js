"use strict";
import { landingPageConfig } from "./constants/landing.config";

export const getHeaderVariants = () => {
  const tempContainer = document.createElement("div");
  landingPageConfig?.options?.forEach(
    ({ name, config, hasSlot, hasCustomStyling }, index) => {
      const container = document.createElement("div");
      const heading = document.createElement("h2");
      heading.textContent = name;
      container.setAttribute(
        "class",
        `app-landing-variant ${
          hasCustomStyling ? "app-landing-variant-custom" : ""
        }`
      );
      container.appendChild(heading);
      tempContainer.appendChild(container);
    }
  );
  return tempContainer;
};
