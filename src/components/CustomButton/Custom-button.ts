import style from "./style.css?inline";
import {
  createElementWithAttribute,
  createShadowDomWithStyle,
} from "../../utils/domManipulation.ts";

type onClickCallback = (e: MouseEvent) => void;
export default class CustomButton extends HTMLElement {
  shadow: ShadowRoot;
  text: string | null;
  inlineStyle: string | null;
  _onClick: onClickCallback | undefined;
  constructor() {
    super();
    this.shadow = createShadowDomWithStyle(this, style);

    this.text = this.getAttribute("text");
    this.inlineStyle = this.getAttribute("inlineStyle");
    this.render();
  }

  render() {
    const buttonWrapper = createElementWithAttribute("button", {
      className: "btn",
    });
    buttonWrapper.textContent = this.text;
    this.addInlineStyle(buttonWrapper);

    this.shadow.appendChild(buttonWrapper);
  }

  addInlineStyle(element: HTMLElement) {
    if (!this.inlineStyle) return;
    element.style.cssText = this.inlineStyle;
  }

  set onClick(cb: onClickCallback) {
    const buttonWrapper = this.shadow.querySelector("button");
    if (!buttonWrapper)
      throw Error("Custom-Button don't have a button element in shadow DOM");

    if (this._onClick) {
      buttonWrapper.removeEventListener("click", this._onClick);
    }

    this._onClick = cb;
    buttonWrapper.addEventListener("click", this._onClick);
  }
}
