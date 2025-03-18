// function to get the value of the sort list

export default function getSortedOption() {
  const formResult = document.querySelector(".sort");
  formResult.addEventListener("submit", function (e) {
    e.preventDefault();
    const difficultyTest = document.getElementById("sort-options");
    const targetSubmission = difficultyTest.value;
    console.log(targetSubmission);

    // next > find difficulty ratings of objects > black, red, blue, green
    // Sort by colour in the list
  });
}
