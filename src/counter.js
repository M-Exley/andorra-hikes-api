export default function counter(array) {
  const counter = document.querySelector(".counter");
  return (counter.innerHTML = `Books in library: ${array.length}`);
}
