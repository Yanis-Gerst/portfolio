import gsap from "gsap";

const followMouseCursor = (e: MouseEvent) => {
  const cursor = document.querySelector(".custom-cursor");
  let mouseX = e.clientX;
  let mouseY = e.clientY;

  gsap.to(cursor, {
    top: mouseY + "px",
    left: mouseX + "px",
    duration: 0,
  });
};

export const handlerHover = (
  dom: Document | ShadowRoot,
  classNames: string[] = [],
  htmlTag: any = "a"
) => {
  dom
    .querySelectorAll("button")
    .forEach((button) => handleClassOnHoverables(button, classNames));
  dom.querySelectorAll(htmlTag).forEach((link) => {
    if (link.querySelectorAll("button").length > 0) return;
    handleClassOnHoverables(link, classNames);
  });
};

const handleClassOnHoverables = (
  element: HTMLElement,
  classNames: string[]
) => {
  const cursor = document.querySelector(".custom-cursor") as HTMLElement;
  if (!cursor) return;
  element.addEventListener("mouseenter", (e) => {
    addHoverClass(cursor, classNames);
    e.stopPropagation();
  });
  element.addEventListener("mouseleave", (e) => {
    removeHoverClass(cursor, classNames);
    e.stopPropagation();
  });
};

const methodOnHoverClass = (
  cursor: HTMLElement,
  classNames: string[],
  method: "add" | "remove"
) => {
  const customCursorHoverClass = "custom-cursor--hover";
  cursor.classList[method](customCursorHoverClass);
  classNames.forEach((className) => cursor.classList[method](className));
};

const addHoverClass = (cursor: HTMLElement, classNames: string[]) => {
  methodOnHoverClass(cursor, classNames, "add");
};

const removeHoverClass = (cursor: HTMLElement, classNames: string[]) => {
  methodOnHoverClass(cursor, classNames, "remove");
};

export const setupCustomCursor = () => {
  window.addEventListener("mousemove", followMouseCursor);
  handlerHover(document, [
    "custom-cursor--hover-emoji",
    "custom-cursor--hover-wave",
  ]);

  handleThemeChange();
};

const handleThemeChange = () => {
  window.addEventListener("theme-change", clearCursorClass);
};

const clearCursorClass = () => {
  const cursor = document.querySelector(".custom-cursor") as HTMLElement;
  if (!cursor) return;
  cursor.classList.forEach((className) => {
    if (!className.includes("hover")) return;
    cursor.classList.remove(className);
  });
};
