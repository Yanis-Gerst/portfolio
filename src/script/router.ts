import { appId, routes } from "../main.ts";
import { setThemeOfApp, showBody } from "./theme.ts";

export type IRoute = {
  [key: string]: { html: string; css: string; js?: Function };
};
let isFirstLoad = true;
let currentStyle: HTMLStyleElement | null = null;
export const route = (e: MouseEvent & { currentTarget: HTMLAnchorElement }) => {
  e.preventDefault();
  window.history.pushState({}, "", e.currentTarget.href);
  return handleLocation();
};

export const handleLocation = async (): Promise<void> => {
  const path = window.location.pathname;
  const htmlFilePath = routes[path].html || routes["404"].html;
  const html = await fetch(htmlFilePath).then((data) => data.text());
  const app = document.getElementById(appId) as HTMLElement;
  cleanDom();
  handleCss(path);
  app.innerHTML = html;
  window.scrollTo({
    top: 0,
    behavior: "instant" as ScrollBehavior,
  });
  if (isFirstLoad) {
    setThemeOfApp();
  }
  handleJs(path);
  if (isFirstLoad) {
    isFirstLoad = false;
    setTimeout(() => {
      showBody();
    }, 5);
  }
};

const handleCss = (path: string) => {
  if (currentStyle) {
    currentStyle.remove();
    currentStyle = null;
  }
  const head = document.getElementsByTagName("head")[0];
  const css = routes[path].css || routes["404"].css;
  const styleElement = document.createElement("style");
  styleElement.textContent = css;
  head.appendChild(styleElement);
  currentStyle = styleElement;
};

const handleJs = (path: string) => {
  const setup = routes[path].js;
  if (!setup) return;
  setup();
};

export const navigate = async (
  path: string,
  callback: Function | undefined
) => {
  window.history.pushState({}, "", path);
  await handleLocation();
  if (callback) callback();
};

const cleanDom = () => {
  const toRemove = document.querySelectorAll("body > div:not([id='app'])");
  toRemove.forEach((elt) => elt.remove());
};

window.onpopstate = handleLocation;
