import React from "react";
import './Toggle.scss'

function Toggle() {
    function hover(){
        document.getElementById("fline").style.transform = "translateX(-10px)";
        document.getElementById("tline").style.transform = "translateX(-10px)";
    }
    function hoverOut(){
        document.getElementById("fline").style.transform = "translateX(-4px)";
        document.getElementById("tline").style.transform = "translateX(-4px)";

    }
  return (
    
      <div onMouseOver={hover} onMouseOut={hoverOut} class="smallbox">
        <div class="fline" id="fline"></div>
        <div class="sline" id="sline"></div>
        <div class="tline" id="tline"></div>
      </div>
   
  );
}

export default Toggle;
