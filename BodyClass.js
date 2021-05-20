import React from "react";
import SideBar from "../Siderbar/SideBar";
import MainContent from "../MainContent/MainContent";
import "./Body.css";

class Body extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <MainContent />
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
