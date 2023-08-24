import hamburgerIcon from "../../assets/hamburger-menu.svg";
import {
  createElementWithAttribute,
  createShadowDomWithStyle,
} from "../../utils/domManipulation.ts";
import style from "./style.css?inline";

type INavConfig = {
  label: string;
  scrollTo: string;
  block: "start" | "center";
};

const navConfigs: INavConfig[] = [
  {
    label: "About",
    scrollTo: "about",
    block: "center",
  },
  {
    label: "Work",
    scrollTo: "project",
    block: "start",
  },
  {
    label: "Contact",
    scrollTo: "contact",
    block: "center",
  },
];

const openMenuClassName = "wrapper__hamburger-menu--open";
export default class CustomHeader extends HTMLElement {
  open: boolean;
  shadow: ShadowRoot;
  hamburgerMenu: Element | undefined;
  handleBreakpoint: (() => void) | undefined;
  constructor() {
    super();
    this.open = false;
    this.shadow = createShadowDomWithStyle(this, style);
    this.render();
  }

  render() {
    const headerWrapper = createElementWithAttribute("header", {
      className: "wrapper",
    });

    const logoContainer = createElementWithAttribute("div", {});
    const logo = createElementWithAttribute("h1", {
      className: "header__logo",
    });
    logo.textContent = "Gerst Yanis";

    const navContainer = createElementWithAttribute("nav", {
      className: "wrapper__navs",
    });
    const navList = createElementWithAttribute("ul", {
      className: "navs__list",
    });
    this.appendAllNav(navList);

    const hamburgerImg = createElementWithAttribute("img", {
      src: hamburgerIcon,
      alt: "open navigation menu",
      className: "wrapper__hamburger",
    });

    const menuContainer = createElementWithAttribute("div", {
      className: "wrapper__hamburger-menu",
    });

    this.shadow.appendChild(headerWrapper);

    headerWrapper.appendChild(logoContainer);
    headerWrapper.appendChild(hamburgerImg);
    headerWrapper.appendChild(navContainer);
    headerWrapper.appendChild(menuContainer);

    navContainer.appendChild(navList);

    logoContainer.appendChild(logo);

    menuContainer.appendChild(navContainer.cloneNode(true));
    hamburgerImg.addEventListener("click", () => this.handleMenu());
  }

  handleMenu() {
    const hamburgerMenu = this.shadow.querySelector(".wrapper__hamburger-menu");
    if (!hamburgerMenu) {
      throw Error(
        "Not match found for a hamburger Menu in Custom header Component",
      );
    }

    if (this.open) {
      hamburgerMenu.classList.remove(openMenuClassName);
      this.open = false;
      return;
    }
    this.open = true;
    hamburgerMenu.classList.add(openMenuClassName);
  }

  handleAnchorLink = () => {
    const allAnchors = [
      ...Array.from(this.shadow.querySelectorAll("a")),
      ...Array.from(document.querySelectorAll("a")),
    ];

    allAnchors.forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        let linkToIdOfElement = anchor.getAttribute("href");
        if (!linkToIdOfElement) return;
        linkToIdOfElement = linkToIdOfElement.replace("#", "");
        const elementToScrollTo = document.getElementById(
          linkToIdOfElement,
        ) as HTMLElement;
        const config = navConfigs.find(
          (config) => config.scrollTo === linkToIdOfElement,
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
      });
    });
  };

  appendAllNav(navList: HTMLElement) {
    navConfigs.forEach((navConfig) => {
      const anchorElement = document.createElement("a");
      anchorElement.href = `#${navConfig.scrollTo}`;
      anchorElement.textContent = navConfig.label;
      navList.appendChild(anchorElement);
    });
  }

  closeMenu() {
    this.hamburgerMenu?.classList.remove(openMenuClassName);
    this.open = false;
  }

  closeMenuOnBreakpoint() {
    if (window.innerWidth != 1024) return;
    if (!this.open) return;
    this.closeMenu();
  }

  connectedCallback() {
    this.hamburgerMenu = this.shadow.querySelector(
      ".wrapper__hamburger-menu",
    ) as Element;
    if (!this.hamburgerMenu) {
      throw Error(
        "Not match found for a hamburger Menu in Custom header Component",
      );
    }
    this.handleAnchorLink();
    this.handleBreakpoint = () => this.closeMenuOnBreakpoint();
    window.addEventListener("resize", this.handleBreakpoint);
  }

  disconnectedCallback() {
    if (!this.handleBreakpoint)
      throw Error("Handle breakpoint function not defined");
    window.removeEventListener("resize", this.handleBreakpoint);
  }
}
