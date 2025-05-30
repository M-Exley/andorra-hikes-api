import getHikeInfo from "./getHikeInfo";

const favouritesMaster = document.querySelector(".favourites-master");
const completedMaster = document.querySelector(".completed-master");
const toDoMaster = document.querySelector(".to-do-master");
const notificationDiv = document.querySelector(".notification");
// push objects into arrays
const favouritesArray = [];
const completedArray = [];
const toDoArray = [];

export function closeModal() {
  const spanElement = document.querySelector(".X");
  spanElement.addEventListener("click", function () {
    const hikeCardDiv = document.querySelector(".hike-card-div");
    hikeCardDiv.style.display = "none";
    document.querySelector(".hike-card-container").style.backgroundColor =
      "gray";
    document.getElementById("map").style.display = "none";
  });
}
// function completed

function notification(task) {
  notificationDiv.textContent = `Added to ${task}!`;
  notificationDiv.classList.remove("hide");
  notificationDiv.classList.add("show");
  setTimeout(() => {
    notificationDiv.classList.remove("show");
    notificationDiv.classList.add("hide");
  }, 2200);
}

function warn(task) {
  notificationDiv.textContent = `This is already in your ${task}!`;
  notificationDiv.classList.remove("hide");
  notificationDiv.classList.add("show");
  setTimeout(() => {
    notificationDiv.classList.remove("show");
    notificationDiv.classList.add("hide");
  }, 2200);
}

export function addToFavourites(difficulty) {
  const favouriteElement = document.querySelector(".favourites");
  favouriteElement.addEventListener("click", function () {
    const title = document.querySelector(".hike-title").textContent;

    if (!favouritesArray.includes(title)) {
      favouritesArray.push(title);
      const newFavouriteDiv = document.createElement("div");
      newFavouriteDiv.innerHTML = `<button title="Remove from category" class="remove">
      X
    </button>${title}`;
      newFavouriteDiv.classList.add("new-favourite");
      newFavouriteDiv.classList.add("click-hike");
      newFavouriteDiv.style.borderColor = difficulty;
      favouritesMaster.appendChild(newFavouriteDiv);

      const nameFunction = "Favourites";
      notification(nameFunction);
    } else {
      const nameFunction = "Favourites";
      warn(nameFunction);
      return;
    }
    removeFromCategory(favouritesArray, "favourite");
  });
}

export function markAsComplete(completed) {
  const completedElement = document.querySelector(".completed");
  completedElement.addEventListener("click", function () {
    const title = document.querySelector(".hike-title").textContent;

    if (!completedArray.includes(title)) {
      completedArray.push(title);
      const newCompletedDiv = document.createElement("div");
      newCompletedDiv.innerHTML = `<button title="Remove from category" class="remove">
      X
    </button>${title}`;
      newCompletedDiv.classList.add("new-completed");
      newCompletedDiv.classList.add("click-hike");

      newCompletedDiv.style.borderColor = completed;
      completedMaster.appendChild(newCompletedDiv);

      const nameFunction = "Completed";
      notification(nameFunction);
    } else {
      const nameFunction = "Completed";
      warn(nameFunction);
      return;
    }
    removeFromCategory(completedArray, "completed");
  });
}

export function markAsToDo(toDo) {
  const toDoElement = document.querySelector(".to-do");
  toDoElement.addEventListener("click", function () {
    const title = document.querySelector(".hike-title").textContent;

    if (!toDoArray.includes(title)) {
      toDoArray.push(title);
      const newTodoDiv = document.createElement("div");
      newTodoDiv.innerHTML = `<button title="Remove from category" class="remove">
        X
      </button>${title}`;
      newTodoDiv.classList.add("new-todo");
      newTodoDiv.classList.add("click-hike");

      newTodoDiv.style.borderColor = toDo;
      toDoMaster.appendChild(newTodoDiv);

      const nameFunction = "To Do";
      notification(nameFunction);
    } else {
      const nameFunction = "To Do";
      warn(nameFunction);
      return;
    }
    removeFromCategory(toDoArray, "todo");
  });
}

function removeFromCategory(arrayName, className) {
  const allRemoveButtons = document.querySelectorAll(".remove");
  const toArray = [...allRemoveButtons];

  toArray.forEach((button) => {
    button.addEventListener("click", (e) => {
      const Target = e.target.nextSibling.textContent;

      const index = arrayName.indexOf(Target);
      if (index !== -1) {
        arrayName.splice(index, 1);
        // console.log(e.target.closest(`.new-${className}`));
        e.target.closest(`.new-${className}`).remove();
        console.log(arrayName);
      }
    });
  });
  openInfoFromOptions(); // FIXME: This resets the div to the one that is deleted
}

export function openInfoFromOptions() {
  const allHikesInOptionsMenu = document.querySelectorAll(".click-hike");

  allHikesInOptionsMenu.forEach((div) => {
    div.removeEventListener("click", handleOpenOptionsClick);
    div.addEventListener("click", handleOpenOptionsClick);
  });
}

let selectedHike = "";

function handleOpenOptionsClick(e) {
  const clicked = e.currentTarget || e.target.closest(".click-hike");
  if (!clicked) return;

  selectedHike = clicked.textContent.replace("X", "").trim();

  if (!selectedHike) {
    console.warn("No hike name found.");
    return;
  }

  getHikeInfo(selectedHike);
}
