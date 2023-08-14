import CustomHeader from "./components/CustomHeader/Custom-header.ts";
import CustomFooter from "./components/CustomFooter/CustomFooter.ts";
import ContactForm from "./components/ContactForm/ContactForm.ts";
import Project from "./components/Project/Project.ts";

customElements.define("custom-header", CustomHeader);
customElements.define("custom-footer", CustomFooter);
customElements.define("contact-form", ContactForm);
customElements.define("my-project", Project);
const setThemeOfApp = () => {
  const app = document.querySelector("#app") as Element;

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    app.setAttribute("data-theme", "dark");
    return;
  }
  app.setAttribute("data-theme", "light");
};

setThemeOfApp();
