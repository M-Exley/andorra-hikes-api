// a function to sort the hikes by all categories. Start with difficulty
import arraytoObject from "./arrayToObject";
import getSortedOption from "./getSortedOptions";
/* make the sort Difficulty button take in the new array */

export default function sortDropdown() {
  const sortButton = document.getElementById("sort-options");
  sortButton.addEventListener(
    "click",
    function (e) {
      const allKeys = arraytoObject();

      e.preventDefault();
      allKeys.forEach((key) => {
        const newSortListItem = document.createElement("option");
        newSortListItem.innerHTML = `${key}`;
        sortButton.appendChild(newSortListItem);
      });
    },
    { once: true },
  );
  getSortedOption();
}
// not being used in v2
