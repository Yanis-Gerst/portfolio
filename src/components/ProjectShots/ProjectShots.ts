import { IProjectName } from "../../types/types";
import { createElementWithAttribute } from "../../utils/domManipulation";
import { findElementOrThrowError } from "../../utils/utils";
import projectData from "../../../data/projectDetails";

type IShots = {
  src: string;
  alt: string;
}[];

export default class ProjectShots extends HTMLElement {
  name: IProjectName;
  shots: IShots;

  constructor() {
    super();
    this.name = this.getAttribute("name") as IProjectName;
    this.shots = this.getProjectImages();
    this.render();
  }

  render() {
    const customCursor = findElementOrThrowError(".custom-cursor");

    const shotsWrapper = createElementWithAttribute("div", {
      className: `project-shots project-shots--${this.name}`,
    });

    this.shots.forEach((shot) => {
      const img = createElementWithAttribute("img", {
        src: shot.src,
        alt: shot.alt,
        loading: "lazy",
      });
      shotsWrapper.appendChild(img);
    });

    customCursor.appendChild(shotsWrapper);
  }

  getProjectImages() {
    const project = projectData[this.name];

    const shots = project.screenshots.flatMap((screenshot) => {
      return screenshot.shots;
    });

    return shots;
  }
}
