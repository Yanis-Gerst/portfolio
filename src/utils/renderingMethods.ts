import { IAppImg } from "../types/types.ts";
import { createElementWithAttribute } from "./domManipulation.ts";

export const renderAppImg = (wrapper: HTMLElement, appImg: IAppImg) => {
  const { all: allThemeImg, alt } = appImg;

  if (allThemeImg) {
    const img = createElementWithAttribute("img", {
      src: allThemeImg,
      alt,
      loading: "lazy",
    });
    wrapper.appendChild(img);
    return;
  }
};
