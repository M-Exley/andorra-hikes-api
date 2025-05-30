import getHikeInfo from "./getHikeInfo";
// /* this function serves purely to cycle through the array in most of the sortMainList functions */
export default async function cycleArray(array) {
  const container = document.querySelector(".hike-list-master");
  container.innerHTML = "";
  for (const hike of array) {
    container.innerHTML += `<div class="hike-cards ${hike.difficulty}" data-set="${hike.area}">${hike.trail}</div>`;
  }

  getHikeInfo();
}
// this function is finished
