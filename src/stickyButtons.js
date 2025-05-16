import count from "./counter";
import {
  sortMainAlphabetically,
  sortMainByParish,
  sortMainByDifficulty,
  sortMainByRandom,
} from "./sortMainList";

/* this function will control the filter buttons in the hike list by using sortMainList*/

export default function stickyButtons() {
  const buttons = document.querySelectorAll(".button-options button");
  const toArray = [...buttons];
  toArray.forEach((button) => {
    button.addEventListener("click", function (e) {
      const res = e.target.value;
      const resTarget = e.target;
      resTarget.classList.add("button-active");
      document.querySelector(".container").scrollTop = 0;

      const resultOfStickyClick = [];
      resultOfStickyClick.push(res);
      console.log(resultOfStickyClick);
      /* ternary operation below to cycle through sort functions 
            ternary is not sufficient
      */
      if (String(resultOfStickyClick) === "alphabet") {
        sortMainAlphabetically();
        count();

        document.querySelector(".colour-codes").style.display = "none";
        document.querySelector(".difficulty-codes").style.display = "none";
      } else if (String(resultOfStickyClick) === "parish") {
        sortMainByParish();
        count();
        document.querySelector(".difficulty-codes").style.display = "none";
        document.querySelector(".colour-codes").style.display = "flex";
      } else if (String(resultOfStickyClick) === "difficulty") {
        sortMainByDifficulty();
        count();
        document.querySelector(".colour-codes").style.display = "none";
        document.querySelector(".difficulty-codes").style.display = "flex";
      } else if (String(resultOfStickyClick) === "randomise") {
        sortMainByRandom();
        count();
        document.querySelector(".colour-codes").style.display = "none";
        document.querySelector(".difficulty-codes").style.display = "none";
      }
    });
  });
}

// export { resultOfStickyClick };
