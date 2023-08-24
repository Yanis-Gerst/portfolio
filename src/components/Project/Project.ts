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
    this.handleAnimation();
  }

  handleAnimation() {
    const project = this.shadow.querySelector(".project");
    if (!project) throw new Error("Can't find project element");
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains("project--visible")
        ) {
          entry.target.classList.add("project--visible");
          return;
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    observer.observe(project);
  }
}
