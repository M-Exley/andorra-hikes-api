import cycleArray from "./cycleArray";
import { arrayOfAll } from "./getHikes";
import openHikeDiv from "./openHikeDiv"; // to open random hike object. No > getHikeInfo
import { map } from "./loadLeaflet";
import changeParishBorderColour from "./colourCodeParish";
import filterByParish from "./filterByParish";
import filterByDifficulty from "./filterByDifficulty";
import getHikeInfo from "./getHikeInfo";

/* all of the filter menu buttons live here */
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
  console.log("found", found);
  document.querySelector(".hike-card-container").innerHTML = "";
  // this one doesn't call cycleArray() > getHikeInfo()

  if (map) {
    map.remove();
  }
  openHikeDiv(found); // this works as expected by opening the div
  document.getElementById("map").style.display = "block";
  // FIXME: this causes an issue with the randomise button when selected FIRST
  // ---- is the solution to map.display

  // getHikeInfo(found); // this causes an issue with the randomise button
};
