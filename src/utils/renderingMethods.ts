import { byThemeImages, IAppImg } from "../types/types.ts";
import { createElementWithAttribute } from "./domManipulation.ts";
import { themes } from "../main.ts";
import { getReverseTheme } from "../script/theme.ts";

export const renderAppImg = (wrapper: HTMLElement, appImg: IAppImg) => {
  const { all: allThemeImg } = appImg as { all: string };
  if (allThemeImg) {
    const img = createElementWithAttribute("img", {
      src: allThemeImg,
    });
    wrapper.appendChild(img);
    return;
  }

  themes.forEach((theme) => {
    const themeImg = createElementWithAttribute("img", {
      src: (appImg as byThemeImages)[theme],
      className: `hidden-on-${getReverseTheme(theme)}`,
    });
    themeImg.setAttribute("part", `img-${theme}`);
    wrapper.appendChild(themeImg);
  });
};
