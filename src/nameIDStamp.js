export default function nameIDStamp(div, name) {
  if (!div.hasAttribute("id")) {
    div.id = `${name}`;
  }
}
