import { createShadowDomWithStyle } from "../../utils/domManipulation.ts";
import style from "./style.css?inline";
export default class Project extends HTMLElement {
  shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = createShadowDomWithStyle(this, style);
    const template = document.querySelector(
      "#project-template",
    ) as HTMLTemplateElement;
    this.shadow.appendChild(template.content.cloneNode(true));
  }

  render() {}
}
