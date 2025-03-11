"use strict";
import pushBookToContainer from "./pushBooktoCont";
import counter from "./counter";
import validate from "./validate";

export let bookLibrary = [
  {
    title: "History of England",
    author: "Lord Macaulay",
    pages: 640,
    read: "Read",
  },
  {
    title: "Executioner",
    author: "Albert Pierrpoint",
    pages: 304,
    read: "Not read",
  },
];

// factory function to add book
export default function AddBook() {
  const form = document.getElementById("form");
  form.addEventListener("submit", function (e) {
    const authorInput = document.getElementById("author");
    e.preventDefault();
    // VALIDATE
    if (!validate(authorInput)) {
      e.preventDefault(); // Block submission only if validation fails
      alert("Please fix the errors before submitting!");
      return;
    }
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = Number(document.getElementById("pages").value);
    const read = document.querySelector('input[name="read"]:checked').value;
    const newBook = { title, author, pages, read }; // return object

    console.log(newBook);
    // push to container
    pushBookToContainer(newBook); // DOM element > adds ID
    bookLibrary.push(newBook); // Add to the existing array
    counter(bookLibrary); // increment books

    document.getElementById("form").reset(); // RESET
  });
}
