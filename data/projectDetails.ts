import thingsDark from "../src/assets/ThingsClone-dark.png";
import studentDrivePlatformImg from "../src/assets/studentDrive.png";
import pizzaLegendImg from "../src/assets/pizzaLegend.png";
import landingPageUniNotes from "../src/assets/UniNotes/landingPage.png";
import featuresUniNotes from "../src/assets/UniNotes/features.png";
import cursurChoice from "../src/assets/UniNotes/cursurChoice.png";
import ueUniNotes from "../src/assets/UniNotes/ue.png";
import sheetsUniNotes from "../src/assets/UniNotes/sheets.png";

import originalThings from "../src/assets/things/originalThings.png";
import thingsCloneInbox from "../src/assets/things/InboxThingsClone.png";
import thingsCloneIncoming from "../src/assets/things/IncomingThingsClone.png";
import thingsCloneAuth from "../src/assets/things/authThingsClone.png";

import pizzaLegendFirstMap from "../src/assets/pizzaLegend/pizzaLegendFirstMap.png";
import pizzaLegendSecondMap from "../src/assets/pizzaLegend/PizzaLegendSecondMap.png";
import pizzaLegendThirdMap from "../src/assets/pizzaLegend/PizzaLegendThirdMap.png";
import pizzaLegendFight from "../src/assets/pizzaLegend/PizzaLegendCombat.png";

export default {
  things: {
    title: "Web clone of Things 3",
    resume:
      "Authentique clone de l'application Things 3 étant disponible uniquement dans l'app store",
    link: "https://yanis.gerst.io/things-clone",
    introduction:
      "Ce projet a pour but de reproduire l'expérience utilisateur que l'on peut avoir en utilisant Things sur un navigateur. Cela m'a aussi permis d'apprendre les bases et les bonnes pratiques dans la conceptions d'API REST.",
    techTags: ["Next.Js", "Typescript", "TailwindCss", "Golang", "MongoDB"],
    appImg: {
      alt: "",
      all: thingsDark,
    },
    screenshots: [
      {
        title: "L'application Originel",
        shots: [
          { src: originalThings, alt: "L'applications original Things 3" },
        ],
      },
      {
        title: "Mon clone",
        shots: [
          {
            src: thingsCloneAuth,
            alt: "la page d'authentication de mon clone",
          },
          { src: thingsCloneInbox, alt: "La page inbox de mon clone" },
          { src: thingsCloneIncoming, alt: "la page à venir de mon clone" },
        ],
      },
    ],
  },
  studentPlatform: {
    title: "Student Drive Platform",
    link: "",
    resume:
      "Un Drive dédié aux étudiants d'AMU afin de partager des fiches de révisions, d'exercices et de corrections",
    introduction:
      "Ce projet permet aux étudiants de regarder les fiches de révisions et exercices de leurs camarades de classe ainsi que les autres filières que propose l'université.",
    techTags: ["Next.Js", "Typescript", "Sass", "MongoDB"],
    appImg: {
      alt: "",
      all: studentDrivePlatformImg,
    },
    screenshots: [
      {
        shots: [
          {
            src: landingPageUniNotes,
            alt: "La page d'accueil d'UniNotes composé de plusieurs section",
          },
          {
            src: featuresUniNotes,
            alt: "La section de présentation des fonctionnalités d'UniNotes",
          },
          {
            src: cursurChoice,
            alt: "La section des choix des cursus d'UniNotes",
          },
          {
            src: ueUniNotes,
            alt: "La page des choix des unités d'enseignement d'UniNotes",
          },
          {
            src: sheetsUniNotes,
            alt: "La page où l'on peut publier et télécharger des fiches de réviions et des exercices",
          },
        ],
      },
    ],
  },
  pizzaLegend: {
    title: "Pizza Legend",
    link: "",
    resume:
      "Mon premier projet basé sur le travail de Drew Conley. Je me suis amusé à rajouter des fonctionnalités et crée ma petite histoire",
    introduction:
      "\n" +
      "Pizza Legend est un jeu qui s'inspire du système de combat de Pokémon, avec donc la possibilité d'avoir une équipe de pizza. Contrairement, on peut fabriquer les pizzas et non pas les capturer et on retrouve un système de tour par tour avec des pizzas de différents types. \n" +
      "\n" +
      "Dans ce projet, j'ai repris les assets et la base de code écrit par Drew Conley puis j'ai rajouté des fonctionnalités et remixer à ma propre sauce. En ajoutant le système de type, en faisant un système de cinématique, en refaisant les séquence de mouvements de PNJ, en ajoutant une nouvelle pizza dans le jeu, et plus encore.\n" +
      "\n" +
      "La stack technique est très simple, du pur VanillaJs et le rendu du jeu est fait avec les canva HTML\n.",
    techTags: ["HTML", "CSS", "VanillaJS"],
    libraryTags: [],
    features: ["Combat System", "Cinematic Scene", "PNG"],
    appImg: {
      all: pizzaLegendImg,
      alt: "Screenshot of a fight in my pizza legend game",
    },
    screenshots: [
      {
        shots: [
          { src: pizzaLegendFirstMap, alt: "la première map de pizza legend" },
          { src: pizzaLegendSecondMap, alt: "la deuxième map de pizza legend" },
          { src: pizzaLegendFight, alt: "Une scène de combat de pizza legend" },
          { src: pizzaLegendThirdMap, alt: "la troisième map de pizza legend" },
        ],
      },
    ],
  },
};
