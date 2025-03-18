import { arrayOfAll } from "./getHikes";
import openHikeDiv from "./openHikeDiv"; // to open random hike object

/* all of the sticky menu buttons live here */
export const sortMainAlphabetically = function () {
  const sortAlphabetically = arrayOfAll.sort((a, b) =>
    a.trail.localeCompare(b.trail),
  );
  console.log(sortAlphabetically);
};

export const sortMainByParish = function () {
  const sortByParish = arrayOfAll.sort((a, b) => a.area.localeCompare(b.area));
  console.log(sortByParish);
};

export const sortMainByDifficulty = function () {
  const sortByDifficulty = arrayOfAll.sort((a, b) =>
    a.difficulty.localeCompare(b.difficulty),
  );
  console.log(sortByDifficulty);
};

export const sortMainByRandom = function () {
  const sortByRandom = Math.floor(Math.random() * arrayOfAll.length);
  const found = arrayOfAll.find((hike) => hike.number == sortByRandom);
  //   console.log(found); // works > now add to openHikeDev
  document.querySelector(".hike-card-container").innerHTML = "";
  openHikeDiv(found);
};
