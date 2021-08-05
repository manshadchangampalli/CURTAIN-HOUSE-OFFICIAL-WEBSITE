import React, { useState } from "react";
import "./Home.scss";
import "../../App.scss";
import CurtainMain from "../../Components/CurtainMain";
import Toggle from "../../Components/ToggleIcon/Toggle";

function Home(props) {
    const [darkmode, setDarkmode] = useState(false)
    props.setMode(darkmode)
    const mouseover = ( ) => {
      document.getElementById("cursor").style.opacity = "0"
    }

    // IF IT IS TRUE ITS DARK MODE 
    // ELSE IT IS LIGHT MODE
    
    
  return (
    <div onMouseOver={mouseover} id="home" className={darkmode? "home darkmode-checked" : "home"}>
      {/* navbar */}

      <div className="navbar">
        {/* for toggle icon when it make resposive */}

        <div className="toggle-icon">
          <Toggle darkmode={darkmode}/>
        </div>

        {/* navbar div for align center the nav items*/}
        <div className="navbar-div">
          <p><a href="#home">HOME</a></p>
          <p><a href="#about">ABOUT US</a></p>
          <p><a href="#gallery">GALLERY</a></p>
          <p><a href="#contact">CONTACT US</a></p>
        </div>
      </div>
      <div className="darkmode">
          {
              darkmode? <h4>LIGHT MODE</h4>:<h4>DARK MODE</h4>
          }
        
        {/* this div for the darkmode input */}
        <div className="darkmode-div">
            <input type="checkbox" onChange={(e)=>setDarkmode(e.target.checked)} value={darkmode}/>
        </div>
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
