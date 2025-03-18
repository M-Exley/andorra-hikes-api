import destructure from "./destructure";
import capitalise from "./capitalise";
import changeDifficultyColour from "./changeDifficultyColour";
import closeModal from "./closeModal";

export default function openHikeDiv(object) {
  const hikeCardDiv = document.createElement("div");
  hikeCardDiv.classList.add("hike-card-div");
  const hikeCardContainer = document.querySelector(".hike-card-container");
  hikeCardContainer.style.display = "block";
  hikeCardContainer.appendChild(hikeCardDiv);
  // could do with destructure function now.....
  // destructure function goes in getHikes(). This one serves only for DOM transfer to column 3 info
  const destructuredObject = destructure(object);
  console.log(destructuredObject);
  /* try to destructure here and then move into module */
  const {
    trail,
    number,
    difficulty,
    area,
    duration,
    loop,
    elevation,
    distance,
    lake,
    toponymy,
  } = destructuredObject;

  hikeCardDiv.innerHTML = ` 
  Trail Name: ${trail}  <span class="X">&times</span><br>
  Official Trail Number:  ${number} <br>
  Difficulty: <span class="dot" style="background-color: ${changeDifficultyColour(difficulty)}"></span> <br>
  Parroquia: ${area} <br> 
  Duration: ~ ${Math.round(duration / 60).toFixed(2)} hours <br>
  Circular: ${loop === true ? "&#x2713" : "X"} <br>
  Elevation: ${elevation} metres <br>
  Distance: ${distance / 1000} KM <br>
  Lake: ${lake === true ? "&#x2713" : "X"} <br>
  Toponymy: ${toponymy}`;

  closeModal();
}

/* <span class="dot"></span> */
