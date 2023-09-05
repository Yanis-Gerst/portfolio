import projectData from "../../data/projectDetails.ts";
import { IAppImg, IProjectName } from "../types/types.ts";
import { findElementOrThrowError, renderTags } from "../utils/utils.ts";
import { renderAppImg } from "../utils/renderingMethods.ts";

type IProject = {
  title: string;
  resume: string;
  link: string;
  introduction: string;
  techTags: string[];
  libraryTags: string[];
  features: string[];
  appImg: IAppImg;
  goals: string[];
  lesson: string[];
  spotlight: string[];
};
export const renderDetailsPage = (projectName: IProjectName) => {
  const currentProject: IProject = projectData[projectName];

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

  const libraryTagsWrapper =
    findElementOrThrowError<HTMLUListElement>("#library-tags");

  if (!renderTags(libraryTagsWrapper, currentProject.libraryTags)) {
    const projectTagsToRemove = findElementOrThrowError(
      ".project__tags:last-child",
    );
    projectTagsToRemove.remove();
  }
  renderFeatures(currentProject.features);

  const imgWrapper = findElementOrThrowError(".features__img");

  renderAppImg(imgWrapper, currentProject.appImg);

  const goalsTextWrapper = findElementOrThrowError(".goals__text");
  renderText(goalsTextWrapper, currentProject.goals);

  const spotlightTextWrapper = findElementOrThrowError(".spotlight__text");
  renderText(spotlightTextWrapper, currentProject.spotlight);

  const lessonTextWrapper = findElementOrThrowError("#lesson");
  renderText(lessonTextWrapper, currentProject.lesson);
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
