import CustomHeader from "./components/CustomHeader/Custom-header.ts";
import CustomFooter from "./components/CustomFooter/CustomFooter.ts";
import ContactForm from "./components/ContactForm/ContactForm.ts";
import Project from "./components/Project/Project.ts";
import ThemeButton from "./components/ThemeButton/themeButton.ts";
import socialLink from "./components/SocialLinks/SocialLink.ts";
import { handleLocation, IRoute } from "./script/router.ts"; 
import { Themes } from "./components/Maps/types.ts";
import { setupLandingPage } from "./script/landingPage.ts";
import { renderDetailsPage } from "./script/detailsPage.ts";
import landingPageCss from "./styles/landing/landingPage.css?inline";
import detailsPageCss from "./styles/details/detailsPage.css?inline";
import detailsPageHTML from "./pages/details.html?url";

export const appId = "app";
export const themes: ReadonlyArray<Themes> = ["light", "dark"] as const;

const projectDetails = {
  html: detailsPageHTML,
  css: detailsPageCss,
} as const;

export const routes: IRoute = {
  "4O4": {
    html: "/src/pages/notFound.html",
    css: "/src/styles/404.css",
  },
  "/": {
    html: "index.html",
    css: landingPageCss,
    js: setupLandingPage,
  },
  "/things": {
    ...projectDetails,
    js: () => renderDetailsPage("things"),
  },
  "/pizza-legend": {
    ...projectDetails,
    js: () => renderDetailsPage("pizzaLegend"),
  },
  "/student-platform": {
    ...projectDetails,
    js: () => renderDetailsPage("studentPlatform"),
  },
};

customElements.define("custom-header", CustomHeader);
customElements.define("custom-footer", CustomFooter);
customElements.define("contact-form", ContactForm);
customElements.define("my-project", Project);
customElements.define("theme-button", ThemeButton);
customElements.define("social-link", socialLink);

handleLocation().then();
