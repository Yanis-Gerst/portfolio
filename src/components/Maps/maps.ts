import { IMaps, Themes } from "./types.ts";
import memojiYanis from "../../assets/MemojiYanis.png";
import { GoogleMaps } from "./googleMaps.ts";

export const renderMap = () => {
  const map: IMaps = new GoogleMaps({
    divId: "google_map",
    position: {
      lat: 43.52491,
      lng: 5.45414,
    },
    theme: document.body.getAttribute("data-theme") as Themes,
    marker: {
      position: "center",
      url: memojiYanis,
      anchor: {
        x: 32,
        y: 16,
      },
    },
  });

  map.setup();
};
