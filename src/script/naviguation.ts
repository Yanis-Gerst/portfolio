import { navigate } from "./router.ts";

export type INavConfig = {
  label: string;
  scrollTo: string;
  block: "start" | "center";
};

export const navConfigs: INavConfig[] = [
  {
    label: "À props de moi",
    scrollTo: "about",
    block: "center",
  },
  {
    label: "Mes projets",
    scrollTo: "project",
    block: "start",
  },
  {
    label: "Contactez moi",
    scrollTo: "contact",
    block: "center",
  },
];

export const handleAnchorLinksToIdElement = (anchors: HTMLAnchorElement[]) => {
  anchors
    .filter((anchor) => anchor.href.includes("#"))
    .forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        let linkToIdOfElement = anchor.getAttribute("href");
        if (!linkToIdOfElement) return;
        linkToIdOfElement = linkToIdOfElement.replace("#", "");
        if (window.location.pathname === "/") {
          scrollToElement(linkToIdOfElement);
          return;
        }
        return navigate("/", () => {
          setTimeout(() => scrollToElement(linkToIdOfElement as string), 0);
        });
      });
    });
};

const scrollToElement = (eltId: string) => {
  const elementToScrollTo = document.getElementById(eltId) as HTMLElement;
  const config = navConfigs.find(
    (config) => config.scrollTo === eltId
  ) as INavConfig;

  if (config.block === "start") {
    const scrollMargin = 128;

    window.scrollTo({
      top: elementToScrollTo.offsetTop - scrollMargin,
    });
    return;
  }

  elementToScrollTo?.scrollIntoView({
    block: config.block,
  });
};
