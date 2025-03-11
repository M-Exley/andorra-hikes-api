import capitalise from "./capitaliise";
import nameIDStamp from "./nameIDStamp";
import deleteBookDiv from "./deleteDivFn";
import counter from "./counter";
import { bookLibrary } from "./bookFactoryFn";
import filterRead from "./filterRead";
import adjustBookSize from "./adjustBookSize";

// push the new book object to the container
export default function pushBookToContainer({ title, author, pages, read }) {
  const cardContainer = document.getElementById("cards-container");
  const notReadContainer = document.querySelector(".notread");
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  const resString = `${capitalise(title).trim()}, by <br> ${capitalise(author).trim()} is ${pages} pages long. <br> ${read} `;
  bookCard.innerHTML = `
  ${resString}
  <button class="button-delete">Delete</button>
  <button class="toggle-read">${read === "Read" ? "Mark as not read" : "Mark as read"}</button>
  `;

  nameIDStamp(bookCard, title);
  filterRead(read);
  counter(bookLibrary);
  adjustBookSize(bookCard, pages);
  read === "Read"
    ? cardContainer.appendChild(bookCard)
    : notReadContainer.appendChild(bookCard);

  deleteBookDiv(); // works > calls but doesn't react until clicked
}
