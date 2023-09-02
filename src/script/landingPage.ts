import { setupParallax } from "./parallax.ts";
import { renderMap } from "../components/Maps/maps.ts";

const hiddenScrollArrowOnScroll = () => {
  window.addEventListener("scroll", () => {
    const scrollArrow = document.querySelector(
      ".scroll-arrow",
    ) as HTMLDivElement;
    if (!scrollArrow) return;
    if (window.scrollY > 100) {
      scrollArrow.style.opacity = "0";
      return;
    }
    scrollArrow.style.opacity = "1";
  });
};

export const setupLandingPage = () => {
  hiddenScrollArrowOnScroll();
  setupParallax();
  renderMap();
};
