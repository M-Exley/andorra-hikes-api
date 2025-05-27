import "./styles.css";
import getHikes from "./getHikes";
import { optionsSidebarFunction } from "./optionsSidebar";
// import { removeFromCategory } from "./userOptionsFunctions";

window.onload = () => {
  console.clear();

  optionsSidebarFunction();
  getHikes();
  // removeFromCategory(); // I think it's safe to remove it here
};
