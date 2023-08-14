import {
  createElementWithAttribute,
  createShadowDomWithStyle,
} from "../../utils/domManipulation.ts";
import style from "./style.css?inline";
import { sendEmail } from "../../utils/mail.ts";
import mailSvg from "../../assets/emailIcon.svg";
export interface EmailConfig {
  from: string;
  body: string;
  name: string;
}

type IInputConfig = {
  type: string;
  label: string;
  name: string;
  required?: string;
  className?: string;
  tag?: "textarea" | "input";
};

const inputsConfig: IInputConfig[] = [
  {
    type: "text",
    label: "Your name",
    name: "name",
    required: "true",
  },
  {
    type: "email",
    label: "Your Email",
    name: "email",
    required: "true",
  },
  {
    type: "text",
    label: "Your Message",
    name: "message",
    required: "true",
    tag: "textarea",
  },
];
export default class ContactForm extends HTMLElement {
  shadow: ShadowRoot;
  form: HTMLFormElement | undefined;
  onSubmit: (() => void) | undefined;
  constructor() {
    super();
    this.shadow = createShadowDomWithStyle(this, style);
    this.render();
  }

  render() {
    const wrapper = createElementWithAttribute("section", {
      className: "contact",
    });

    const sectionTitle = createElementWithAttribute("h1", {});
    sectionTitle.textContent = "Contact Me";

    const personalEmailWrapper = createElementWithAttribute("div", {
      className: "personal-mail-wrapper",
    });
    const mailIcon = createElementWithAttribute("img", {
      src: mailSvg,
    });
    const personalEmail = document.createElement("p");
    personalEmail.textContent = "yanisgerst.pro@gmail.com";

    const divider = createElementWithAttribute("span", {
      className: "divider",
    });

    const form = createElementWithAttribute("form", {
      id: "contact-form",
    });
    this.addAllInputs(form);

    const submitButton = createElementWithAttribute("button", {
      className: "form__submit-button btn",
    });
    submitButton.textContent = "Send Message";

    this.shadow.appendChild(wrapper);
    wrapper.appendChild(sectionTitle);
    wrapper.appendChild(personalEmailWrapper);
    wrapper.appendChild(divider);
    wrapper.appendChild(form);

    personalEmailWrapper.appendChild(mailIcon);
    personalEmailWrapper.appendChild(personalEmail);

    form.appendChild(submitButton);
  }

  addAllInputs(form: HTMLFormElement) {
    inputsConfig.forEach((config) => {
      const div = createElementWithAttribute("div", {
        className: "form__input-wrapper",
      });

      const label = createElementWithAttribute("label", {
        className: "form__label",
        htmlFor: config.name,
      });
      label.textContent = config.label;

      const eltTag = config.tag ? config.tag : "input";
      const elt = createElementWithAttribute(eltTag, {
        type: eltTag === "input" ? config.type : undefined,
        name: config.name,
        id: config.name,
        required: config.required,
        className: `form__${eltTag} ${config.className}`,
      });

      div.appendChild(label);
      div.appendChild(elt);
      form.appendChild(div);
    });
  }

  connectedCallback() {
    this.form = this.shadow.querySelector("#contact-form") as HTMLFormElement;
    if (!this.form) {
      throw Error("Can't form in ContactForm Component");
    }

    this.form.addEventListener("submit", (e: Event) => {
      e.preventDefault();
      const entryData = new FormData(this.form);
      const emailConfig: EmailConfig = {
        from: entryData.get("email") as string,
        body: entryData.get("message") as string,
        name: entryData.get("name") as string,
      };

      sendEmail(emailConfig);

      this.form?.reset();
    });
  }
}
