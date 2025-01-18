import {
  createElementWithAttribute,
  createShadowDomWithStyle,
} from "../../utils/domManipulation.ts";
import style from "./style.css?inline";
import projectData from "../../../data/projectDetails.ts";
import { renderTags, findElementOrThrowError } from "../../utils/utils.ts";
import { IProjectData, IProjectName } from "../../types/types.ts";
import { renderAppImg } from "../../utils/renderingMethods.ts";
import { DisplayShots } from "./DisplayShots.ts";

type IProjectPreview = Omit<
  IProjectData,
  "screenshots" | "introduction" | "date"
>;

export default class Project extends HTMLElement {
  shadow: ShadowRoot;
  name: IProjectName;
  projectData: IProjectPreview;
  onThemeListener: Function | undefined;

  constructor() {
    super();
    this.shadow = createShadowDomWithStyle(this, style);
    this.name = this.getAttribute("name") as IProjectName;
    this.projectData = this.getProjectData();
    this.render();
  }

  render() {
    const projectDiv = createElementWithAttribute("div", {
      className: "project",
    });
    const rightSideDiv = createElementWithAttribute("div", {
      className: "project__r-side-desk",
    });

    const anchorLink = this.projectData.link;
    const anchorElt = createElementWithAttribute("a", {
      className: "project__link",
      href: anchorLink,
      toString: anchorLink,
    });
    console.log(anchorElt);
    // anchorElt.addEventListener("click", (e) =>
    //   route(e as MouseEvent & { currentTarget: HTMLAnchorElement })
    // );

    const title = document.createElement("h1");
    title.textContent = this.projectData.title;

    const arrowSvg =
      '<svg width="10" height="10" viewBox="0 0 10 10" fill="" xmlns="http://www.w3.org/2000/svg">\n' +
      '                <path d="M1 9L9 1M9 1H3.66667M9 1V6.33333" stroke="#121212"/>\n' +
      "              </svg>";

    const paragraphWrapper = createElementWithAttribute("div", {
      className: "intro-paragraph-wrapper",
    });

    const resume = document.createElement("p");
    resume.textContent = this.projectData.resume;

    const tagsListWrapper = createElementWithAttribute("ul", {
      className: "tags-list",
    });

    renderTags(tagsListWrapper, this.projectData.techTags);

    const imgWrapper = createElementWithAttribute("a", {
      className: "project__img",
      href: anchorLink,
      toString: anchorLink,
    });

    renderAppImg(imgWrapper, this.projectData.appImg);

    this.shadow.appendChild(projectDiv);
    projectDiv.appendChild(rightSideDiv);
    projectDiv.appendChild(imgWrapper);

    rightSideDiv.appendChild(anchorElt);
    rightSideDiv.appendChild(paragraphWrapper);
    rightSideDiv.appendChild(tagsListWrapper);

    anchorElt.appendChild(title);
    anchorElt.innerHTML += arrowSvg;

    paragraphWrapper.appendChild(resume);

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

  getProjectData(): IProjectPreview {
    const project = projectData[this.name];

    return {
      title: project.title,
      resume: project.resume,
      techTags: project.techTags,
      appImg: project.appImg,
      link: project.link,
    };
  }

  connectedCallback() {
    const projectShots = document.querySelector(`.project-shots--${this.name}`);
    if (!projectShots) return;
    const customCursor = findElementOrThrowError(".custom-cursor");
    const projectImg = this.shadow.querySelector("img");
    const projectLink = this.shadow.querySelector(".project__link");
    const displayShotsHandler = new DisplayShots(projectShots);

    this.shadow.querySelectorAll("a").forEach((link) => {
      link.addEventListener("mouseover", () => {
        projectImg?.classList.add("project-img-gray");
        customCursor?.classList.add("custom-cursor--border-only");
        projectLink?.classList.add("project__link--hover");
        displayShotsHandler.displayShot();
        displayShotsHandler.startInterval();
      });

      link.addEventListener("mouseleave", () => {
        projectImg?.classList.remove("project-img-gray");
        customCursor?.classList.remove("custom-cursor--border-only");
        projectLink?.classList.remove("project__link--hover");
        displayShotsHandler.clearInterval();
      });
    });
  }
}
