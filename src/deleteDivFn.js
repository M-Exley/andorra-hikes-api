// this modules uses findIndex and splice to find and delete the div.
import { bookLibrary } from "./bookFactoryFn";
import counter from "./counter";
import hideEmptyDiv from "./hideEmptyDiv";

export default function deleteBookDiv() {
  document
    .querySelectorAll(".maincontainer .book-card")
    .forEach((bookCardDiv) => {
      bookCardDiv.addEventListener("click", function (e) {
        if (
          e.target.tagName === "BUTTON" &&
          e.target.textContent === "Delete"
        ) {
          const target = e.target;
          const parent = target.parentElement;
          const bookId = parent.getAttribute("id");

          if (bookId === "History of England") {
            alert("You cannot delete the default book!");
            return;
          } else {
            // Find the index of the book
            const bookIndex = bookLibrary.findIndex((book) => {
              return String(book.title).trim() === String(bookId).trim();
            });
            if (bookIndex !== -1) {
              bookLibrary.splice(bookIndex, 1); // Remove the book from the array
            }
            bookCardDiv.remove();
            counter(bookLibrary);

            const notReadContainer = document.querySelector(".notread");
            const readContainer = document.getElementById("cards-container");
            hideEmptyDiv(notReadContainer);
            hideEmptyDiv(readContainer);
          }
        }
      });
    });
}
