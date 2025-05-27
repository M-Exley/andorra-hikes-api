/* this function will be passed into sortMainList() to change the colour of the parishes 
    the two options are:
    - colour-coded in hike individually
    - colour-coded in big blocks
*/

export default function changeParishBorderColour(area) {
  const allHikeDivs = document.querySelectorAll(".hike-cards");
  const toArray = [...allHikeDivs];

  toArray.forEach((div) => {
    const divArea = div.dataset.set?.trim();
    if (divArea === area) {
      div.classList.add("hike-cards-difficulty");
      div.classList.remove("red", "blue", "green", "black");

      switch (area) {
        case "Andorra la Vella":
          div.style.borderColor = "deeppink";
          break;
        case "Escaldes-Engordany":
          div.style.borderColor = "fuchsia";
          break;
        case "Encamp":
          div.style.borderColor = "maroon";
          break;
        case "Canillo":
          div.style.borderColor = "orange";
          break;
        case "Ordino":
          div.style.borderColor = "chartreuse";
          break;
        case "La Massana":
          div.style.borderColor = "cyan";
          break;
        case "Sant Julia":
          div.style.borderColor = "blue";
          break;
        default:
          console.log("A parish has not been matched");
          break;
      }
    }
  });
}
