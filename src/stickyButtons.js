import {
  sortMainAlphabetically,
  sortMainByParish,
  sortMainByDifficulty,
  sortMainByRandom,
} from "./sortMainList";

/* this function will control the sticky buttons in the hike list by using sortMainList*/

export default function stickyButtons() {
  const buttons = document.querySelectorAll(".button-options button");
  const toArray = [...buttons];
  toArray.forEach((button) => {
    button.addEventListener("click", function (e) {
      const res = e.target.value;
      const resultOfStickyClick = [];
      resultOfStickyClick.push(res);
      //   console.log(resultOfStickyClick);
      /* ternary operation below to cycle through sort functions 
            ternary is not sufficient
      */
      if (String(resultOfStickyClick) === "alphabet") {
        sortMainAlphabetically();
      } else if (String(resultOfStickyClick) === "parish") {
        sortMainByParish();
      } else if (String(resultOfStickyClick) === "difficulty") {
        sortMainByDifficulty();
      } else if (String(resultOfStickyClick) === "randomise") {
        sortMainByRandom();
      }
    });
  });
}

// export { resultOfStickyClick };
