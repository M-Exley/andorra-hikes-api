/* this function will be passed into sortMainList() to change the colour of the difficulty blocks 
    the two options are:
    - colour-coded in hike individually
    - colour-coded in big blocks
*/

// export default function changeDifficultyBorderColour(difficulty) {
//   const allHikeDivs = document.querySelectorAll(".hike-cards");
//   const toArray = [...allHikeDivs];

//   toArray.forEach((div) => {
//     const divArea = div.dataset.set?.trim();
//     if (divArea === difficulty) {
//       div.classList.add("hike-cards-difficulty");

//       switch (difficulty) {
//         case "green":
//           div.style.borderColor = "green";
//           break;
//         case "blue":
//           div.style.borderColor = "blue";
//           break;
//         case "red":
//           div.style.borderColor = "red";
//           break;
//         case "black":
//           div.style.borderColor = "black";
//           break;
//         default:
//           console.log("A parish has not been matched");
//           return "gray";
//         //   }
//       }
//     }
//   });
// }

// not using in favour of adding class directly as it would require messing around with DataSets
