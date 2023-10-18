import gsap from "gsap";
import { SplitText } from "../lib/splitText";
import { CustomEase } from "gsap/CustomEase";

export const addTextRevealAnimation = () => {
  const text = document.querySelector(".text-reveal");
  const splitText = new SplitText(text);
  const chars = splitText.chars;

  const timeline = gsap.timeline();
  console.log(splitText.chars);
  timeline.set(chars, { yPercent: 120 });
  timeline.to(chars, {
    yPercent: 0,
    stagger: 0.05,
    duration: 1,
    ease: "back.out",
    delay: 0.3,
  });
  timeline.to(chars, {
    yPercent: -130,
    stagger: 0.05,
    duration: 0.5,
    ease: CustomEase.create("disreveal-ease", "1, -0.03, 1, 0.01"),
  });
};
