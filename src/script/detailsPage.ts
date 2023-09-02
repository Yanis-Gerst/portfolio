import { IProjectName } from "../main.ts";
import projectData from "../../data/projectDetails.ts";
import { createElementWithAttribute } from "../utils/domManipulation.ts";
import { IAppImg } from "../components/Project/Project.ts";
import { getReverseTheme } from "./theme.ts";

type IProject = {
  title: string;
  resume: string;
  link: string;
  introduction: string;
  techTags: string[];
  libraryTags: string[];
  features: string[];
  appImg: { light: string; dark: string };
  goals: string[];
  lesson: string[];
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

  renderTags(libraryTagsWrapper, currentProject.libraryTags);

  renderFeatures(currentProject.features);

  const imgWrapper = findElementOrThrowError(".features__img");

  renderAppImg(imgWrapper, currentProject.appImg);

  const goalsTextWrapper = findElementOrThrowError(".goals__text");
  renderText(goalsTextWrapper, currentProject.goals);

  const lessonTextWrapper = findElementOrThrowError("#lesson");
  renderText(lessonTextWrapper, currentProject.lesson);
};

const renderTags = (wrapper: HTMLUListElement, tagsContents: string[]) => {
  tagsContents.forEach((tagContent) => {
    const li = createElementWithAttribute("li", {
      className: "tag",
    });
    li.textContent = tagContent;
    wrapper.appendChild(li);
  });
};

const renderFeatures = (features: string[]) => {
  const featuresWrapper = findElementOrThrowError("#features ul");

  features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    featuresWrapper.appendChild(li);
  });
};

const findElementOrThrowError = <T extends HTMLElement>(selector: string) => {
  const element = document.querySelector(selector) as T;
  if (!element) {
    throw new Error(`Element with selector "${selector}" not found.`);
  }
  return element;
};

const renderAppImg = (wrapper: HTMLElement, appImg: IAppImg) => {
  const themes = ["light", "dark"] as const;
  if (appImg.all) {
    const img = createElementWithAttribute("img", {
      src: appImg.all,
    });
    wrapper.appendChild(img);
    return wrapper;
  }

  themes.forEach((theme) => {
    const themeImg = createElementWithAttribute("img", {
      src: appImg[theme],
      className: `hidden-on-${getReverseTheme(theme)}`,
    });
    themeImg.setAttribute("part", `img-${theme}`);
    wrapper.appendChild(themeImg);
  });
  return wrapper;
};

const renderText = (wrapper: HTMLElement, texts: string[]) => {
  texts.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    wrapper.appendChild(p);
  });
};
