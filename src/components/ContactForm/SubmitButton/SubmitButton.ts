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

    const validateIcon = `
    <svg class="validate-icon hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 10L11 18" stroke="#6880FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11 18L20 6" stroke="#6880FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `;

    this.wrapper.innerHTML += validateIcon;
    appendChildList(this.wrapper, [this.submitButton, loadingCirlce]);

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
