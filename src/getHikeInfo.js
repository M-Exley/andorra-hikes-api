/* this function will open up the object and display the data in the second column

    call getHike() ???  > no                                */

import findHikeInArray from "./findHikeInArray";
import openHikeDiv from "./openHikeDiv";
import destructure from "./destructure";

export default function getHikeInfo() {
  document.querySelectorAll(".hike-cards").forEach((div) => {
    div.addEventListener("click", function () {
      document.querySelector(".hike-card-container").innerHTML = "";
      const nameOfHike = div.textContent.trim();

      const findResult = findHikeInArray(nameOfHike); // Compares div and nameOfHike. searches the arrayOfAll > true with some. now it logs nameOfHike (clicked hike)
      console.log(`Name of hike: ${nameOfHike}`, findResult);
      const findResultDestructured = destructure(findResult); // this works! > move to openHikeDiv
      // does it work??
      console.log(typeof findResultDestructured, findResultDestructured);
      openHikeDiv(findResultDestructured); // see line above

      return nameOfHike; // n.b. that it works when clicked but is undefined before
    });
  });
}
