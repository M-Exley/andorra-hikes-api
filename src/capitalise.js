export function capitalise(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
// function completed

export function capitaliseParish(str) {
  return str.replace(/\s+/g, "-");
}
