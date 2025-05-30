import { arrayOfAll } from "./getHikes";

export default function findHikeInArray(hikeName) {
  const resultHike = arrayOfAll.find((hike) => String(hike.trail) === hikeName);
  return resultHike;
}
