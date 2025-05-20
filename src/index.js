import "./styles.css";
import getHikes from "./getHikes";
import { optionsSidebarFunction } from "./optionsSidebar";

window.onload = () => {
  console.clear();

  getHikes();
  optionsSidebarFunction();
};
