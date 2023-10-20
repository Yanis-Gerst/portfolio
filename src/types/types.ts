import { Themes } from "../components/Maps/types.ts";

export type IProjectName = "things" | "pizzaLegend" | "studentPlatform";

export type allThemeImg = {
  all: string;
};
export type byThemeImages = {
  [key in Themes]: string;
};
export type IAltImg = {
  alt: string;
};
export type IAppImg = (allThemeImg | byThemeImages) & IAltImg;
export type IProjectData = {
  title: string;
  resume: string;
  techTags: string[];
  appImg: IAppImg;
};