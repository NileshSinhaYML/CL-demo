"use-strict";
export const createAvatar = (
  isText = true,
  text = "Avatar",
  source = "",
  imageAlt = ""
) => {
  const container = document.createElement("div");
  const wrapper = document.createElement("div");
  container.setAttribute(
    "class",
    `app-avatar d-flex align-items-center justify-content-center ${
      isText ? "app-avatar-text" : ""
    }`
  );
  container.innerHTML = `<button class="avatar-btn">${
    isText ? `<p>${text?.charAt}</p>` : `<img src=${source} alt=${imageAlt} />`
  }</button>`;
  wrapper.appendChild(container);
  return wrapper;
};
