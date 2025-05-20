const favouritesMaster = document.querySelector(".favourites-master");
const completedMaster = document.querySelector(".completed-master");
const optionsSidebar = document.querySelectorAll(".options-dropdown a");

export function optionsSidebarFunction() {
  let styles;
  let divArray = [];
  const toArray = [...optionsSidebar];

  const optionsSidebarMaster = document.querySelectorAll(".options-master div");
  const toArrayTwo = [...optionsSidebarMaster];

  toArrayTwo.forEach((div) => {
    const className = div.className;
    const cleanName = className.replace(/-master/gi, "");
    console.log(cleanName);
    divArray.push(String(cleanName));
    console.log(divArray);
  });

  toArray.forEach((child) => {
    child.addEventListener("click", () => {
      styles = String(child.className);
      console.log(styles);

      if (divArray.some((el) => el === styles)) {
        console.log("button matches a div");
        // open
        const flexibleDiv = document.querySelector(
          `.options-master .${styles}-master`,
        );
        flexibleDiv.style.display =
          flexibleDiv.style.display === "none" ? "flex" : "none";
      }
    });
  });
}
