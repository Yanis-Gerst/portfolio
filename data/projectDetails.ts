import thingsDark from "../src/assets/things/InboxThingsClone.png";
import studentDrivePlatformImg from "../src/assets/UniNotes/landingPage.png";
import pizzaLegendImg from "../src/assets/pizzaLegend/PizzaLegendCombat.png";
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

import heroFolio from "../src/assets/mathieu-Folio/home.png";
import projectFolio from "../src/assets/mathieu-Folio/Project.png";
import serviceFolio from "../src/assets/mathieu-Folio/Service.png";
import contactFolio from "../src/assets/mathieu-Folio/Contact.png";

export default {
  things: {
    title: "Things 3",
    resume: "Authentique clone de l'application Things 3",
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
      "A platform dedicated to AMU students for sharing revision notes, exercises, and answer keys.",
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
    resume: "A Pokémon-like game with PIZZA beware, it's challenging!",
    introduction:
      "\n" +
      "Pizza Legend est un jeu qui s'inspire du système de combat de Pokémon, offrant ainsi la possibilité d'avoir une équipe de pizzas. Contrairement à Pokémon, on peut fabriquer les pizzas plutôt que les capturer, et le jeu propose un système de tour par tour avec des pizzas de différents types.\n" +
      "\n" +
      "Dans ce projet, j'ai utilisé les assets et la base de code initialement écrits par Drew Conley, puis j'ai ajouté des fonctionnalités et remixé le tout à ma manière. J'ai introduit un système de types, créé un système de cinématique, refait les séquences de mouvements des PNJ, ajouté une nouvelle pizza dans le jeu, et bien plus encore.\n" +
      "\n" +
      "La stack technique est très simple, utilisant uniquement du pur VanillaJS, et le rendu du jeu est réalisé avec les balises canvas HTML.\n",
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
    resume: "A classic, simple implementation of Qovery's old landing page.",
    introduction:
      "Ce projet était un défi à réaliser en 6 heures et a été une réussite, impliquant la création d'une interface respectant les principes du design et capable de s'adapter à toutes les tailles d'écran.",
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
  matFolio: {
    title: "Engineer Folio",
    link: "https://mathieu-gerst-folio.vercel.app/",
    resume:
      "Code and design a portfolio from scratch for a mechanical engineer. ",
    introduction: "",
    techTags: ["AstroJS", "TailwindCSS"],
    appImg: {
      alt: "Hero header",
      all: heroFolio,
    },
    date: "Décembre 2020",
    screenshots: [
      {
        shots: [
          {
            src: heroFolio,
            alt: "Hero header de qovery",
          },
          {
            src: projectFolio,
            alt: "La section qui explique comment fonctionne qovery",
          },
          {
            src: serviceFolio,
            alt: "La section qui montre un exemple d'utilisation de qovery",
          },
          {
            src: contactFolio,
            alt: "Les 2 premières fonctionnalités clés de qovery",
          },
        ],
      },
    ],
  },
};
