import {
  appendChildList,
  createElementWithAttribute,
  stringToParagraph,
} from "../../../utils/domManipulation";
import {
  pendingAnimation,
  idleStateAnimation,
  sentAnimation,
} from "./submitButtonAnimation";

export default class SubmitButton {
  wrapper: HTMLDivElement;
  submitButton: HTMLButtonElement;

  constructor() {
    this.wrapper = createElementWithAttribute("div", {
      className: "form__sending-container",
    });
    this;

    this.submitButton = createElementWithAttribute("button", {
      className: "form__submit-button btn",
    });
    const buttonTextContainer = createElementWithAttribute("div", {
      className: "button-text-container",
    });
    const buttonContents = stringToParagraph([
      "Sent",
      "Send Message",
      "Sending",
      "Sent",
    ]);

    const loadingCirlce = createElementWithAttribute("div", {
      className: "loading-circle hidden",
    });

    this.wrapper.appendChild(this.submitButton);
    this.wrapper.appendChild(loadingCirlce);

    this.submitButton.append(buttonTextContainer);
    appendChildList(buttonTextContainer, buttonContents);
  }

  getDom() {
    return this.wrapper;
  }

  handlePending() {
    this.triggerSubElement("loading-circle");
    return pendingAnimation(this.submitButton);
  }

  handleSent() {
    this.clearSubElement();
    this.triggerSubElement("validate-icon");
    sentAnimation(this.submitButton, () => {
      setTimeout(() => {
        this.reset();
      }, 300);
    });
  }

  clearSubElement() {
    const subElements = this.wrapper?.querySelectorAll(
      ".loading-circle, .validate-icon"
    );
    subElements?.forEach((subElt) => subElt.classList.add("hidden"));
  }

  triggerSubElement(className: "loading-circle" | "validate-icon") {
    const subElt = this.wrapper?.querySelector(`.${className}`);
    subElt?.classList.remove("hidden");
  }

  reset() {
    idleStateAnimation(this.submitButton);
    this.clearSubElement();
  }
}
