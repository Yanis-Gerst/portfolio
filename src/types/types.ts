import { Themes } from "../components/Maps/types.ts";

export type IProjectName = "things" | "pizzaLegend" | "studentPlatform";

export type allThemeImg = {
  all: string;
};

export type byThemeImages = {
  light: string;
  dark: string;
};

export type IAppImg = {
  all: string;
  alt: string;
};

export type IImg = {
  alt: string;
  src: string;
};

export type IProjectData = {
  title: string;
  resume: string;
  link: string;
  introduction: string;
  techTags: string[];
  appImg: IAppImg;
  date: string;
  screenshots: IProjectScreenshot[];
};

export type IProjectScreenshot =
  | {
      title: string;
      shots: IImg[];
    }
  | {
      shots: IImg[];
    };
