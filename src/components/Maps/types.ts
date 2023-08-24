type Coord = {
  x: number;
  y: number;
};

export type GeographicPosition = {
  lat: number;
  lng: number;
};

export type Themes = "light" | "dark";

export type IMarker = {
  url: string;
  anchor: Coord;
  position: GeographicPosition | "center";
};
export interface IMaps {
  divId: string;
  position: GeographicPosition;
  theme: Themes;
  marker?: IMarker;
  setup: () => void;
}
