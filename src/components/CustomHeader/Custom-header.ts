import {
  createElementWithAttribute,
  createShadowDomWithStyle,
} from "../../utils/domManipulation.ts";
import style from "./style.css?inline";
import { HamburgerMenu } from "./hamburgerMenu.ts";
import {
  handleAnchorLinksToIdElement,
  navConfigs,
} from "../../script/naviguation.ts";

const hamburgerMenuClassName = "custom-header__hamburger-menu";
const openMenuClassName = "custom-header__hamburger-menu--open";
export default class CustomHeader extends HTMLElement {
  open: boolean;
  shadow: ShadowRoot;
  hamburgerMenu: Element | undefined;
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

    const hamburgerMenuNav = createElementWithAttribute("div", {
      className: "hamburger-menu__nav",
    });

    this.shadow.appendChild(headerWrapper);

    headerWrapper.appendChild(logoContainer);
    headerWrapper.appendChild(hamburgerImg);
    headerWrapper.appendChild(navContainer);

    navContainer.appendChild(navList);

    logoContainer.appendChild(logo);

    hamburgerMenuNav.appendChild(navContainer.cloneNode(true));

    this.hamburgerMenu = new HamburgerMenu(
      headerWrapper,
      hamburgerMenuNav,
      hamburgerImg,
      {
        open: openMenuClassName,
        base: hamburgerMenuClassName,
      },
    );
  }

  appendAllNav(navList: HTMLElement) {
    navConfigs.forEach((navConfig) => {
      const anchorElement = document.createElement("a");
      anchorElement.href = `#${navConfig.scrollTo}`;
      anchorElement.textContent = navConfig.label;
      navList.appendChild(anchorElement);
    });
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
    const allAnchors = [
      ...Array.from(this.shadow.querySelectorAll(".navs__list a")),
      ...Array.from(document.querySelectorAll("a")),
    ] as HTMLAnchorElement[];
    handleAnchorLinksToIdElement(allAnchors);
    this.handleThemeChange = () => this.onThemeChange();
    window.addEventListener("theme-change", this.handleThemeChange);
  }

  disconnectedCallback() {
    this.hamburgerMenu?.remove();
    if (!this.handleThemeChange)
      throw Error("Handle breakpoint function not defined");
    window.removeEventListener("theme-change", this.handleThemeChange);
  }
}
