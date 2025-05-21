import { arrayOfAll } from "./getHikes";

export default function findHikeInArray(hikeName) {
  const resultHike = arrayOfAll.find((hike) => String(hike.trail) === hikeName);
  return resultHike; /// works!! returns full object >> focus on destructure
}
