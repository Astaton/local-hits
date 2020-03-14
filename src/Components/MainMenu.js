import React from "react";
import { library } from "../library";

const MainMenu = props => {
  console.log("the props are: ", props);
  console.log("the library is", library);
  return (
    <div>
      <p>Main Menu</p>
    </div>
  );
};

export default MainMenu;
