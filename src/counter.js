export default function count() {
  const container = document.querySelector(".hike-list-master");

  document.querySelector(".counter").innerHTML =
    `Hike Count: ${container.children.length}`;
}
