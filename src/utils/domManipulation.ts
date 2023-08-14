type HTMLElementConfig<T> = Partial<{
  [key in NonNullable<ExtractMutable<T>>]: string;
}>;

export const createElementWithAttribute = <
  K extends keyof HTMLElementTagNameMap,
>(
  tag: K,
  config: HTMLElementConfig<HTMLElementTagNameMap[K]>,
) => {
  const element = document.createElement(tag);
  const configKeys = Object.keys(config) as (keyof HTMLElementConfig<K>)[];
  configKeys.forEach((key) => {
    // @ts-ignore
    if (config[key] === undefined) return;
    // @ts-ignore
    element[key] = config[key];
  });
  return element;
};

export const createShadowDomWithStyle = (
  thisInstance: HTMLElement,
  src: string,
) => {
  const shadow = thisInstance.attachShadow({ mode: "open" });
  const styleElement = document.createElement("style");
  styleElement.innerHTML = src;
  shadow.appendChild(styleElement);
  return shadow;
};
