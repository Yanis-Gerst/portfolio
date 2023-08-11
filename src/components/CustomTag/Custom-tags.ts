import {
  createElementWithAttribute,
  createShadowDomWithStyle,
} from "../../utils/domManipulation.ts";
import style from "./style.css?inline";
export default class CustomTags extends HTMLElement {
  text: string | null;
  shadow: ShadowRoot;
  constructor() {
    super();

    this.shadow = createShadowDomWithStyle(this, style);
    this.text = this.getAttribute("text");

    this.render();
  }

  render() {
    const wrapper = createElementWithAttribute("span", {
      className: "tag-wrapper",
    });
    wrapper.textContent = this.text;

    this.shadow.appendChild(wrapper);
  }
}
