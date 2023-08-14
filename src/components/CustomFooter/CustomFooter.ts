import {
  createElementWithAttribute,
  createShadowDomWithStyle,
} from "../../utils/domManipulation.ts";
import style from "./style.css?inline";
import LinkedinIcon from "../../assets/InvertedLinkedinIcon.svg";
import GithubIcon from "../../assets/InvertedGithubIcon.svg";

const socialLinksConfigs = [
  {
    src: GithubIcon,
    link: "https://github.com/Yanis-Gerst",
    alt: "A link to my Github Icon",
  },
  {
    src: LinkedinIcon,
    link: "https://www.linkedin.com/in/yanis-gerst-595432243/",
    alt: "A link to LinkedIn account",
  },
];

export default class CustomFooter extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = createShadowDomWithStyle(this, style);
    this.render();
  }

  render() {
    const footerWrapper = document.createElement("footer");
    const iconWrapper = createElementWithAttribute("div", {
      className: "footer__social-link-wrapper",
    });

    const signatureText = document.createElement("p");
    signatureText.textContent = "Designed & built by Yanis Gerst";

    this.shadow.appendChild(footerWrapper);
    footerWrapper.appendChild(iconWrapper);
    footerWrapper.appendChild(signatureText);

    this.addSocialLinks(iconWrapper);
  }

  addSocialLinks(wrapper: HTMLDivElement) {
    socialLinksConfigs.forEach((config) => {
      const anchorElement = document.createElement("a");
      anchorElement.href = config.link;
      const socialIcon = createElementWithAttribute("img", {
        src: config.src,
        alt: config.alt,
      });
      anchorElement.appendChild(socialIcon);
      wrapper.appendChild(anchorElement);
    });
  }
}
