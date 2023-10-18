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
  menuToggles: HTMLElement[];
  classNameConfig: IClassNameConfig;
  private handleBreakpoint: (() => void) | undefined;
  open: boolean;

  constructor(
    menuWrapper: HTMLElement,
    menuChildren: HTMLElement,
    menuToggles: HTMLElement[],
    classNameConfig: IClassNameConfig
  ) {
    super();
    this.menuWrapper = menuWrapper;
    this.menuChildren = menuChildren;
    this.menuToggles = menuToggles;
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

    this.menu.setAttribute("aria-hidden", "true");
    document.body.appendChild(this.menu);
    this.menu.shadowRoot.appendChild(this.menuChildren);
    this.menuToggles.forEach((menuToggle) =>
      menuToggle.addEventListener("click", () => this.handleMenu())
    );
    this.connectedCallback();
  }

  handleMenu() {
    if (this.open) {
      this.closeMenu();
      return;
    }
    this.openMenu();
  }

  closeMenu() {
    this.open = false;
    this.menu.classList.remove(this.classNameConfig.open);
    this.menu.setAttribute("aria-hidden", "false");
  }

  openMenu() {
    this.open = true;
    this.menu.classList.add(this.classNameConfig.open);
    this.menu.setAttribute("aria-hidden", "true");
  }

  closeMenuOnBreakpoint() {
    if (window.innerWidth <= 1024) return;
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
    this.menu.remove();
  }
}

customElements.define("hamburger-menu", HamburgerMenu);
