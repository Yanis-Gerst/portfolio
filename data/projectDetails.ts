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
      "Avant de commencer ce projet, j'apprenais les bases de l'UI/UX afin de pouvoir concevoir des interface esthétique et fonctionnelle, apprendre à utiliser Figma, de pouvoir communiquer avec un designer et améliorer la fidélite de mes intégrations. Pendant mes aventures sur Figma j'ai réaliser que Things est une application qui possède une très bonne interface et que cela pourrait être formateur de le reproduire à l'identique en plus cela me permettrait d'apprendre à concevoir des API REST.",
      "J'ai voulut construire ce clone car j'ai compris l'UI/UX étant une part importante d'un projet, je voulais être capable de reproduire une application web avec une interface esthétique ainsi qu'une bonne expérience utilisateur. De plus ce projet avait aussi pour but de travailler la façon d'écrire mon code, afin d'écrire plus propre, plus maintenable en utilisant différentes méthode notamment le TDD.",
      "Je voulais qu'à la fin de ce projet, que je soit capable d'écrire une base de code propre de début à la fin du projet tout en construisant une belle application côté utilisateur. J'ai constaté aussi que chaque détails compte, l'application Things semble si simple à utiliser car c'est une accumulation de petits détails qui facilite la vie à l'utilisateur.",
    ],
    spotlight: [
      'Les ensembles des fonctionnalités qui font une "ToDo" est selon moi ce qui a été le plus important dans ce projet. Notamment, le calendrier avec défilement infini afin de définir quand on veut faire une Todo et l\'autofocus quand on crée une nouvelle Todo. \n',
      "J'ai eu du mal à créer des tests pour des composants UI, je trouve que ce sont des moins évidents à tester, particulièrement en utilisant le TDD, c'est quelque chose sur lequel je dois travailler.",
    ],
    lesson: [
      "En construisant cette application, j'ai pu apprendre à concevoir une API REST en utilisant Golang et mongoDB et j'ai pu améliorer la qualité de mon code et ma pratique du TDD. Côté front j'ai pu apprendre les nouveautés qu'apporte NextJS 13 ainsi que l'utilisation de tailwindCSS. J'ai pu apprendre à organiser un projet full-stack. Au début je me demander s'il fallait commencer par le front et le back en me documentant je penser que la meilleur façon est de commencer par une api qui envoie de fausse donnée pour vite commencer par concevoir le front-end de l'application et ensuite faire la back-end complétement.",
    ],
  },
  studentPlatform: {
    title: "Student Drive Platform",
    link: "",
    resume:
      "Un Drive dédié aux étudiant d’AMU afin de partager fiches de révisions, exercices et corrections",
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
      "Avec un camarade classe, on voulait réunir les étudiants de différentes filières, c'est pourquoi on a créé un serveur discord et l'on a eu l'idée de créer ce drive qui permettrait d'aider les étudiants à mieux s'orienter dans leur parcours scolaire en leur permettant voir concrètement le contenu des cours des années suivantes. Donc, je décide de créer ce projet qui permettait en plus d'apprendre mes technologies comme Next.js et d'en apprendre plus sur le web design. Sachant qu'au début du projet je n'avais que très peu de connaissances en UI, pour moi cette partie-là du projet a été un vrai défi",
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
      "Le système de combat a été la fonctionnalité qui a été techniquement la plus difficile à réaliser. Sur cette fonctionnalité, il y a eu une multitude de bugs à résoudre, la difficulté étant de gérer les états des pizzas et l'état du combat, notamment pour savoir de quel côté se trouve le tour de quelle équipe, quelle pizza est active sur le terrain, quelle pizza est morte, et la gestion des types... La méthode qui m'a permis de résoudre ces problèmes de gestion d'états a été d'utiliser des écouteurs d'événements personnalisés, ce qui m'a permis de mettre à jour les états au moment voulu.\n",
    ],
    lesson: [
      "J'ai pu apprendre et comprendre le Javascript et le système de canva en HTML. J'ai pu approfondir mes connaissances en programmation orienté objet. De plus, ce projet m'a fait prendre conscience de l'importance d'avoir un code de qualité, en comparant mon code à celui écrit par Drew Conley, je sentais une différence. Je sentais que mon code était moinsclair, moins organisé, moins lisible. C'est pourquoi je me suis intéressé à ce sujet juste après ce projet pour comprendre comment écrire un code qualité. Je pense que c'est là qu'un développeur à le plus valeur dans sa qualité à écrire un code de qualité, car un mauvais code nuit à un projet sur le long terme.",
      "\n" +
        "Avec ce projet, j'ai pu approfondir ma compréhension de la théorie du JavaScript en abordant des concepts tels que l'environnement d'exécution JavaScript (dans ce cas, le navigateur), la boucle d'événement et la gestion de l'asynchronisme en JavaScript. Apprendre cette partie théorique s'est avéré très utile pour comprendre pourquoi certains bugs ou erreurs apparemment inattendus surviennent. Cette acquisition de connaissances m'a été très bénéfique par la suite.",
    ],
  },
};
