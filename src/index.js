import "./styles.css";
import AddBook from "./bookFactoryFn";
import { bookLibrary } from "./bookFactoryFn";
import pushBookToContainer from "./pushBooktoCont";
import { optionsFunction } from "./options";

AddBook();

window.onload = () => {
  pushBookToContainer(bookLibrary[0]);
  pushBookToContainer(bookLibrary[1]);
  console.clear();
  optionsFunction();
};

// these pictures always end up crashing the app
// const macaulay = new URL("./images/macaulay.jpg", import.meta.url).href;
// const pierrepoint = new URL("./images/pierrepoint.jpg", import.meta.url).href;
// const sebald = new URL("./images/sebald.jpg", import.meta.url).href;

// const images = [macaulay, pierrepoint, sebald];
// const imageLength = images.length;
// document.querySelector(".caro").innerHTML =
//   `Books in carousel: ${imageLength} `;

// let index = 0;

// const imgElement = document.getElementById("carousel-image");
// const nextButton = document.getElementById("next");
// const prevButton = document.getElementById("prev");

// // Function to update the image
// function updateImage() {
//   imgElement.src = images[index];
// }

// // Next Image
// nextButton.addEventListener("click", () => {
//   index = (index + 1) % images.length;
//   updateImage();
// });

// // Previous Image
// prevButton.addEventListener("click", () => {
//   index = (index - 1 + images.length) % images.length;
//   updateImage();
// });

// // Auto-play (optional)
// setInterval(() => {
//   index = (index + 1) % images.length;
//   updateImage();
// }, 10000);
