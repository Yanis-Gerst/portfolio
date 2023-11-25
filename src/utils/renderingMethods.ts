import { IAppImg } from "../types/types.ts";
import { createElementWithAttribute } from "./domManipulation.ts";

export const renderAppImg = (wrapper: HTMLElement, appImg: IAppImg) => {
  const { all: allThemeImg, alt } = appImg;

  if (allThemeImg) {
    const img = createElementWithAttribute("img", {
      src: allThemeImg,
      alt,
    });
    wrapper.appendChild(img);
    return;
  }

  // themes.forEach((theme) => {
  //   const themeImg = createElementWithAttribute("img", {
  //     src: (appImg as byThemeImages)[theme],
  //     className: `hidden-on-${getReverseTheme(theme)}`,
  //     alt,
  //   });
  //   themeImg.setAttribute("part", `img-${theme}`);
  //   wrapper.appendChild(themeImg);
  // });
};
