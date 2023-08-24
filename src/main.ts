import CustomHeader from "./components/CustomHeader/Custom-header.ts";
import CustomFooter from "./components/CustomFooter/CustomFooter.ts";
import ContactForm from "./components/ContactForm/ContactForm.ts";
import Project from "./components/Project/Project.ts";
import { setupParallax } from "./script/parallax.ts";
import { renderMap } from "./components/Maps/maps.ts";

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

const hiddenScrollArrowOnScroll = () => {
  window.addEventListener("scroll", () => {
    const scrollArrow = document.querySelector(
      ".scroll-arrow",
    ) as HTMLDivElement;
    if (window.scrollY > 100) {
      scrollArrow.style.opacity = "0";
      return;
    }
    scrollArrow.style.opacity = "1";
  });
};

setThemeOfApp();
hiddenScrollArrowOnScroll();
setupParallax();
renderMap();
