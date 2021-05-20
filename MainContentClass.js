import React from "react";
import pic1 from "../../Images/pic1.jpg";
import pic2 from "../../Images/pic2.jpg";
import pic3 from "../../Images/pic3.jpg";
import "./MainContent.css";

class MainContent extends React.Component {
  render() {
    return (
      <div className="article-wrapper">
        <div className="container article">
          <h2> Article</h2>
          <div className="row">
            <div className="col-4">
              <img src={pic1} />
            </div>
            <div className="col-4 photoArticle">
              <img src={pic2} />
            </div>
            <div className="col-4 photoArticle">
              <img src={pic3} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;
