// function to dynamically alter the CSS height based on page length
export default function adjustBookSize(div, pages) {
  if (pages < 200) {
    div.style.height = "fit-content";
  } else if (pages > 200) {
    div.style.height = `${pages * 0.2}px`;
  }
}
