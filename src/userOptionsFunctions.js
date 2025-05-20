const favouritesMaster = document.querySelector(".favourites-master");
const completedMaster = document.querySelector(".completed-master");
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

function notification(task) {
  document.querySelector(".notification").style.display = "block";
  document.querySelector(".notification").textContent = `Added to ${task}!`;
  setTimeout(() => {
    document.querySelector(".notification").style.display = "none";
  }, 2200);
}

function warn(task) {
  document.querySelector(".notification").style.display = "block";
  document.querySelector(".notification").textContent =
    `This is already in your ${task}!`;
  setTimeout(() => {
    document.querySelector(".notification").style.display = "none";
  }, 2200);
}

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
      favouritesMaster.appendChild(newFavouriteDiv);

      const nameFunction = "Favourites";
      notification(nameFunction);
    } else {
      const nameFunction = "Favourites";
      warn(nameFunction);
      return;
    }
  });
}

export function markAsComplete(completed) {
  const completedElement = document.querySelector(".completed");
  completedElement.addEventListener("click", function () {
    console.log("Add to completed");
    const title = document.querySelector(".hike-title").textContent;

    if (!completedArray.includes(title)) {
      completedArray.push(title);
      const newCompletedDiv = document.createElement("div");
      newCompletedDiv.innerHTML = `${title}`;
      newCompletedDiv.classList.add("new-completed");
      console.log(completed);
      newCompletedDiv.style.borderColor = completed;
      completedMaster.appendChild(newCompletedDiv);

      const nameFunction = "Completed";
      notification(nameFunction);
    } else {
      const nameFunction = "Completed";
      warn(nameFunction);
      return;
    }
  });
}

export function markAsToDo() {
  const toDoElement = document.querySelector(".to-do");
  toDoElement.addEventListener("click", function () {
    console.log("Add to to-do");
  });
}
