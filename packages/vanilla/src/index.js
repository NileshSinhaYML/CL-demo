"use strict";
import "./third-party";

import { getHeaderVariants } from "./getHeaderVariants";
import { setCustomElementProps } from "./setCustomElementProps";
import { attachCustomEvent } from "./attachCustomEvent";
import { toggleTheme } from "./toggleTheme";

import "./styles/main.scss";

(async () => {
  const app = document.querySelector("body");
  const containerDiv = document.createElement("div");
  containerDiv.setAttribute("id", "app");
  containerDiv.setAttribute("class", "app-landing");
  containerDiv.innerHTML = getHeaderVariants();
  app.appendChild(containerDiv);
  await setCustomElementProps().forEach((elem, index) => {
    document.querySelectorAll(".app-landing-variant")[index].appendChild(elem);
  });
  await toggleTheme();
  await attachCustomEvent();
})();
