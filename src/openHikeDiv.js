import destructure from "./destructure";
import loadLeaflet, { map } from "./loadLeaflet";
import changeDifficultyColour from "./changeDifficultyColour";
import {
  addToFavourites,
  closeModal,
  markAsComplete,
  markAsToDo,
} from "./userOptionsFunctions";

export default function openHikeDiv(object) {
  const hikeCardDiv = document.createElement("div");
  hikeCardDiv.classList.add("hike-card-div");
  hikeCardDiv.classList.add("fade-in");
  const hikeCardContainer = document.querySelector(".hike-card-container"); // original

  // Splitting divs inside info card
  const hikeCardDivLeft = document.createElement("div");
  hikeCardDiv.appendChild(hikeCardDivLeft);
  hikeCardDivLeft.classList.add("hike-card-div-left");
  const hikeCardDivRight = document.createElement("div");
  hikeCardDiv.appendChild(hikeCardDivRight);
  hikeCardDivRight.classList.add("hike-card-div-right");

  hikeCardContainer.style.display = "block";
  hikeCardContainer.appendChild(hikeCardDiv);
  hikeCardContainer.style.backgroundColor = "white";
  const destructuredObject = destructure(object);

  console.log(destructuredObject);
  const {
    trail,
    difficulty,
    area,
    duration,
    loop,
    elevation,
    distance,
    lake,
    toponymy,
    lat,
    long,
  } = destructuredObject;

  hikeCardDivLeft.innerHTML = ` 
  <p><span class="hike-title">${trail}</span> </p>
  <br>
  Duration: approx. ${(duration / 60).toFixed(2)}  ${duration < 60 ? "hour" : "hours"}  <br>
  Difficulty: <span class="dot" style="background-color: ${changeDifficultyColour(difficulty)}"></span> <br>
  Distance: ${distance / 1000} KM <br>
  Elevation: ${elevation} metres <br>
  Parroquia: ${area} <br> 
  Toponymy: ${toponymy} <br>
  Lake: ${lake === true ? `<span style="color: green">&#x2713</span>` : `<span style="color: red">X</span>`} <br>
  Loop: ${loop === true ? `<img class="loop-icon"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADvUlEQVR4nO1ZTYscZRAuk3TV7MfFYPwC9R/4iYghkIsH4yGoGPQssmJkZqp6kpBEkiEQ9aKQRPwJKioiYvz4D+Jho+LBkEg2u2E3TlVnF8wmHlpqZwMz7/QsPbvdSMs80NBMz1vVz/tRXfUUwBhjjDHGKEjbsC1p7HhaY3xHhb40pl9U8C9luqVCt5VJjemCCn2ljEdvNCee8TFQNqyJL6rgkjIuaoz7h/1PG7WHjem0CS6YUDrSxXjFhN69fnjiwfKIMM73OLwaPl9pTd1rjB/5jI9MILhUaNUEzyVH4e7iiQTOep8lcfSqMl7fKoFBQrhkgi+VTiRtww5j/HiDl7lhQp8a0xt+Xpbr07vSNmA6A5Hfd88QvWVC3yvTzeF28Fx6ALaXQuRyG2rG+EPmTDL+YU16fX4GJvPav9aCKRU62LeFpff80DdpHahwIiZ0PsPZ3yZ42Fdqs36uCEx4FMs6ayr09VZsDyMSrsJFbUSPQkHoNGvPelAZ9EMflklk1qMWFIzFQ5P3G9NvGWdm8wFghEhzudPEfUWR0VbtkYFvEuO1RGBnqUTWZ2wOCkTSip7qflv6ttgHlSPiMKH3AyI3l3jyAShtazFe6gg9DwVj8SBMh4dfGU9AFaGCjXDSoIpYrk/v8sy5P7hEj0EVYUzf9W3nGGOoIpSpHmQTn0AVoXFtT5C2/ARVRCeuPRSE+oXcgxOm5zwrVaZOR6LX4D9E2oZtXqX2pke5BxvT7z1LaYXVBpuENfFlXwlPh1Rqe/MPDHIdX16oIlTo54DIbqgijOmzIM95G6oIE2yF1SFUEdaMHg9W5J+VxtR9UDWkAHcZ458BmTpUESp4MqjSrnpqXbSfjuALHlbzlg0wKryIGdCemN4rmkiW4GBFEnF4eRnkOavG0ZOFEhGcK51IIrDTC/8w13GBoCgiLlx4wVQqEYdLMRkGf3XpBsqRgy6UQsThItmAUcZ5F9WKImFx9ESeQ78lJy5bunw5KDx4EwePjaL5ZthGZTyeKWozfVsokTsOXVjOnilc8DTGhem89jyUJ0wzG5yP8y5iF05kjcwB2G5MZ4ctu0c1FfzRSXlrzWXVtbZCHcjv/bdE6E1l+sKEVoZuIaazd8TrUoj0BoBuUyZ/2MxzqRdQjK/0+yqRiMPbZCZ0JpQ2N0Wga+PMcjx9T+inNwCUqmuth8zTYW6W78I5Yzq1UeHWaeK+7kcT58pQNDMTTW+tGeORtfa00KzX/Ovt6dX1rTirQp97Y8czBB9T+ouNMcYY/y/8C1b1ag6s0Xq9AAAAAElFTkSuQmCC" alt="update-left-rotation"></img>` : `<span style="color: red">X</span>`} <br>
`;

  hikeCardDivRight.innerHTML = `
  <span class="X">x</span><br>  
  <span class="favourite"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="20px" width="20px" version="1.1" id="Capa_1" viewBox="0 0 47.94 47.94" xml:space="preserve">
  <path style="fill:#ED8A19;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757  c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042  c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685  c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528  c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956  C22.602,0.567,25.338,0.567,26.285,2.486z"/>
  </svg></span><br>  
  <span class="completed">&#x2713</span><br>  
  <span class="to-do">+</span><br>  
  <p><button class="location-button">Location</button></p>
  `;

  loadLeaflet(lat, long); // put the marker coords as the arguments
  map.dragging.enabled();

  closeModal();
  addToFavourites(difficulty);
  markAsComplete();
  markAsToDo();
}
