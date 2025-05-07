import getHikeInfo from "./getHikeInfo";
// /* this function serves purely to cycle through the array in the  sortMainList functions */
export default async function cycleArray(array) {
  const container = document.querySelector(".hike-list-master");
  container.innerHTML = "";
  for (const hike of array) {
    container.innerHTML += `<div class="hike-cards">${hike.trail}</div>`;
  }

  getHikeInfo(); // works
}
// this function is finished and I don't want to add the colourCodeParish to it
