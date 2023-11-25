import projectData from "../../data/projectDetails.ts";
import {
  IAppImg,
  IImg,
  IProjectData,
  IProjectName,
  IProjectScreenshot,
} from "../types/types.ts";
import { findElementOrThrowError, renderTags } from "../utils/utils.ts";
import { renderAppImg } from "../utils/renderingMethods.ts";
import githubDarkSvg from "../assets/GithubDarkIcon.svg";
import githubLightSvg from "../assets/GithubIcon.svg";
import { createElementWithAttribute } from "../utils/domManipulation.ts";

export const renderDetailsPage = (projectName: IProjectName) => {
  const currentProject: IProjectData = projectData[projectName];

  const githubDarkImg =
    findElementOrThrowError<HTMLImageElement>(".github--dark");
  const githubLightImg =
    findElementOrThrowError<HTMLImageElement>(".github--light");
  githubDarkImg.src = githubDarkSvg;
  githubLightImg.src = githubLightSvg;

  const projectTitle = findElementOrThrowError(".project-intro h1");
  projectTitle.textContent = currentProject.title;

  const projectLink =
    findElementOrThrowError<HTMLAnchorElement>(".project-intro a");
  projectLink.href = currentProject.link;

  const projectIntroduction = findElementOrThrowError(".project-intro p");
  projectIntroduction.textContent = currentProject.introduction;

  const techTagsWrapper =
    findElementOrThrowError<HTMLUListElement>("#tech-tags");
  renderTags(techTagsWrapper, currentProject.techTags);

  const dateParagraph = findElementOrThrowError<HTMLParagraphElement>(
    ".project__date-wrapper p"
  );
  dateParagraph.textContent = currentProject.date;

  renderScreenshots(currentProject.screenshots);
};

const renderFeatures = (features: string[]) => {
  const featuresWrapper = findElementOrThrowError("#features ul");

  features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    featuresWrapper.appendChild(li);
  });
};

const renderText = (wrapper: HTMLElement, texts: string[]) => {
  texts.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    wrapper.appendChild(p);
  });
};

const renderScreenshots = (screenshots: IProjectScreenshot[]) => {
  const projectScreenshotsWrapper = findElementOrThrowError(
    "#project-screenshot"
  );

  screenshots.forEach((screenshot) => {
    const { title, shots } = screenshot as { title: string; shots: IImg[] };

    let wrapper: HTMLDivElement | null = null;
    if (title) {
      wrapper = createElementWithAttribute("div", {
        className: "project-screenshots__section",
      });
      const headerTitle = document.createElement("h1");
      headerTitle.textContent = title;
      wrapper.appendChild(headerTitle);
    }

    shots.forEach((shot) => {
      const shotImg = createElementWithAttribute("img", {
        src: shot.src,
        alt: shot.alt,
      });
      if (wrapper) {
        wrapper.appendChild(shotImg);
        return;
      }
      projectScreenshotsWrapper.appendChild(shotImg);
    });

    if (wrapper) {
      projectScreenshotsWrapper.appendChild(wrapper);
    }
  });
};
