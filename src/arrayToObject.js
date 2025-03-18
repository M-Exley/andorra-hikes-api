// this function is for the sort function only

import { arrayOfAll } from "./getHikes";

export default function arraytoObject() {
  const newArray = [...arrayOfAll][1];
  const allKeys = Object.keys(newArray); // works
  console.log(allKeys);
  return allKeys;
}
