import React, { useState } from "react";
import "./Home.scss";
import "../../App.scss";
import CurtainMain from "../../Components/CurtainMain";
import Toggle from "../../Components/ToggleIcon/Toggle";

function Home(props) {
    const [navbar, setNavbar] = useState(false)
    const [darkmode, setDarkmode] = useState(false)
    props.setMode(darkmode)
    const mouseover = ( ) => {
      document.getElementById("cursor").style.opacity = "0"
    }

    // IF IT IS TRUE ITS DARK MODE 
    // ELSE IT IS LIGHT MODE
    
    // the function passed to toggle component

    const ToggleClicked = (state) => {
      setNavbar(state)
    }


  return (
    <div onMouseOver={mouseover} id="home" className={darkmode? "home darkmode-checked" : "home"}>
      {/* navbar */}

      <div className="navbar">
        {/* for toggle icon when it make resposive */}

        <div className="toggle-icon">
          <Toggle navbar={navbar} ToggleClicked={ToggleClicked} darkmode={darkmode}/>
        </div>
        {/* responsive navbar */}
        <div style={navbar?{"display":"grid","transition":"all 1s ease"}:{"display":"none"}} className="responsivenavbar">
          <div><a onClick={()=>ToggleClicked(!navbar)} href="#home">HOME</a></div>
          <div><a onClick={()=>ToggleClicked(!navbar)} href="#about">ABOUT US</a></div>
          <div><a onClick={()=>ToggleClicked(!navbar)} href="#gallery">GALLERY</a></div>
          <div><a onClick={()=>ToggleClicked(!navbar)} href="#contact">CONTACT US</a></div>
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
            <div  className="curtain-img">
              <CurtainMain />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
