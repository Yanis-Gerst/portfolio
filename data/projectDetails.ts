import thingsDark from "../src/assets/ThingsClone-dark.png";
import studentDrivePlatformImg from "../src/assets/UniNotes/landingPage.png";
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

import heroQovery from "../src/assets/qovery/hero-section.png";
import howQovery from "../src/assets/qovery/how.png";
import usageQovery from "../src/assets/qovery/usage.png";
import keysQovery1 from "../src/assets/qovery/keys1.png";
import keysQovery2 from "../src/assets/qovery/keys2.png";

export default {
  things: {
    title: "Web clone of Things 3",
    resume:
      "Authentique clone de l'application Things 3 étant disponible uniquement dans l'app store",
    link: "https://yanis.gerst.io/things-clone",
    introduction:
      "Mon clone de Things 3 reproduit l’expérience d'un gestionnaire de tâches personnel primé qui vous aide à organiser votre journée, gérer vos projets et progresser efficacement vers vos objectifs.",
    techTags: ["Next.Js", "Typescript", "TailwindCss", "Golang", "MongoDB"],
    appImg: {
      alt: "",
      all: thingsDark,
    },
    date: "Juillet 2023",
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
    title: "UniNotes",
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
    date: "Janvier 2023",
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
    link: "https://yanis-gerst.github.io/Pizza-Legend/",
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
    appImg: {
      all: pizzaLegendImg,
      alt: "Screenshot of a fight in my pizza legend game",
    },
    date: "Mars 2021",
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
  qovery: {
    title: "Qovery",
    link: "https://qovery-implementation.vercel.app/",
    resume:
      "Une implémentation de la landing page de Qovery avec l'ajout d'animations",
    introduction:
      "Ce projet était un défi à réaliser en 6 heures et a été une réussite, impliquant la création d'une interface respectant les principes du design et capable de s'adapter à toute taille d'écran.",
    techTags: ["HTML", "CSS", "VanillaJS"],
    appImg: {
      alt: "Hero header de qovery",
      all: heroQovery,
    },
    date: "Décembre 2020",
    screenshots: [
      {
        shots: [
          {
            src: heroQovery,
            alt: "Hero header de qovery",
          },
          {
            src: howQovery,
            alt: "La section qui explique comment fonctionne qovery",
          },
          {
            src: usageQovery,
            alt: "La section qui montre un exemple d'utilisation de qovery",
          },
          {
            src: keysQovery1,
            alt: "Les 2 premières fonctionnalités clés de qovery",
          },
          {
            src: keysQovery2,
            alt: "Les 2 premières fonctionnalités clés de qovery ainsi que leurs partenaires",
          },
        ],
      },
    ],
  },
};
