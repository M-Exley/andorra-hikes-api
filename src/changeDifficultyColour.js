/* this function will change the colour of the difficulty in the de-structured card */

export default function changeDifficultyColour(difficulty) {
  switch (difficulty) {
    case "green":
      return "green";
    case "blue":
      return "blue";
    case "red":
      return "red";
    case "black":
      return "black";
    default:
      return "gray";
  }
}
// function completed
