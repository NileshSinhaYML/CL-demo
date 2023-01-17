"use-strict";
import { landingPageConfig } from "./constants/landing.config";

export const getHeaderVariants = () => {
  let headerVariants = "";
  landingPageConfig?.options?.forEach(
    ({ name, config, hasSlot, hasCustomStyling }, index) => {
      headerVariants += `<div
        class="app-landing-variant ${
          hasCustomStyling ? "app-landing-variant-custom" : ""
        }"
      > <h1>${name}</h1></div>`;
    }
  );
  return headerVariants;
};
