import "./styles.css";
import getHikes from "./getHikes";
import sortDropdown from "./sortDropdown";
import { sortMainAlphabetically } from "./sortMainList";

window.onload = () => {
  console.clear();

  getHikes();
};

sortDropdown();
sortMainAlphabetically();
