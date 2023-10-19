import { setupParallax } from "./parallax.ts";
import { renderMap } from "../components/Maps/maps.ts";
import {
  addTextRevealAnimation,
  welcomeAnimationState,
} from "./welcomeAnimation.ts";

const hiddenScrollArrowOnScroll = () => {
  window.addEventListener("scroll", () => {
    const scrollArrow = document.querySelector(
      ".scroll-arrow"
    ) as HTMLDivElement;
    if (!scrollArrow) return;
    if (window.scrollY > 100) {
      scrollArrow.style.opacity = "0";
      return;
    }
    scrollArrow.style.opacity = "1";
  });
};

const handleWelcomeAnimation = () => {
  const { isPlayed } = welcomeAnimationState;
  const welcomeContainer = document.querySelector(
    ".pre-hero"
  ) as HTMLDivElement;
  if (!welcomeContainer) throw Error("can't find welcome container");

  if (isPlayed) {
    welcomeContainer.style.display = "none";
    return;
  }
  addTextRevealAnimation();
};

export const setupLandingPage = () => {
  hiddenScrollArrowOnScroll();
  setupParallax();
  renderMap();
  handleWelcomeAnimation();
};
