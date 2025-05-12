import getHikeInfo from "./getHikeInfo";

export default function filterByParish(arrayOfAll) {
  const parishes = document.querySelectorAll(".colour-codes div");
  const toArray = [...parishes];
  const allHikeDivs = document.querySelectorAll(".hike-cards");
  const toArrayHikes = [...allHikeDivs];
  const hikeListMaster = document.querySelector(".hike-list-master");
  let newArray = [];

  toArray.forEach((parish) => {
    parish.addEventListener("click", (e) => {
      parish.style.backgroundColor = "";
      const target = e.target.textContent;
      console.log(target);

      toArrayHikes.forEach((hike) => {
        if (hike.dataset.set === target) {
          console.log(hike);
          newArray = arrayOfAll.filter((hikeObj) => hikeObj.area === target);
          console.log(newArray);
        }
        hikeListMaster.innerHTML = "";
        const hyphenatedTarget = target.replace(/\s+/g, "-");

        for (const hike of newArray) {
          hikeListMaster.innerHTML += `<div class="hike-cards" data-set="${hike.area}" id="${hyphenatedTarget}">${hike.trail}</div>`;
        }

        const currentBorderColor = window.getComputedStyle(parish).borderColor;
        parish.style.backgroundColor = currentBorderColor;

        setTimeout(() => {
          parish.style.backgroundColor = "";
        }, 200);
      });
      getHikeInfo();
    });
  });
}
