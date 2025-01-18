import {
  createElementWithAttribute,
  createShadowDomWithStyle,
} from "../../utils/domManipulation";
import style from "./style.css?inline";
import libraryAppImg from "../../assets/projects/library-app.jpeg";
import riotDGKIMg from "../../assets/projects/riot-dgk.jpeg";
import qoveryImg from "../../assets/projects/quovery.jpeg";
import thingsImg from "../../assets/projects/things.jpeg";
import { findElementOrThrowError } from "../../utils/utils";

const nameToImg = {
  libraryApp: {
    src: libraryAppImg,
    link: "https://github.com/Yanis-Gerst/book-management-app",
  },
  riotDGK: {
    src: riotDGKIMg,
    link: "https://github.com/Yanis-Gerst/riot-DGK",
  },
  qovery: {
    src: qoveryImg,
    link: "https://github.com/Yanis-Gerst/qovery-implementation",
  },
  things: {
    src: thingsImg,
    link: "https://github.com/Yanis-Gerst/things-3-clone",
  },
};

export default class Project extends HTMLElement {
  shadow: ShadowRoot;
  name: keyof typeof nameToImg;

  constructor() {
    super();
    this.shadow = createShadowDomWithStyle(this, style);
    this.name = this.getAttribute("name") as keyof typeof nameToImg;

    this.render();
  }

  render() {
    const imgContainer = createElementWithAttribute("a", {
      className: "img-container",
      href: nameToImg[this.name].link,
      toString: nameToImg[this.name].link,
    });

    const img = createElementWithAttribute("img", {
      src: nameToImg[this.name].src,
      alt: "screenshot of my app",
    });

    imgContainer.appendChild(img);
    this.shadowRoot?.appendChild(imgContainer);
  }

  connectedCallback() {
    const customCursor = findElementOrThrowError(".custom-cursor");

    this.shadow.querySelectorAll("a").forEach((link) => {
      link.addEventListener("mouseover", () => {
        customCursor?.classList.add("custom-cursor--hover-emoji");
        customCursor?.classList.add("custom-cursor--hover-github");
      });

      link.addEventListener("mouseleave", () => {
        customCursor?.classList.remove("custom-cursor--hover-emoji");
        customCursor?.classList.remove("custom-cursor--hover-github");
      });
    });
  }
}
