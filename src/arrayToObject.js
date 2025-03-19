// this function is for the sortDropdown function only

import { arrayOfAll } from "./getHikes";

export default function arraytoObject() {
  const newArray = [...arrayOfAll][1];
  const allKeys = Object.keys(newArray); // works
  console.log(allKeys);
  return allKeys;
}
// function completed - return to later for adding dropdown logic 
