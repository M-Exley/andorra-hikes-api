import { capitalise } from "./capitalise";
import getHikeInfo from "./getHikeInfo";
import count from "./counter";

// this function is very similar to filterByParish.... but not equal
// this function filter on clicking one of the options!!!

export default function filterByDifficulty(arrayOfAll) {
  const difficultyOptions = document.querySelectorAll(".difficulty-codes div");
  const toArray = [...difficultyOptions];
  const hikeListMaster = document.querySelector(".hike-list-master");
  let newArray = [];

  toArray.forEach((difficulty) =>
    difficulty.addEventListener("click", (e) => {
      const target = e.target.id.toLowerCase();
      // console.log(target); // returns twice?

      newArray = arrayOfAll.filter((hikeObj) => hikeObj.difficulty === target);

      hikeListMaster.innerHTML = "";

      for (const hike of newArray) {
        hikeListMaster.innerHTML += `<div class="hike-cards" data-set="${hike.difficulty}" id="${capitalise(target)}">${hike.trail}</div>`;
      }
      count();

      getHikeInfo();
    }),
  );
}
