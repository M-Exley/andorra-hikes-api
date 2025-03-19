import "./styles.css";
import getHikes from "./getHikes";
import sortDropdown from "./sortDropdown";

window.onload = () => {
  console.clear();

  getHikes();
};

sortDropdown();
