import React from "react";
import "./Footer.css";
class Footer extends React.Component {
  render() {
    return (
      <div className="footerWrapper container-fluid">
        <div className="row">
          <div className="col-6">
            <p>©Copryight NMCP Workshop 2021.</p>
          </div>
          <div className="col-6">
            <span>🙌</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
