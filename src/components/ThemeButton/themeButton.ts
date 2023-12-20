import {
  createElementWithAttribute,
  createShadowDomWithStyle,
} from "../../utils/domManipulation.ts";
import { Themes } from "../Maps/types.ts";
import {
  getCurrentTheme,
  getInitTheme,
  getReverseTheme,
} from "../../script/theme.ts";

import styles from "./style.css?inline";
import { handlerHover } from "../../script/customCursor.ts";

export default class ThemeButton extends HTMLElement {
  shadow: ShadowRoot;
  theme: Themes;
  button: HTMLButtonElement;
  icons: {
    [key in Themes]: string;
  };
  static themeAttribute = "data-theme";

  constructor() {
    super();
    this.shadow = createShadowDomWithStyle(this, styles);
    this.theme = this.setTheme();
    this.icons = {
      light:
        '<svg role="img" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        "<title>Sun icon to see the light mode</title> \n" +
        '<path d="M4.18909 3.13425L2.88 1.82648L1.85455 2.85662L3.15636 4.16438L4.18909 3.13425ZM0 7.26941H2.18182V8.73059H0V7.26941ZM7.27273 0H8.72727V2.15525H7.27273V0ZM13.12 1.82283L14.144 2.85078L12.8422 4.15854L11.8189 3.12986L13.12 1.82283ZM11.8109 12.8658L13.1127 14.1808L14.1382 13.1507L12.8291 11.8429L11.8109 12.8658ZM13.8182 7.26941H16V8.73059H13.8182V7.26941ZM8 3.61644C5.59273 3.61644 3.63636 5.58173 3.63636 8C3.63636 10.4183 5.59273 12.3836 8 12.3836C10.4073 12.3836 12.3636 10.4183 12.3636 8C12.3636 5.58173 10.4073 3.61644 8 3.61644ZM8 10.9224C6.39273 10.9224 5.09091 9.61461 5.09091 8C5.09091 6.38539 6.39273 5.07763 8 5.07763C9.60727 5.07763 10.9091 6.38539 10.9091 8C10.9091 9.61461 9.60727 10.9224 8 10.9224ZM7.27273 13.8447H8.72727V16H7.27273V13.8447ZM1.85455 13.1434L2.88 14.1735L4.18182 12.8584L3.15636 11.8283L1.85455 13.1434Z" fill="black"/>\n' +
        "</svg>\n",
      dark:
        '<svg role="img" width="16" class=\'hid\' height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        "<title>Moon icon to see the dark mode</title> \n" +
        '<path d="M6.23366 1.98499C4.83601 8.02001 9.44909 11.918 12.8017 13.0305C11.6099 13.903 10.1265 14.3992 8.57449 14.3992C4.79314 14.3992 1.7149 11.5258 1.7149 7.996C1.7149 5.23462 3.60129 2.87344 6.23366 1.98499ZM8.56592 0C3.77278 0 0 3.62581 0 7.996C0 12.4142 3.84137 16 8.57449 16C11.7556 16 14.5166 14.3832 16 11.982C9.56056 11.7819 5.63344 5.23462 8.86602 0C8.76313 0 8.66881 0 8.56592 0Z" fill="black"/>\n' +
        "</svg>\n",
    };
    this.button = createElementWithAttribute("button", {
      className: "theme-button",
    });
    this.button.setAttribute("part", "theme-button");
    this.render();
  }

  render() {
    this.button.innerHTML = this.icons[this.theme];
    this.shadow.appendChild(this.button);
  }

  handleThemeChange() {
    if (!this.theme)
      throw new Error("themButton Component theme is not defined");
    this.theme = getReverseTheme(this.theme);
    document.body.setAttribute(ThemeButton.themeAttribute, this.theme);
    window.localStorage.setItem("theme", this.theme);
    this.button.innerHTML = this.icons[this.theme];
    const themeChangeEvent = new Event("theme-change");
    window.dispatchEvent(themeChangeEvent);
  }

  setTheme() {
    let theme = getCurrentTheme();
    if (!theme) {
      return getInitTheme();
    }
    return theme;
  }

  connectedCallback() {
    this.button.addEventListener("click", this.handleThemeChange.bind(this));
    handlerHover(this.shadow);
  }
}
