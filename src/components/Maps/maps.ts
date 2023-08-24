import { IMaps } from "./types.ts";
import memojiYanis from "../../assets/MemojiYanis.png";
import { GoogleMaps } from "./googleMaps.ts";

export const renderMap = () => {
  const map: IMaps = new GoogleMaps({
    divId: "google_map",
    position: {
      lat: 43.52491,
      lng: 5.45414,
    },
    theme: "light",
    marker: {
      position: "center",
      url: memojiYanis,
      anchor: {
        x: 46,
        y: 23,
      },
    },
  });

  map.setup();
};
