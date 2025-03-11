import switchContainer from "./switchContainer";
import hideEmptyDiv from "./hideEmptyDiv";

export const optionsFunction = function () {
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("toggle-read")) {
      const toggleListItem = e.target.closest(".toggle-read");
      switchContainer(toggleListItem);

      /* could be optimised to work more effeciently with deleteDiv() */
      const notReadContainer = document.querySelector(".notread");
      const readContainer = document.getElementById("cards-container");
      hideEmptyDiv(notReadContainer);
      hideEmptyDiv(readContainer);
    }
  });
};
