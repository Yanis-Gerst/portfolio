import { setupParallax } from "./parallax.ts";
import { renderMap } from "../components/Maps/maps.ts";
import { addTextRevealAnimation } from "./welcomeAnimation.ts";

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
  const animationDate = window.localStorage.getItem("animationDate");
  const welcomeContainer = document.querySelector(
    ".pre-hero"
  ) as HTMLDivElement;
  if (!welcomeContainer) throw Error("can't find welcome container");

  if (welcomeAnimationAldreadyPlay(animationDate)) {
    welcomeContainer.style.display = "none";
    return;
  }
  addTextRevealAnimation();
};

const welcomeAnimationAldreadyPlay = (animationData: string | null) => {
  if (!animationData) return false;
  const minuteSinceLastAnimation =
    (Date.now() - parseInt(animationData)) / (1000 * 60);
  return minuteSinceLastAnimation < 5;
};

export const setupLandingPage = () => {
  hiddenScrollArrowOnScroll();
  setupParallax();
  renderMap();
  handleWelcomeAnimation();
};
