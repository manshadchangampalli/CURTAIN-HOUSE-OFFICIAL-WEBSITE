import React from "react";
import './Toggle.scss'

function Toggle({darkmode}) {
    // the hover of css function is not working so icreated it by using dom of js
    console.log(darkmode);
    function hover(){
        
        document.getElementById("fline").style.transform = "translateX(-10px)";
        document.getElementById("tline").style.transform = "translateX(-10px)";
    }
    function hoverOut(){
        document.getElementById("fline").style.transform = "translateX(-4px)";
        document.getElementById("tline").style.transform = "translateX(-4px)";

    }
  return (
    
      <div onMouseOver={hover} onMouseOut={hoverOut} className={darkmode?"smallbox darkmode":"smallbox"}>
        <div className="fline" id="fline"></div>
        <div className="sline" id="sline"></div>
        <div className="tline" id="tline"></div>
      </div>
   
  );
}

export default Toggle;
