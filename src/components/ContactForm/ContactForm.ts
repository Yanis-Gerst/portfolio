import {
  createElementWithAttribute,
  createShadowDomWithStyle,
} from "../../utils/domManipulation.ts";
import style from "./style.css?inline";
import { sendEmail } from "../../utils/mail.ts";

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

    personalEmailWrapper.innerHTML +=
      '<svg role="img" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
      "<title>My email</title> \n" +
      '<g id="Email" clip-path="url(#clip0_390_1422)">\n' +
      '<path id="Vector" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#121212"/>\n' +
      "</g>\n" +
      "<defs>\n" +
      '<clipPath id="clip0_390_1422">\n' +
      '<rect width="24" height="24" fill="white"/>\n' +
      "</clipPath>\n" +
      "</defs>\n" +
      "</svg>\n";
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
