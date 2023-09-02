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

const hamburgerMenuClassName = "custom-header__hamburger-menu";
const openMenuClassName = "custom-header__hamburger-menu--open";
export default class CustomHeader extends HTMLElement {
  open: boolean;
  shadow: ShadowRoot;
  hamburgerMenu: Element | undefined;
  handleBreakpoint: (() => void) | undefined;
  handleThemeChange: (() => void) | undefined;

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
    headerWrapper.setAttribute("part", "wrapper");

    const logoContainer = document.createElement("a");
    logoContainer.href = "/";
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

    const hamburgerImg = createElementWithAttribute("div", {
      className: "wrapper__hamburger",
    });

    hamburgerImg.innerHTML +=
      '<svg width="32" height="32" viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg">\n' +
      '<g id="Hamburger Menu">\n' +
      '<path id="Top" d="M8 10.6667L24 10.6667" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>\n' +
      '<path id="Mid" d="M8 16L24 16" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>\n' +
      '<path id="Bot" d="M8 21.3333L24 21.3333" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>\n' +
      "</g>\n" +
      "</svg>\n";

    const menuContainer = createElementWithAttribute("div", {
      className: hamburgerMenuClassName,
    });

    const hamburgerMenuNav = createElementWithAttribute("div", {
      className: "hamburger-menu__nav",
    });

    this.shadow.appendChild(headerWrapper);

    headerWrapper.appendChild(logoContainer);
    headerWrapper.appendChild(hamburgerImg);
    headerWrapper.appendChild(navContainer);

    createShadowDomWithStyle(menuContainer, style);
    document.body.appendChild(menuContainer);

    navContainer.appendChild(navList);

    logoContainer.appendChild(logo);

    menuContainer.shadowRoot?.appendChild(hamburgerMenuNav);
    hamburgerMenuNav.appendChild(navContainer.cloneNode(true));
    hamburgerImg.addEventListener("click", () => this.handleMenu());
  }

  handleMenu() {
    const wrapper = this.shadow.querySelector(".wrapper") as Element;
    if (!this.hamburgerMenu) {
      throw Error(
        "Not match found for a hamburger Menu in Custom header Component",
      );
    }

    if (this.open) {
      const halfOfTransition = 150;
      this.closeMenu();
      setTimeout(
        () => wrapper.classList.remove(openMenuClassName),
        halfOfTransition,
      );
      return;
    }
    this.open = true;
    wrapper.classList.add(openMenuClassName);
    this.hamburgerMenu.classList.add(openMenuClassName);
  }

  handleAnchorLink = () => {
    const allAnchors = [
      ...Array.from(this.shadow.querySelectorAll(".navs__list a")),
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
    if (window.innerWidth >= 1024) return;
    if (!this.open) return;
    this.closeMenu();
  }

  onThemeChange() {
    const wrapper = this.shadow.querySelector(".wrapper");
    if (!wrapper) return;
    wrapper.classList.add("wrapper--theme-change");
    wrapper.addEventListener("animationend", () => {
      wrapper.classList.remove("wrapper--theme-change");
    });
  }

  connectedCallback() {
    this.hamburgerMenu = document.querySelector(
      `.${hamburgerMenuClassName}`,
    ) as Element;
    if (!this.hamburgerMenu) {
      throw Error(
        "Not match found for a hamburger Menu in Custom header Component",
      );
    }
    this.handleAnchorLink();
    this.handleBreakpoint = () => this.closeMenuOnBreakpoint();
    this.handleThemeChange = () => this.onThemeChange();
    window.addEventListener("resize", this.handleBreakpoint);
    window.addEventListener("theme-change", this.handleThemeChange);
  }

  disconnectedCallback() {
    const menus = document.querySelectorAll(`.${hamburgerMenuClassName}`);

    menus.forEach((elt, index) => {
      if (index === 0) return;
      elt.remove();
    });
    if (!this.handleBreakpoint || !this.handleThemeChange)
      throw Error("Handle breakpoint function not defined");
    window.removeEventListener("resize", this.handleBreakpoint);
    window.removeEventListener("theme-change", this.handleThemeChange);
  }
}
