import { bookLibrary } from "./bookFactoryFn";
import pushBookToContainer from "./pushBooktoCont";

export default function switchContainer(toggleListItem) {
  if (toggleListItem) {
    const findBookCard = toggleListItem.closest("div .book-card");
    const findBookCardId = toggleListItem.closest("div .book-card").id;

    const res = bookLibrary.find((book) => book.title === findBookCardId);
    if (res.read === "Not read") {
      res.read = "Read";
    } else if (res.read === "Read") {
      res.read = "Not read";
    }
    pushBookToContainer(res);
    findBookCard.remove();
    return;
  }
}
