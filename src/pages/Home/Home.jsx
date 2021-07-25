import React from "react";
import "./Home.scss";
import CurtainMain from "../../Components/CurtainMain";

function Home() {
  return (
    <div className="home">
      {/* navbar */}

      <div className="navbar">
        {/* navbar div for align center the nav items*/}
        <div className="navbar-div">
          <p>HOME</p>
          <p>ABOUT US</p>
          <p>GALLERY</p>
          <p>CONTACT US</p>
        </div>
      </div>
      <div className="darkmode">
        <h4>DARK MODE</h4>
        <div></div>
      </div>
      <div className="title">
        <h1>CURTAIN HOUSE</h1>
      </div>
      <div className="curtain">
        {/* curtain image included black div */}
        <div className="curtain-div">
          {/* curtainheaderdiv for curtianheader */}
          <div className="curtain-header-div">
            <div className="curtain-header"></div>
            <div className="curtain-img">
              <CurtainMain />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
