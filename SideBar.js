import React from "react";
import "./SideBar.css";

const SideBar = (props) => {
  return (
    <div className="sideBarBox" style={{backgroundColor: props.color}}>
      <h2 className="sideBarTittle">Hello, This is a sidebar</h2>
      <p className="sideBarParagraph"> 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
    </div>
  );
};

export default SideBar;
