import simpleParallax from "simple-parallax-js";

export const setupParallax = () => {
  const decoration = document.getElementsByClassName("hero__decoration");
  new simpleParallax(decoration, {
    scale: 6,
    overflow: true,
  });
};
