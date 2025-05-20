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
  Lake: ${lake === true ? `<span style="color: green">&#x2713</span>` : `<span style="color: red">X</span>`} <br>
  Loop: ${loop === true ? `<img class="loop-icon"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADvUlEQVR4nO1ZTYscZRAuk3TV7MfFYPwC9R/4iYghkIsH4yGoGPQssmJkZqp6kpBEkiEQ9aKQRPwJKioiYvz4D+Jho+LBkEg2u2E3TlVnF8wmHlpqZwMz7/QsPbvdSMs80NBMz1vVz/tRXfUUwBhjjDHGKEjbsC1p7HhaY3xHhb40pl9U8C9luqVCt5VJjemCCn2ljEdvNCee8TFQNqyJL6rgkjIuaoz7h/1PG7WHjem0CS6YUDrSxXjFhN69fnjiwfKIMM73OLwaPl9pTd1rjB/5jI9MILhUaNUEzyVH4e7iiQTOep8lcfSqMl7fKoFBQrhkgi+VTiRtww5j/HiDl7lhQp8a0xt+Xpbr07vSNmA6A5Hfd88QvWVC3yvTzeF28Fx6ALaXQuRyG2rG+EPmTDL+YU16fX4GJvPav9aCKRU62LeFpff80DdpHahwIiZ0PsPZ3yZ42Fdqs36uCEx4FMs6ayr09VZsDyMSrsJFbUSPQkHoNGvPelAZ9EMflklk1qMWFIzFQ5P3G9NvGWdm8wFghEhzudPEfUWR0VbtkYFvEuO1RGBnqUTWZ2wOCkTSip7qflv6ttgHlSPiMKH3AyI3l3jyAShtazFe6gg9DwVj8SBMh4dfGU9AFaGCjXDSoIpYrk/v8sy5P7hEj0EVYUzf9W3nGGOoIpSpHmQTn0AVoXFtT5C2/ARVRCeuPRSE+oXcgxOm5zwrVaZOR6LX4D9E2oZtXqX2pke5BxvT7z1LaYXVBpuENfFlXwlPh1Rqe/MPDHIdX16oIlTo54DIbqgijOmzIM95G6oIE2yF1SFUEdaMHg9W5J+VxtR9UDWkAHcZ458BmTpUESp4MqjSrnpqXbSfjuALHlbzlg0wKryIGdCemN4rmkiW4GBFEnF4eRnkOavG0ZOFEhGcK51IIrDTC/8w13GBoCgiLlx4wVQqEYdLMRkGf3XpBsqRgy6UQsThItmAUcZ5F9WKImFx9ESeQ78lJy5bunw5KDx4EwePjaL5ZthGZTyeKWozfVsokTsOXVjOnilc8DTGhem89jyUJ0wzG5yP8y5iF05kjcwB2G5MZ4ctu0c1FfzRSXlrzWXVtbZCHcjv/bdE6E1l+sKEVoZuIaazd8TrUoj0BoBuUyZ/2MxzqRdQjK/0+yqRiMPbZCZ0JpQ2N0Wga+PMcjx9T+inNwCUqmuth8zTYW6W78I5Yzq1UeHWaeK+7kcT58pQNDMTTW+tGeORtfa00KzX/Ovt6dX1rTirQp97Y8czBB9T+ouNMcYY/y/8C1b1ag6s0Xq9AAAAAElFTkSuQmCC" alt="update-left-rotation"></img>` : `<span style="color: red">X</span>`} <br>
  Toponymy: <p class="toponomy">${toponymy}</p>

`;

  hikeCardDivRight.innerHTML = `
  <span class="X">x</span><br>  
  <svg class="favourite"xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B89230"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg><br>  
  <span class="completed">&#x2713</span><br>  
  <span class="to-do">+</span><br>  
  <p><button class="location-button">Location</button></p>
  `;

  loadLeaflet(lat, long); // put the marker coords as the arguments
  map.dragging.enabled();

  closeModal();
  addToFavourites(difficulty);
  markAsComplete(difficulty);
  markAsToDo();
}
