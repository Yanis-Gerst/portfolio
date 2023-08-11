import CustomButton from "./components/CustomButton/Custom-button.ts";
import CustomTags from "./components/CustomTag/Custom-tags.ts";
import CustomHeader from "./components/CustomHeader/Custom-header.ts";

customElements.define("custom-button", CustomButton);
customElements.define("custom-tags", CustomTags);
customElements.define("custom-header", CustomHeader);

const test = document.querySelector("custom-button") as CustomButton;

test.onClick = () => console.log("CC");
