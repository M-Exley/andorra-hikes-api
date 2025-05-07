import cycleArray from "./cycleArray";
import { arrayOfAll } from "./getHikes";
import openHikeDiv from "./openHikeDiv"; // to open random hike object
import changeParishBorderColour from "./colourCodeParish";

/* all of the sticky menu buttons live here */
export const sortMainAlphabetically = function () {
  const sortAlphabetically = arrayOfAll.sort((a, b) =>
    a.trail.localeCompare(b.trail),
  );
  console.log(`Sorted alphabetically: `, sortAlphabetically);
  cycleArray(sortAlphabetically);
};

export const sortMainByParish = function () {
  const sortByParish = arrayOfAll.sort((a, b) => a.area.localeCompare(b.area));
  console.log(`Sorted by parish: `, sortByParish);
  const zones = () => {
    arrayOfAll.forEach((hike) => {
      const zonesResult = hike.area;
      console.log("1", zonesResult);
      // changeParishBorderColour();
    });
  };
  zones();
  cycleArray(sortByParish);
};

export const sortMainByDifficulty = function () {
  const sortByDifficulty = arrayOfAll.sort((a, b) =>
    a.difficulty.localeCompare(b.difficulty),
  );
  console.log(`Sorted by difficulty: `, sortByDifficulty);
  cycleArray(sortByDifficulty);
};

export const sortMainByRandom = function () {
  const sortByRandom = Math.floor(Math.random() * arrayOfAll.length);
  const found = arrayOfAll.find((hike) => hike.number == sortByRandom);
  document.querySelector(".hike-card-container").innerHTML = "";
  openHikeDiv(found);
};
// this is not finished XX logic finished but could do with some more work
