import React, { useEffect, useState } from "react";
import SideBar from "../Siderbar/SideBar";
import MainContent from "../MainContent/MainContent";
import "./Body.css";

const Body = () => {
  //functie pura care schimba culorile de la sidebar si maincontent.
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [colors, setColors] = useState(["#fe4a49", "#2ab7ca"]);

  const buttonChangeHandler = () => {
    if(isDarkMode === true){
      setIsDarkMode(false);
    }else{
      setIsDarkMode(true);
    }
  }
  const changeColor = (isDarkModeOn) => {
    if(isDarkModeOn === true){
      setColors(["#051e3e", "#251e3e"]);
    }else{
      setColors(["#fe4a49", "#2ab7ca"]);
    }
  };
useEffect(() => {
  changeColor(isDarkMode)
}, [isDarkMode]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <SideBar color={colors[0]}/>
        </div>
        <div className="col-9">
          <MainContent color={colors[1]}/>
          
        </div>
      <button onClick={buttonChangeHandler}>Set {!isDarkMode ? "light" : "dark"} Mode</button>
    </div>
      </div>
  );
};

export default Body;
