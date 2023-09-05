import { expect } from "vitest";
import { createElementWithAttribute } from "../../utils/domManipulation.ts";
import ThemeButton from "./themeButton.ts";
import { setThemeOfApp } from "../../script/theme.ts";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

customElements.define("theme-button", ThemeButton);

const setupAppEnvironment = () => {
  const divApp = createElementWithAttribute("div", {
    id: "app",
  });
  document.documentElement.appendChild(divApp);
};

beforeEach(() => {
  setupAppEnvironment();
  setThemeOfApp();
});

test("ThemeButton change the theme", () => {
  const themeNode = new ThemeButton();
  const button = themeNode.shadowRoot?.querySelector(
    "button",
  ) as HTMLButtonElement;
  button.click();

  const divApp = document.querySelector("#app") as HTMLDivElement;
  expect(divApp.getAttribute("data-theme")).toBe("dark");
});
