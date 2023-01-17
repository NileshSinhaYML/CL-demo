"use strict";
import { withSlotConfigLight, withSlotConfig } from "./constants/header.config";
import { imageSources } from "./constants/imageSources";
import { landingPageConfig } from "./constants/landing.config";
const toggleTheme = () => {
  const handleToggle = () => {
    const arrIndex = landingPageConfig?.options?.findIndex(
      ({ hasSlot }) => hasSlot
    );
    let mode = document.querySelectorAll(
      ".app-landing-variant header-component"
    )[arrIndex].navOptions.mode;
    const isLightMode = mode === "light";
    document
      .querySelector(".avatar-btn img")
      .setAttribute(
        "src",
        isLightMode ? imageSources.dark : imageSources.light
      );
    document.querySelectorAll(".app-landing-variant header-component")[
      arrIndex
    ].navOptions = isLightMode ? withSlotConfig : withSlotConfigLight;
  };
  document.querySelector(".avatar-btn").addEventListener("click", handleToggle);
};

export { toggleTheme };
