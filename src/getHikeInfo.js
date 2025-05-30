/* this function will open up the object and display the data in the second column + map

I had to change it right at the end to allow the optionsMenu hikes to be re-opened. In order to do this the function was re-structured with renderHike enclosing the bulk of the functionality and being called individually within the conditional logic 

*/

import findHikeInArray from "./findHikeInArray";
import openHikeDiv from "./openHikeDiv";
import destructure from "./destructure";
import { map } from "./loadLeaflet";

export default function getHikeInfo(clickEventFromOptions) {
  const allHikeCards = document.querySelectorAll(".hike-cards");

  if (clickEventFromOptions) {
    renderHike(clickEventFromOptions);
    return;
  }

  allHikeCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      const clickedCard = e.currentTarget || e.target.closest(".hike-cards");
      if (!clickedCard) return;

      const nameOfHike = clickedCard.textContent.trim();
      renderHike(nameOfHike);
    });
  });
}

function renderHike(nameOfHike) {
  // I think it needs something here to check whether the card container is already populated
  document.querySelector(".hike-card-container").innerHTML = "";

  if (typeof map !== "undefined" && map) {
    map.remove();
  }

  const findResult = findHikeInArray(nameOfHike);
  console.log(`Name of hike: ${nameOfHike}`, findResult);

  const findResultDestructured = destructure(findResult);
  openHikeDiv(findResultDestructured);

  const mapElement = document.getElementById("map");
  if (mapElement) {
    mapElement.style.display = "block";
  }

  map?.dragging?.enabled?.();

  setTimeout(() => {
    map?.invalidateSize?.();
  }, 100);
}
