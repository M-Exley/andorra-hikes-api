const optionsSidebar = document.querySelectorAll(".options-dropdown *");

export function optionsSidebarFunction() {
  let styles;
  let divArray = [];
  const toArray = [...optionsSidebar];

  const optionsSidebarMaster = document.querySelectorAll(".options-master div");
  const toArrayTwo = [...optionsSidebarMaster];

  toArrayTwo.forEach((div) => {
    const className = div.className;
    const cleanName = className.replace(/-master/gi, "");
    divArray.push(String(cleanName));
  });

  toArray.forEach((child) => {
    child.addEventListener("click", () => {
      styles = String(child.className);

      if (divArray.some((el) => el === styles)) {
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

// Leaving this here in case I want to re-develop using React

// closeSidebar();
// export function closeSidebar() {
//   optionsMasterDiv.addEventListener("mouseleave", (e) => {
//     // if (e.target !== optionsMasterDiv)
//     optionsMasterDiv.classList.toggle("display-flex");
//     // optionsMasterDiv.style.display = "none";
//   });
// }

// export function closeSidebar(flexOptions) {
//   // Add listener only once
//   if (!flexOptions._sidebarListenerAttached) {
//     document.addEventListener("mouseleave", () => {
//       if (flexOptions.style.display === "flex") {
//         flexOptions.style.display = "none";
//       }
//     });
//     flexOptions._sidebarListenerAttached = true; // mark as attached
//   }
// }
