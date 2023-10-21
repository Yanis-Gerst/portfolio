import thingsDark from "../src/assets/ThingsClone-dark.png";
import studentDrivePlatformImg from "../src/assets/studentDrive.png";
import pizzaLegendImg from "../src/assets/pizzaLegend.png";

export default {
  things: {
    title: "Web clone of Things 3",
    resume:
      "Authentique clone de l'application Things 3 étant disponible uniquement dans l'app store",
    link: "https://yanis.gerst.io/things-clone",
    introduction:
      "Ce projet a pour but de reproduire l'expérience utilisateur que l'on peut avoir en utilisant Things sur un navigateur. Cela m'a aussi permis d'apprendre les bases et les bonnes pratiques dans la conceptions d'API REST.",
    techTags: ["Next.Js", "Typescript", "TailwindCss", "Golang", "MongoDB"],
    libraryTags: ["React Query", "React Hook Form", "Jest"],
    features: ["CRUD", "User Authentication", "REST API"],
    appImg: {
      all: thingsDark,
      alt: "Screenshot of my web clone of things 3",
    },
    goals: [
      "Avant de commencer ce projet, j'apprenais les bases de l'UI/UX afin de pouvoir concevoir des interfaces esthétique et fonctionnelle, apprendre à utiliser Figma, de pouvoir communiquer avec un designer et améliorer la fidélité de mes intégrations. Pendant mes aventures sur Figma, j'ai réalisé que Things est une application qui possède une très bonne interface et que cela pourrait être formateur de le reproduire à l'identique, en plus, cela me permettrait d'apprendre à concevoir des API.",
      "En tant que junior, je sais que mon axe de progression va être la qualité de mon code, quand je regarde le code que j'ai écrit pour mes premiers projets, je remarque que c'est du code illisible et dans un contexte ou l'on travaille en équipe, ce serait inacceptable. C'est pourquoi dans chacun de mes projets, j'essaye d'appliquer des principes et des méthodes afin d'améliorer la qualité de code. Principes que j'apprends en lisant des livres. Je voulais qu'à la fin de ce projet, je sois capable d'écrire une base de code propre de début à la fin du projet tout en construisant une belle application côté utilisateur. J'ai constaté aussi que chaque détail compte, l'application Things semble si simple à utiliser, car c'est une accumulation de petits détails qui facilite la vie à l'utilisateur.",
      "Maintenant, je sais que je peux encore écrit du meilleur code, des meilleurs tests, je vais continuer à me former en lisant. Je sais que pour l'instant, je pêche sur l'architecture de mes projets, je pense qu'elle manque de flexibilité et cela va être sûr lequel je vais travailler sur mes prochains projets",
    ],
    spotlight: [
      "Les ensembles des fonctionnalités qui font une 'ToD' est selon moi ce qui a été le plus important dans ce projet. Notamment, le calendrier avec défilement infini afin de définir quand on veut faire une Todo et l'autofocus quand on crée une nouvelle Todo. \n",
      "J'ai eu du mal à créer des tests pour des composants UI, je trouve que ce sont des moins évidents à tester, particulièrement en utilisant le TDD, c'est quelque chose sur lequel je dois travailler.",
    ],
    lesson: [
      "En construisant cette application, j'ai pu apprendre à concevoir une API REST en utilisant Golang et MongoDB, et j'ai pu améliorer la qualité de mon code ainsi que ma pratique du TDD. Du côté du front, j'ai pu apprendre les nouveautés qu'apporte Next.js 13, ainsi que l'utilisation de TailwindCSS. J'ai également appris à organiser un projet Full-Stack. Au début, je me demandais s'il fallait commencer par le front ou le back, mais en me documentant, je pense que la meilleure façon est de commencer par une API qui envoie de fausses données pour rapidement commencer à concevoir le front-end de l'application, puis de compléter le back-end.",
      "L'utilisation de bibliothèques comme React Query a été un véritable bénéfice pour l'application, cela permet de créer facilement des états serveur globaux pour notre application. Dans ces cas-là, React Query est plus bénéfique que d'autres gestionnaires d'état comme Redux ou autres.",
      "React Hook Form est un réel gain de temps pour implémenter des formulaires, c'est propre et simple, surtout pour la gestion des erreurs.",
      "TailwindCSS. C'est la troisième fois que j'essaie ce framework CSS. Les deux premières fois, je n'ai pas apprécié l'utiliser, je préférais Sass, je trouvais que la perte des mixins (fonctionnalités SASS à ajouter) ne valait pas le coup. Mais sur ce projet, en connaissant la plupart des classes Tailwind et après avoir bien compris comment le configurer, je comprends pourquoi ce framework CSS est apprécié. Il offre un réel gain de temps dans l'implémentation de notre interface, notamment pour le responsive.",
      "Golang. C'est le premier projet où j'utilise ce langage que je trouve fantastique. Il offre d'excellentes performances par rapport au temps de développement qu'il propose. Je pense que c'est un très bon langage pour le développement côté back-end.",
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
    libraryTags: ["React Query", "React Hook Form", "Jest"],
    features: ["CRUD", "User Authentication", "REST API"],
    appImg: {
      all: studentDrivePlatformImg,
      alt: "Screenshot of the hero header of my student platform",
    },
    goals: [
      "Avec un camarade classe, on voulait réunir les étudiants de différentes filières, c'est pourquoi on a créé un serveur discord et l'on a eu l'idée de créer ce drive qui permettrait d'aider les étudiants à mieux s'orienter dans leur parcours scolaire en leur permettant voir concrètement le contenu des cours des années suivantes. Donc, je décide de créer ce projet qui permettait en plus de m'apprendre des technologies comme Next.js et d'en apprendre plus sur le web design. Sachant qu'au début du projet je n'avais que très peu de connaissances en UI, pour moi cette partie-là du projet a été un vrai défi",
    ],
    spotlight: [
      "La principale feature de ce projet est le partage de PDF avec MongoDB. De plus, le site web est relié à une base de donnée qui module son contenu. Donc, les filières ainsi les unités d'enseignements et leurs chapitres respectifs et les fiches de révisions et exercices sont variables selon la base de donnée. L'avantage, c'est que le site web est très modulable et l'on peut facilement ajouter des filières, des unités enseignements en plus, ou les modifier ou les supprimer. On pourrait même utiliser le même site pour une autre université. ",
      "Mais, cette modularité m'a posé quelques problèmes techniques, notamment dans l'architecture de ma base de donnée. Comment lier différentes collections sur MongoDB ? Donc, il y a deux méthodes, une par référencement et l'autre par incorporation. Au début, j'avais préconisé la méthode par incorporation, car cette manière est plus performante que celle par référencement, mais elle a une limite. Chaque document peut contenir jusqu'à 16 Mo de donnée et si l'on décide de créer une liaison par incorporation avec une infinité d'éléments, cela peut créer une liste illimitée qui peut à terme atteindre cette limite de 16 Mo. Donc au début, j'ai fait l'erreur de lier par incorporation chaque cursus, par exemple une première année et les filières disponibles, sauf qu'il serait d'avoir un grand nombre de filières disponible pour une première année de licence. C'est pourquoi j'ai restructuré ma base de donnée afin de les lier par références.",
      "Second problème, stocker des PDF sur MongoDB. Pour stocker des PDF sur MongoDB, il faut convertir le PDF en binaire, donc pour extraire le PDF, il faut convertir le binaire en un fichier PDF. Alors, j'ai appris comment fonctionnent les Buffers en Node.js pour être capable de convertir mes PDF en binaire et vice-versa",
    ],
    lesson: [
      "Avec ce projet, j'ai pu apprendre l'utilisation de Next.js ainsi que MongoDB. Je trouve que Next.js est un excellent framework qui vient se rajouter à React. Il y a une plus-value avec la possibilité de faire du SSR ainsi que de la génération statique, l'optimisation du SEO, cela m'a permis de comprendre quelque base en back-end en découvrant Node.js. Mais, je me demandais à la fin du projet si ce n'était pas mieux d'avoir un back-end séparé avec un autre langage. C'est pour cela que mon projet aurait un back-end séparé couplé à Next.js",
      "MongoDB, étant ma première base de donnée, je ne saurais pas dire sa valeur ajouté par rapport aux autres bases de donnée. Je l'ai trouvé assez intuitif avec différents outils pour utiliser la base donnée (Compass, Atlas, mongosh), c'est un très bon outil pour construire des bases de donnée. ",
      "Côté accessibilité, j'ai appliqué les différentes normes pour que l'on puise considérer comme accessible, notamment le respect de la navigation au clavier, pour les personnes utiliser un screen reader qu'il soit possible pour, eux aussi, d'utiliser le site. Sur ce projet, j'ai surtout appris l'utilisation des attributs \"aria-...\" pour permettre aux personnes avec des handicaps visuels d'utiliser le site web. En voulant tester si mon site est accessible, j'ai pu me mettre à la place de personne en situation de handicap et cela m'a permis de me rendre compte à quel point ça pouvait être difficile pour ces personnes de naviguer sur internet si on ne leur fournit pas les bons outils à leur disposition, c'est pourquoi je souhaite de mettre un point d'honneur sur l'accessibilité sur chacun de mes projets.",
    ],
  },
  pizzaLegend: {
    title: "Pizza Legend",
    link: "",
    resume:
      "Mon premier projet basée sur le travail de Drew Conley. Je me suis amusée à rajouter des fonctionnalités et crée ma petite histoire",
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
    goals: [
      "J'ai construit ce projet parce que je souhaitais améliorer mon niveau en JavaScript, et je me disais que créer un jeu vidéo sur navigateur avec du VanillaJS était techniquement plus formateur que de construire un simple site web. En parallèle, j'apprenais en profondeur la théorie de JavaScript afin de bien comprendre le fonctionnement du langage et de pouvoir tester mes nouvelles connaissances sur Pizza Legend. Ce jeu est né d'une blague entre copains, puis par hasard, j'ai découvert qu'il existait un Pokémon avec des pizzas. Comme je n'avais aucune compétence en pixel art, les ressources graphiques m'ont été très utiles pour concrétiser cette blague.",
    ],
    spotlight: [
      "Le système de combat a été la fonctionnalité qui a été techniquement la plus difficile à réaliser. Sur cette fonctionnalité, il y a eu une multitude de bugs à résoudre, la difficulté étant de gérer les états des pizzas et l'état du combat, notamment gérer le système de tour par tour, quelle pizza est active sur le terrain, quelle pizza est morte, et la gestion des types... La méthode qui m'a permis de résoudre ces problèmes de gestion d'états a été d'utiliser des écouteurs d'événements personnalisés, ce qui m'a permis de mettre à jour les états au moment voulu.\n",
    ],
    lesson: [
      "J'ai pu apprendre et comprendre le JavaScript et le système de canva en HTML. J'ai pu approfondir mes connaissances en programmation orienté objet. De plus, ce projet m'a fait prendre conscience de l'importance d'avoir un code de qualité, en comparant mon code à celui écrit par Drew Conley, je sentais une différence. Je sentais que mon code était moins clair, moins organisé, moins lisible. C'est pourquoi je me suis intéressé à ce sujet juste après ce projet pour comprendre comment écrire un code de qualité. Je pense que c'est là qu'un développeur à le plus de valeur dans sa qualité à écrire un code de qualité, car un mauvais code nuit à un projet sur le long terme.",
      "\n" +
        "Avec ce projet, j'ai pu approfondir ma compréhension de la théorie du JavaScript en abordant des concepts tels que l'environnement d'exécution JavaScript (dans ce cas, le navigateur), la boucle d'événement et la gestion de l'asynchronisme en JavaScript. Apprendre cette partie théorique s'est avéré très utile pour comprendre pourquoi certains bugs ou erreurs apparemment inattendus surviennent. Cette acquisition de connaissances m'a été très bénéfique par la suite.",
    ],
  },
};
