"use strict";

export const eventFunctions = {
  subscribe: (eventName, cb, isCapture = false) =>
    window.addEventListener(eventName, cb, isCapture),
  unsubscribe: (cb, isCapture = false) =>
    window.removeEventListener(eventName, cb, isCapture),
};
