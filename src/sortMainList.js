import cycleArray from "./cycleArray";
import { arrayOfAll } from "./getHikes";
import openHikeDiv from "./openHikeDiv"; // to open random hike object
import { map } from "./loadLeaflet";
import changeParishBorderColour from "./colourCodeParish";
import filterByParish from "./filterByParish";
import filterByDifficulty from "./filterByDifficulty";

/* all of the sticky menu buttons live here */
export const sortMainAlphabetically = function () {
  const sortAlphabetically = arrayOfAll.sort((a, b) =>
    a.trail.localeCompare(b.trail),
  );
  console.log(`Sorted alphabetically: `, sortAlphabetically);
  cycleArray(sortAlphabetically);
  // document.querySelectorAll(".hike-cards").classList.toggle("hike-cards-active");
};

export const sortMainByParish = function () {
  const sortByParish = arrayOfAll.sort((a, b) => a.area.localeCompare(b.area));
  console.log(`Sorted by parish: `, sortByParish);
  cycleArray(sortByParish);

  sortByParish.forEach((hike) => {
    const value = String(hike.area);

    changeParishBorderColour(value);
  });
  filterByParish(arrayOfAll); // filtering original array and passing in as argument
};

export const sortMainByDifficulty = function () {
  const sortByDifficulty = arrayOfAll.sort((a, b) =>
    a.difficulty.localeCompare(b.difficulty),
  );
  console.log(`Sorted by difficulty: `, sortByDifficulty);
  cycleArray(sortByDifficulty);

  filterByDifficulty(arrayOfAll);
};

export const sortMainByRandom = function () {
  const sortByRandom = Math.floor(Math.random() * arrayOfAll.length);
  const found = arrayOfAll.find((hike) => hike.number == sortByRandom);
  document.querySelector(".hike-card-container").innerHTML = "";

  if (map) {
    map.remove(); // clears map div as per Leaflet's demands
  }
  openHikeDiv(found); // FIXME: this causes an issue with the randomise button when selected FIRST
  // getHikeInfo(found); // this causes an issue with the randomise button
};
// this is not finished XX logic finished but could do with some more work
