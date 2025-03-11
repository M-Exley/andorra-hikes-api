export default function hideEmptyDiv(container) {
  if (!container.hasChildNodes()) {
    container.style.display = "none";
  } else {
    container.style.display = "block";
  }
}
