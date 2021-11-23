import React from "react";
import './Toggle.scss'

function Toggle({darkmode,ToggleClicked,navbar}) {
    // the hover of css function is not working so icreated it by using dom of js
    console.log(navbar,"navbar");
    function hover(){
        document.getElementById("fline").style.transform = "translateX(-10px)";
        document.getElementById("tline").style.transform = "translateX(-10px)";
    }
    function hoverOut(){
        document.getElementById("fline").style.transform = "translateX(-4px)";
        document.getElementById("tline").style.transform = "translateX(-4px)";

    }
  return (
    
      <div id={navbar?"toggle-navbar":"toggle"} onClick={()=>ToggleClicked(!navbar)} onMouseOver={hover} onMouseOut={hoverOut} className={darkmode?"smallbox darkmode":"smallbox"}>
        <div  style={
                navbar
                  ? {transform:"translateY(8px) rotate(45deg)"  }
                  :null
              } className="fline" id="fline"></div>
        <div className="sline" id="sline"></div>
        <div  style={
                navbar
                  ? {transform:"translateY(-10px) rotate(-45deg)"  }
                  :  null
              } className="tline" id="tline"></div>
      </div>
   
  );
}

export default Toggle;
