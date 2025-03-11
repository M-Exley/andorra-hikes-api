export default function filterRead(read) {
  const notReadContainer = document.querySelector(".notread");
  if (String(read) === String("Not read")) {
    notReadContainer.style.display = "block";
  }
}
