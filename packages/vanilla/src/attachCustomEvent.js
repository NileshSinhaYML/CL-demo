"use strict";
import { landingPageConfig } from "./constants/landing.config";
export const attachCustomEvent = () => {
  const indexELem = landingPageConfig?.options?.findIndex(
    ({ name }) => name === "With custom Event"
  );
  const customElem = document.querySelectorAll("header-component")[indexELem];
  const eventName =
    landingPageConfig?.options[indexELem]?.config?.menuLinks[0]?.eventName;
  customElem.addEventListener(eventName, () => alert("clicked"));
};
