import { map } from "./loadLeaflet";
const optionsMaster = document.querySelector(".options-master");
// push objects into arrays
const favouritesArray = [];
const completedArray = [];
const toDoArray = [];

export function closeModal() {
  const spanElement = document.querySelector(".X");
  spanElement.addEventListener("click", function () {
    console.log("Close fake modal");
    const hikeCardDiv = document.querySelector(".hike-card-div");
    hikeCardDiv.style.display = "none";
    document.querySelector(".hike-card-container").style.backgroundColor =
      "gray";
    document.getElementById("map").style.display = "none"; // doesn't work anymore? check fixed
  });
}
// function completed
export function addToFavourites(difficulty) {
  const favouriteElement = document.querySelector(".favourite");
  favouriteElement.addEventListener("click", function () {
    console.log("Add to favourites");
    const title = document.querySelector(".hike-title").textContent;
    console.log("before", favouritesArray);

    if (!favouritesArray.includes(title)) {
      favouritesArray.push(title);
      const newFavouriteDiv = document.createElement("div");
      newFavouriteDiv.innerHTML = `${title}`;
      newFavouriteDiv.classList.add("new-favourite");
      console.log(difficulty);
      newFavouriteDiv.style.borderColor = difficulty;
      optionsMaster.appendChild(newFavouriteDiv);
      optionsMaster.style.display = "flex";
    } else {
      alert("this is already in your favourites");
      return;
    }
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
