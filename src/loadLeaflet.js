import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Manually override the default icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

let map;
export default function loadLeaflet(lat, long) {
  map = L.map("map").setView([42.545294, 1.5642089], 10.4);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  var marker = L.marker([lat, long]).addTo(map).bindPopup("Starting point");

  // location
  const findMeButton = document.querySelector(".location-button");
  findMeButton.addEventListener("click", () => {
    console.log("Find me button clicked");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }

    function success(position) {
      console.log(position.coords.latitude, position.coords.longitude);

      L.marker([position.coords.latitude, position.coords.longitude])
        .addTo(map)
        .bindPopup("Current Location");

      const bounds = L.latLngBounds([
        [lat, long],
        [position.coords.latitude, position.coords.longitude],
      ]);

      map.fitBounds(bounds, {
        padding: [20, 20],
        minZoom: 12,
      });
    }

    function error() {
      alert("Sorry, no position available.");
    }
  });
}

export { map };
