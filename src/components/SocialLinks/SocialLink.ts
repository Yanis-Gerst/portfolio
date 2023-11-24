import { handlerHover } from "../../script/customCursor.ts";
import {
  createElementWithAttribute,
  createShadowDomWithStyle,
} from "../../utils/domManipulation.ts";
import styles from "./socialLink.css?inline";
const handleSocialName = ["github", "linkedin"] as const;
type ISocialNames = (typeof handleSocialName)[number];
class SocialLink extends HTMLElement {
  socialName: ISocialNames;
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = createShadowDomWithStyle(this, styles);
    const socialName = this.getAttribute("name");
    this.socialName = this.checkSocialName(socialName);
    this.render();
  }

  render() {
    const url = this.getUrl();
    const anchor = createElementWithAttribute("a", {
      href: url,
      className: `social-link social-link--${this.socialName}`,
      toString: url,
    });
    anchor.setAttribute("part", "wrapper");
    const imgSlot = createElementWithAttribute("slot", {
      name: "social-img",
    });

    this.shadow.appendChild(anchor);
    anchor.appendChild(imgSlot);
  }

  checkSocialName(socialName: string | null): ISocialNames {
    if (!socialName)
      throw new Error("Social Link Component need to provide a name");
    if (!(handleSocialName as ReadonlyArray<string>).includes(socialName))
      throw new Error(`Social Link Component didn't handle ${socialName}`);
    return socialName as ISocialNames;
  }

  getUrl() {
    switch (this.socialName) {
      case "github":
        return "https://github.com/Yanis-Gerst";
      case "linkedin":
        return "https://www.linkedin.com/in/yanis-gerst-595432243/";
    }
  }

  connectedCallback() {
    handlerHover(this.shadow, [
      "custom-cursor--hover-emoji",
      "custom-cursor--hover-eye",
    ]);
  }
}

export default SocialLink;
