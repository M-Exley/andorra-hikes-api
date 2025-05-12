import { capitalise } from "./capitalise";
import getHikeInfo from "./getHikeInfo";

// this function is very similar to filterByParish.... but not equal

export default function filterByDifficulty(arrayOfAll) {
  const difficultyOptions = document.querySelectorAll(".difficulty-codes div");
  const toArray = [...difficultyOptions];
  const hikeListMaster = document.querySelector(".hike-list-master");
  let newArray = [];

  toArray.forEach((difficulty) =>
    difficulty.addEventListener("click", (e) => {
      const target = e.target.id.toLowerCase();

      newArray = arrayOfAll.filter((hikeObj) => hikeObj.difficulty === target);

      hikeListMaster.innerHTML = "";

      for (const hike of newArray) {
        hikeListMaster.innerHTML += `<div class="hike-cards new-colour" data-set="${hike.area}" id="${capitalise(target)}">${hike.trail}</div>`;
      }
      getHikeInfo();
    }),
  );
}
