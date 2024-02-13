import gsap from "gsap";
import { TextPlugin } from "gsap/all";
gsap.registerPlugin(TextPlugin);

const getButtonTextContainer = (submitButton: HTMLButtonElement) => {
  const buttonTextContainer = submitButton.querySelectorAll(
    ".button-text-container p"
  );

  if (!buttonTextContainer) throw Error("Can't find button text container");
  return buttonTextContainer;
};

export const pendingAnimation = (submitButton: HTMLButtonElement) => {
  const buttonTextContainer = getButtonTextContainer(submitButton);
  const sendingParagraph = buttonTextContainer[1];

  const timeline = gsap.timeline();

  timeline.to(buttonTextContainer, {
    yPercent: -100,
    ease: "power3.out",
    duration: 0.3,
  });

  timeline.set(sendingParagraph, { text: "Sending.", delay: 1 });
  timeline.set(sendingParagraph, { text: "Sending..", delay: 1 });
  timeline.set(sendingParagraph, { text: "Sending...", delay: 1 });

  return timeline;
};

export const sentAnimation = (
  submitButton: HTMLButtonElement,
  onComplete: () => void
) => {
  const buttonTextContainer = getButtonTextContainer(submitButton);

  gsap.to(buttonTextContainer, {
    yPercent: -200,
    ease: "power3.out",
    duration: 0.3,
    onComplete,
  });
};

export const idleStateAnimation = (submitButton: HTMLButtonElement) => {
  const buttonTextContainer = getButtonTextContainer(submitButton);
  gsap.set(buttonTextContainer, {
    yPercent: -100,
  });
  gsap.to(buttonTextContainer, {
    yPercent: 0,
    ease: "power3.out",
    duration: 0.3,
  });
};
