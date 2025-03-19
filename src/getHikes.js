// this function should only display the hikes in the container and export as array, nothing more
import getHikeInfo from "./getHikeInfo";
import hikes from "./hikes.json";
import stickyButtons from "./stickyButtons";

const arrayOfAll = []; // array to store objects

// export default async function getHikes() {
//   // for await (const hike of hikes) {
//   //   const container = document.querySelector(".container");
//   //   arrayOfAll.push(hike);
//   //   container.innerHTML += `<div class="hike-cards">${hike.trail}</div>`;
//   // }
//   function cycleArrayTest() {
//     for await (const hike of hikes) {
//       const container = document.querySelector(".container");
//       arrayOfAll.push(hike);
//       container.innerHTML += `<div class="hike-cards">${hike.trail}</div>`;
//     }
//     return cycleArrayTest;
//   }

//   console.group(arrayOfAll);
//   getHikeInfo(); // this is here ONLY to avoid being in the global scope of index
//   stickyButtons();
// }

// export { arrayOfAll };

async function cycleArrayTest() {
  const container = document.querySelector(".hike-list-master");
  container.innerHTML = ""; // this is working correctly
  for await (const hike of hikes) {
    arrayOfAll.push(hike);
    container.innerHTML += `<div class="hike-cards">${hike.trail}</div>`;
  }
}

export default async function getHikes() {
  await cycleArrayTest(); // Call it inside getHikes
  console.group(arrayOfAll);
  getHikeInfo();
  stickyButtons();
}

export { cycleArrayTest, arrayOfAll };
