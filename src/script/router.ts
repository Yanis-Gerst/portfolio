import { appId } from "../main.ts";
import { createElementWithAttribute } from "../utils/domManipulation.ts";
import { setupLandingPage } from "./landingPage.ts";
import { setThemeOfApp, showBody } from "./theme.ts";
import { renderDetailsPage } from "./detailsPage.ts";

type IRoute = {
  [key: string]: { html: string; css: string; js?: Function };
};
let isFirstLoad = true;
let currentLink: HTMLLinkElement | null = null;
export const route = (e: Event & { currentTarget: HTMLAnchorElement }) => {
  e.preventDefault();
  window.history.pushState({}, "", e.currentTarget.href);
  handleLocation();
};

const projectDetails = {
  html: "src/pages/details.html",
  css: "src/styles/details/detailsPage.css",
} as const;
export const routes: IRoute = {
  "4O4": {
    html: "/src/pages/notFound.html",
    css: "/src/styles/404.css",
  },
  "/": {
    html: "index.html",
    css: "src/styles/landing/landingPage.css",
    js: setupLandingPage,
  },
  "/things": {
    ...projectDetails,
    js: () => renderDetailsPage("things"),
  },
  "/pizza-legend": {
    ...projectDetails,
    js: () => renderDetailsPage("pizzaLegend"),
  },
  "/student-platform": {
    ...projectDetails,
    js: () => renderDetailsPage("studentPlatform"),
  },
};

export const handleLocation = async (): Promise<void> => {
  const path = window.location.pathname;

  const htmlFilePath = routes[path].html || routes["404"].html;
  const html = await fetch(htmlFilePath).then((data) => data.text());
  const app = document.getElementById(appId) as HTMLElement;
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
  if (currentLink) {
    currentLink.remove();
    currentLink = null;
  }
  const head = document.getElementsByTagName("head")[0];
  const css = routes[path].css || routes["404"].css;
  const linkElement = createElementWithAttribute("link", {
    rel: "stylesheet",
    type: "text/css",
    href: css,
  });
  head.appendChild(linkElement);
  currentLink = linkElement;
};

const handleJs = (path: string) => {
  const setup = routes[path].js;
  if (!setup) return;
  setup();
};

window.onpopstate = handleLocation;
