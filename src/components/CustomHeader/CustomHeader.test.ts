import CustomHeader from "./Custom-header.ts";
import { fireEvent } from "@testing-library/dom";
import { describe } from "vitest";

customElements.define("custom-header", CustomHeader);

describe("Mobile Version, when click on hamburger", () => {
  it("should open the hamburger", () => {
    const node = new CustomHeader();

    const hamburger = node.shadow.querySelector("img") as Element;
    const menu = node.shadow.querySelector(
      ".wrapper__hamburger-menu",
    ) as Element;
    fireEvent.click(hamburger);

    expect(node.open).toBeTruthy();
    expect(Array.from(menu.classList)).toContain(
      "wrapper__hamburger-menu--open",
    );
  });

  it("should close the hamburger menu if click two time", () => {
    const node = new CustomHeader();

    const hamburger = node.shadow.querySelector("img") as Element;
    const menu = node.shadow.querySelector(
      ".wrapper__hamburger-menu",
    ) as Element;
    fireEvent.click(hamburger);
    fireEvent.click(hamburger);

    expect(node.open).toBeFalsy();
    expect(Array.from(menu.classList)).not.toContain(
      "wrapper__hamburger-menu--open",
    );
  });
});
