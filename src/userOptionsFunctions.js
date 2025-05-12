import { map } from "./loadLeaflet";

export function closeModal() {
  const spanElement = document.querySelector(".X");
  spanElement.addEventListener("click", function () {
    console.log("Close fake modal");
    const hikeCardDiv = document.querySelector(".hike-card-div");
    hikeCardDiv.style.display = "none";
    document.querySelector(".hike-card-container").style.backgroundColor =
      "gray";
    document.getElementById("map").style.display = "none"; // doesn't work anymore
  });
}
// function completed
export function addToFavourites() {
  const favouriteElement = document.querySelector(".favourite");
  favouriteElement.addEventListener("click", function () {
    console.log("Add to favourites");
  });
}

export function markAsComplete() {
  const completedElement = document.querySelector(".completed");
  completedElement.addEventListener("click", function () {
    console.log("Add to completed");
  });
}

export function markAsToDo() {
  const toDoElement = document.querySelector(".to-do");
  toDoElement.addEventListener("click", function () {
    console.log("Add to to-do");
  });
}
