// this function should only display the hikes in the container and export as array, nothing more
import getHikeInfo from "./getHikeInfo";
import hikes from "./hikes.json";
import stickyButtons from "./stickyButtons";

const arrayOfAll = []; // array to store objects

export default async function getHikes() {
  for await (const hike of hikes) {
    const container = document.querySelector(".container");
    arrayOfAll.push(hike);

    // container.innerHTML += `<div class="hike-cards">${hike.number}: ${hike.trail}</div>`;
    container.innerHTML += `<div class="hike-cards">${hike.trail}</div>`;
  }

  console.group(arrayOfAll);
  getHikeInfo(); // this is here ONLY to avoid being in the global scope of index
  stickyButtons();
}

export { arrayOfAll };
