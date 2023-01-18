"use strict";
import "./third-party";

import { getHeaderVariants } from "./getHeaderVariants";
import { setCustomElementProps } from "./setCustomElementProps";
import { attachCustomEvent } from "./attachCustomEvent";
import { toggleTheme } from "./toggleTheme";

import "./styles/main.scss";

(() => {
  const app = document.querySelector("body");
  const containerDiv = document.createElement("div");
  const appHeading = document.createElement("h1");
  appHeading.textContent = "VanillaJS Application utilizing Header Component";
  console.log(appHeading);
  containerDiv.setAttribute("id", "app");
  containerDiv.setAttribute("class", "app-landing");
  containerDiv.appendChild(appHeading);
  containerDiv.appendChild(getHeaderVariants());
  app.appendChild(containerDiv);
  setCustomElementProps().forEach((elem, index) => {
    document.querySelectorAll(".app-landing-variant")[index].appendChild(elem);
  });
  toggleTheme();
  attachCustomEvent();
})();
