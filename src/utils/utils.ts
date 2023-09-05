import { createElementWithAttribute } from "./domManipulation.ts";

export const toKebabCase = (str: string) =>
  str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? "-" : "") + $.toLowerCase(),
  );

export const findElementOrThrowError = <T extends HTMLElement>(
  selector: string,
) => {
  const element = document.querySelector(selector) as T;
  if (!element) {
    throw new Error(`Element with selector "${selector}" not found.`);
  }
  return element;
};

export const renderTags = (
  wrapper: HTMLUListElement,
  tagsContents: string[],
) => {
  if (tagsContents.length === 0) {
    wrapper.remove();
    return 0;
  }
  tagsContents.forEach((tagContent) => {
    const li = createElementWithAttribute("li", {
      className: "tag",
    });
    li.textContent = tagContent;
    wrapper.appendChild(li);
  });
  return 1;
};
