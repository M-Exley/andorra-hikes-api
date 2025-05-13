// this function should only display the hikes in the container and export as array, nothing more
import count from "./counter";
import getHikeInfo from "./getHikeInfo";
import hikes from "./hikes.json";
import stickyButtons from "./stickyButtons";

const arrayOfAll = []; // array to store objects

async function cycleArrayTest() {
  const container = document.querySelector(".hike-list-master");
  container.innerHTML = ""; // this is working correctly
  for await (const hike of hikes) {
    arrayOfAll.push(hike);
    container.innerHTML += `<div class="hike-cards" data-set="${hike.area}">${hike.trail}</div>`;
  }
  count();
}

export default async function getHikes() {
  await cycleArrayTest(); // Call it inside getHikes
  console.group(arrayOfAll);
  getHikeInfo();
  stickyButtons();
}

export { cycleArrayTest, arrayOfAll };
