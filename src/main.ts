import CustomHeader from "./components/CustomHeader/Custom-header.ts";
import CustomFooter from "./components/CustomFooter/CustomFooter.ts";
import ContactForm from "./components/ContactForm/ContactForm.ts";
import Project from "./components/Project/Project.ts";
import ThemeButton from "./components/ThemeButton/themeButton.ts";
import socialLink from "./components/SocialLinks/SocialLink.ts";
import { handleLocation } from "./script/router.ts";
import { setThemeOfApp } from "./script/theme.ts";

export const appId = "app";
export type IProjectName = "things" | "pizzaLegend" | "studentPlatform";

customElements.define("custom-header", CustomHeader);
customElements.define("custom-footer", CustomFooter);
customElements.define("contact-form", ContactForm);
customElements.define("my-project", Project);
customElements.define("theme-button", ThemeButton);
customElements.define("social-link", socialLink);

await handleLocation();
