/* this function will be passed into sortMainList() to change the colour of the parishes 
    the two options are:
    - colour-coded inareaidually
    - colour-coded in big blocks
*/

export default function changeParishBorderColour(area) {
  //   const hikeArea = document.getElementById(`${zone}`);
  const allHikeDivs = document.querySelectorAll(".hike-cards");
  const toArray = [...allHikeDivs];
  switch (area) {
    case "Andorra la Vella":
      area.style.borderColor = "deeppink";
      break;
    case "Escaldes-Engordany":
      area.style.borderColor = "fuchsia";
      break;
    case "Encamp":
      area.style.borderColor = "maroon";
      break;
    case "Canillo":
      area.style.borderColor = "orange";
      break;
    case "Ordino":
      area.style.borderColor = "chartreuse";
      break;
    case "La Massana":
      area.style.borderColor = "cyan";
      break;
    case "Sant Julia":
      area.style.borderColor = "blue";
      break;
    default:
      console.log("A parish has not been matched");
      break;
  }
}

// for (const hike of array) {
//   console.log(hike.area);
//   if (hike.area) {
//     changeParishBorderColour(container);
//     container.classList.add("change-border");
//   }
// }
