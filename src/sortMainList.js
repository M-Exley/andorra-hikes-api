import cycleArray from "./cycleArray";
import { arrayOfAll } from "./getHikes";
import openHikeDiv from "./openHikeDiv";
import { map } from "./loadLeaflet";
import changeParishBorderColour from "./colourCodeParish";
import filterByParish from "./filterByParish";
import filterByDifficulty from "./filterByDifficulty";

/* all of the filter menu buttons live here */
export const sortMainAlphabetically = function () {
  const sortAlphabetically = arrayOfAll.sort((a, b) =>
    a.trail.localeCompare(b.trail),
  );
  // console.log(`Sorted alphabetically: `, sortAlphabetically);
  cycleArray(sortAlphabetically);
};

export const sortMainByParish = function () {
  const sortByParish = arrayOfAll.sort((a, b) => a.area.localeCompare(b.area));
  // console.log(`Sorted by parish: `, sortByParish);
  cycleArray(sortByParish);

  sortByParish.forEach((hike) => {
    const value = String(hike.area);

    changeParishBorderColour(value);
  });
  filterByParish(arrayOfAll); // filtering original array and passing in as argument: ACTIVATES CLICK
};

export const sortMainByDifficulty = function () {
  const sortByDifficulty = arrayOfAll.sort((a, b) =>
    a.difficulty.localeCompare(b.difficulty),
  );
  // console.log(`Sorted by difficulty: `, sortByDifficulty);
  cycleArray(sortByDifficulty);

  filterByDifficulty(arrayOfAll); // ACTIVATES CLICK
};

export const sortMainByRandom = function () {
  // this one doesn't call cycleArray()
  const sortByRandom = Math.floor(Math.random() * arrayOfAll.length);
  const found = arrayOfAll.find((hike) => hike.number == sortByRandom);
  document.querySelector(".hike-card-container").innerHTML = "";

  if (map) {
    map.remove();
  }
  document.getElementById("map").style.display = "block";
  openHikeDiv(found);
};
