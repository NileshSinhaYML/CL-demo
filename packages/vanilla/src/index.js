import "./third-party";
(function () {
  const app = document.querySelector("body");
  const containerDiv = document.createElement("div");
  containerDiv.setAttribute("id", "app");
  containerDiv.innerHTML = "<header-component />";
  app.appendChild(containerDiv);
})();
