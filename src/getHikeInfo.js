/* this function will open up the object and display the data in the second column + map */

import findHikeInArray from "./findHikeInArray";
import openHikeDiv from "./openHikeDiv";
import destructure from "./destructure";
import { map } from "./loadLeaflet";

export default function getHikeInfo() {
  document.querySelectorAll(".hike-cards").forEach((div) => {
    div.addEventListener("click", function () {
      document.querySelector(".hike-card-container").innerHTML = "";

      if (map) {
        map.remove(); // clears map div as per Leaflet's demands
      }

      const nameOfHike = div.textContent.trim();
      const findResult = findHikeInArray(nameOfHike); // Compares div and nameOfHike. searches the arrayOfAll > true with some. now it logs nameOfHike (clicked hike)
      console.log(`Name of hike: ${nameOfHike}`, findResult);
      const findResultDestructured = destructure(findResult);
      openHikeDiv(findResultDestructured);

      document.getElementById("map").style.display = "block";

      console.log(map?.dragging.enabled());

      setTimeout(() => {
        map.invalidateSize();
      }, 100);

      return nameOfHike; // n.b. that it works when clicked but is undefined before
    });
  });
}
