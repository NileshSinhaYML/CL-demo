"use-strict";
import "./third-party";
import { getHeaderVariants } from "./getHeaderVariants";
import { setCustomElementProps } from "./setCustomElementProps";
import "./styles/main.scss";

(() => {
  const app = document.querySelector("body");
  const containerDiv = document.createElement("div");
  containerDiv.setAttribute("id", "app");
  containerDiv.innerHTML = getHeaderVariants();
  app.appendChild(containerDiv);
  setCustomElementProps().forEach((elem, index) => {
    document.querySelectorAll(".app-landing-variant")[index].appendChild(elem);
  });
})();
