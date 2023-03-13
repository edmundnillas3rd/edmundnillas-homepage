const linksContainer = document.querySelector(".links-container");
const button = document.querySelector("#burger-button");

const anchors = document.querySelector(".links-container");

window.addEventListener("DOMContentLoaded", (e) => {
  button.addEventListener("click", (e) => {
    const isOpen = linksContainer.getAttribute("aria-expanded") === "true";

    linksContainer.setAttribute("aria-expanded", !isOpen);
  });

  anchors.childNodes.forEach((anchor) => {
    anchor.addEventListener("click", () => {
      const isOpen = linksContainer.getAttribute("aria-expanded") === "true";

      linksContainer.setAttribute("aria-expanded", false);
    });
  });
});
