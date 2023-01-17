"use strict";
import { landingPageConfig } from "./constants/landing.config";
export const attachCustomEvent = () => {
  const customEventHandler = () => alert("clicked");
  const indexELem = landingPageConfig?.options?.findIndex(({ config }) =>
    config?.menuLinks?.some(({ type }) => type === "button")
  );
  const customElem = document.querySelectorAll("header-component")[indexELem];
  const eventNames = landingPageConfig?.options[
    indexELem
  ]?.config?.menuLinks?.map(({ eventName }) => eventName);
  eventNames.forEach((event) => {
    customElem.addEventListener(event, customEventHandler);
  });
};
