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
import gsap from "gsap";

const hamburgerMenuClassName = "custom-header__hamburger-menu";
const openMenuClassName = "custom-header__hamburger-menu--open";
export default class CustomHeader extends HTMLElement {
  open: boolean;
  shadow: ShadowRoot;
  hamburgerMenu: HamburgerMenu | undefined;
  handleThemeChange: (() => void) | undefined;
  currentAnimation: gsap.core.Tween | null;

  constructor() {
    super();
    this.open = false;
    this.currentAnimation = null;
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
      '<svg role="img" width="32" height="32" viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg">\n' +
      "<title>Open the navigation Menu</title>\n" +
      '<g id="Hamburger Menu">\n' +
      '<path id="Top" d="M8 10.6667L24 10.6667" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>\n' +
      '<path id="Mid" d="M8 16L24 16" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>\n' +
      '<path id="Bot" d="M8 21.3333L24 21.3333" stroke="#121212" stroke-linecap="round" stroke-linejoin="round"/>\n' +
      "</g>\n" +
      "</svg>\n";

    const hamburgerMenuNav = createElementWithAttribute("div", {
      className: "hamburger-menu__nav",
    });

    const crossIconWrapper = createElementWithAttribute("div", {
      className: "custom-header__hamburger-menu__cross-icon",
    });
    crossIconWrapper.innerHTML =
      '<svg role="img" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      "<title>Close the navigation menu</title>\n" +
      '<path d="M8 9L24 25" stroke="white" stroke-opacity="0.87" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
      '<path d="M8 25L24 9" stroke="white" stroke-opacity="0.87" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
      "</svg>\n";

    this.shadow.appendChild(headerWrapper);

    headerWrapper.appendChild(logoContainer);
    headerWrapper.appendChild(hamburgerImg);
    headerWrapper.appendChild(navContainer);

    navContainer.appendChild(navList);

    logoContainer.appendChild(logo);

    hamburgerMenuNav.appendChild(crossIconWrapper);
    hamburgerMenuNav.appendChild(navContainer.cloneNode(true));

    this.hamburgerMenu = new HamburgerMenu(
      headerWrapper,
      hamburgerMenuNav,
      [hamburgerImg, crossIconWrapper],
      {
        open: openMenuClassName,
        base: hamburgerMenuClassName,
      }
    );
  }

  appendAllNav(navList: HTMLElement) {
    navConfigs.forEach((navConfig) => {
      const li = document.createElement("li");
      const anchorElement = document.createElement("a");
      anchorElement.href = `#${navConfig.scrollTo}`;
      anchorElement.textContent = navConfig.label;
      li.appendChild(anchorElement);
      navList.appendChild(li);
    });
  }

  onThemeChange() {
    this.animateHeader();
  }

  connectedCallback() {
    if (!this.hamburgerMenu) {
      throw Error(
        "Not match found for a hamburger Menu in Custom header Component"
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
    this.hamburgerMenu?.disconnectedCallback();
    if (!this.handleThemeChange)
      throw Error("Handle theme function not defined");
    window.removeEventListener("theme-change", this.handleThemeChange);
  }

  animateHeader() {
    const wrapper = this.shadow.querySelector(".wrapper");
    if (!wrapper) return;
    if (this.currentAnimation) {
      this.currentAnimation.kill();
    }

    gsap.set(wrapper, { opacity: 0 });
    const animation = gsap.to(wrapper, {
      opacity: 1,
      delay: 0.3,
      ease: "power2.out",
    });

    this.currentAnimation = animation;
  }
}
