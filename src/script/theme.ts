import { Themes } from "../components/Maps/types.ts";

export const getInitTheme = (): Themes => {
  const currentTheme = getCurrentTheme();

  if (currentTheme) return currentTheme;
  console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
};

export const getCurrentTheme = () => {
  return (document.body.getAttribute("data-theme") ||
    window.localStorage.getItem("theme")) as Themes | null;
};
export const setThemeOfApp = () => {
  document.body.setAttribute("data-theme", getInitTheme());
};
export const showBody = () => {
  document.body.style.visibility = "visible";
  setTimeout(() => {
    document.body.style.transition = " color, background-color .3s ease-out";
  }, 100);
};

export const getReverseTheme = (theme: Themes) => {
  if (theme === "light") {
    return "dark";
  }
  return "light";
};
