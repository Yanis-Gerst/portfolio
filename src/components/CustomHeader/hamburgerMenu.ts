import {
  createElementWithAttribute,
  createShadowDomWithStyle,
} from "../../utils/domManipulation.ts";
import style from "./style.css?inline";

type IClassNameConfig = {
  base: string;
  open: string;
};

export class HamburgerMenu extends HTMLElement {
  menuWrapper: HTMLElement;
  menuChildren: HTMLElement;
  menu: HTMLDivElement;
  menuToggle: HTMLElement;
  classNameConfig: IClassNameConfig;
  private handleBreakpoint: (() => void) | undefined;
  open: boolean;

  constructor(
    menuWrapper: HTMLElement,
    menuChildren: HTMLElement,
    menuToggle: HTMLElement,
    classNameConfig: IClassNameConfig,
  ) {
    super();
    this.menuWrapper = menuWrapper;
    this.menuChildren = menuChildren;
    this.menuToggle = menuToggle;
    this.classNameConfig = classNameConfig;
    this.open = false;
    this.menu = createElementWithAttribute("div", {
      className: classNameConfig.base,
    });
    createShadowDomWithStyle(this.menu, style);
    this.render();
  }

  render() {
    if (!this.menu.shadowRoot)
      throw Error("Hamburger Menu shadow DOM not defined");
    document.body.appendChild(this.menu);
    this.menu.shadowRoot.appendChild(this.menuChildren);
    this.menuToggle.addEventListener("click", () => this.handleMenu());
  }

  handleMenu() {
    console.log("YO", this.menu);
    if (this.open) {
      const halfOfTransition = 150;
      this.closeMenu();
      setTimeout(
        () => this.menuWrapper.classList.remove(this.classNameConfig.open),
        halfOfTransition,
      );
      return;
    }
    this.openMenu();
    this.menuWrapper.classList.add(this.classNameConfig.open);
  }

  closeMenu() {
    this.menu.classList.remove(this.classNameConfig.open);
    this.open = false;
  }

  openMenu() {
    this.open = true;
    this.menu.classList.add(this.classNameConfig.open);
  }

  closeMenuOnBreakpoint() {
    if (window.innerWidth >= 1024) return;
    if (!this.open) return;
    this.closeMenu();
  }

  connectedCallback() {
    this.handleBreakpoint = () => this.closeMenuOnBreakpoint();
    window.addEventListener("resize", this.handleBreakpoint);
  }

  disconnectedCallback() {
    if (!this.handleBreakpoint)
      throw Error("Handle breakpoint function not defined");
    window.removeEventListener("resize", this.handleBreakpoint);
  }
}

customElements.define("hamburger-menu", HamburgerMenu);
