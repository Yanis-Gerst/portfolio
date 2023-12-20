import {
  createElementWithAttribute,
  createShadowDomWithStyle,
} from "../../utils/domManipulation";
import style from "./servicesAccordion.css?inline";
import { content } from "./servicesContent";

export default class ServicesAccordion extends HTMLElement {
  shadow: ShadowRoot;
  activePart: number;

  constructor() {
    super();
    this.shadow = createShadowDomWithStyle(this, style);
    this.activePart = -1;
    this.render();
  }

  render() {
    const wrapper = createElementWithAttribute("div", {
      className: "services-accordion",
    });
    this.renderContent(wrapper);
    this.shadow.appendChild(wrapper);
  }

  renderContent(wrapper: HTMLElement) {
    content.forEach((part) => {
      const detailsWrapper = createElementWithAttribute("div", {
        className: "item",
      });
      const details = document.createElement("details");
      const summary = createElementWithAttribute("summary", {
        textContent: part.title,
      });
      const keysList = this.renderKeys(part.keys);
      details.appendChild(summary);
      detailsWrapper.appendChild(details);
      detailsWrapper.appendChild(keysList);
      wrapper.appendChild(detailsWrapper);
    });
  }

  renderKeys(keys: string[]) {
    const contentWrapper = createElementWithAttribute("div", {
      className: "content",
    });
    const keysList = document.createElement("ul");
    keys.forEach((keyContent) => {
      const keyPoint = createElementWithAttribute("li", {
        textContent: keyContent,
      });
      keysList.appendChild(keyPoint);
    });
    contentWrapper.appendChild(keysList);
    return contentWrapper;
  }

  // connectedCallback() {
  //   console.log("cc");
  //   this.shadow.querySelectorAll("details").forEach((detailElt) => {
  //     detailElt.addEventListener("click", () => {
  //       detailElt.classList.toggle("open");
  //     });
  //   });
  // }
}
