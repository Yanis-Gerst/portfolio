import { Loader } from "@googlemaps/js-api-loader";

import { GeographicPosition, IMaps, IMarker, Themes } from "./types.ts";

const lightMapStyle: google.maps.MapTypeStyle[] = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#f5f5f5",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#bdbdbd",
      },
    ],
  },
  {
    featureType: "poi",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#757575",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#dadada",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#616161",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
  {
    featureType: "transit",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [
      {
        color: "#e5e5e5",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [
      {
        color: "#eeeeee",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#c9c9c9",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9e9e9e",
      },
    ],
  },
];

export class GoogleMaps implements IMaps {
  divId: string;
  divElement: HTMLElement;
  position: GeographicPosition;
  theme: Themes;
  marker?: IMarker;
  static APIKEY = "AIzaSyAUDYHMzE-6z-TRTNtUrCYv7wjm23qO2Wg";
  constructor(config: Omit<IMaps, "setup">) {
    this.divId = config.divId;
    this.divElement = this.getDivIdElement();
    this.position = config.position;
    this.theme = config.theme;
    this.marker = config.marker;
  }

  async setup() {
    const loader = new Loader({
      apiKey: GoogleMaps.APIKEY,
      version: "weekly",
    });

    const { Map } = await loader.importLibrary("maps");

    const mapOptions: google.maps.MapOptions = {
      center: this.position,
      zoom: 12,
      mapTypeControl: false,
      fullscreenControl: false,
      zoomControl: false,
      streetViewControl: false,
      scrollwheel: false,
      styles: lightMapStyle,
    };

    const map: google.maps.Map = new Map(this.divElement, mapOptions);

    const customMarker = this.createCustomMarker();

    new google.maps.Marker({
      position:
        this.marker?.position === "center"
          ? this.position
          : this.marker?.position,
      map,
      icon: customMarker,
    });

    this.handleZoom(map);
  }

  getDivIdElement() {
    const divIdElement = document.getElementById(this.divId);
    if (!divIdElement) throw Error(`Don't find element of id: ${this.divId}`);
    return divIdElement;
  }

  createCustomMarker() {
    if (!this.marker) return null;
    const anchorPosition = this.marker.anchor;

    const customMarker: google.maps.Icon = {
      url: this.marker.url,
      anchor: new google.maps.Point(anchorPosition.x, anchorPosition.y),
    };
    return customMarker;
  }

  handleZoom(map: google.maps.Map) {
    this.divElement.addEventListener("wheel", function (event) {
      const zoomLevel = map.getZoom();
      if (!zoomLevel) throw Error("Map Can't zoom");

      if (event.deltaY && event.deltaY < 0) {
        map.setZoom(zoomLevel + 1);
      } else {
        map.setZoom(zoomLevel - 1);
      }

      event.preventDefault();
    });
  }
}
