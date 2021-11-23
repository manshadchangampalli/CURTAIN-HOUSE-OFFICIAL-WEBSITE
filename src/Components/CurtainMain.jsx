import React, { useEffect, useState } from "react";

function CurtainMain() {
  const [offsetY, setOffsetY] = useState()
  useEffect(() => {
    window.addEventListener("scroll",handleScroll)
    
  }, [])
  function handleScroll(){
    setOffsetY(window.scrollY)
  }
  var top
  if(offsetY<=265){
    top = {"top": offsetY-230+"px"}
  }else if (offsetY > 265) {
    top = {"top": 35+"px"}
  } else{
    top = {"top": -236+"px"}
  }
 
  // for dark "#777777"
  return (
    <div style={top}  className="curtain-main ">
      <svg
        width="300"
        height="371"
        viewBox="0 0 314 371"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="324" width="314" height="36" fill="#BEE9FC" />
        <rect
          y="288"
          width="314"
          height="36"
          fill="#555555"
          fill-opacity="0.4"
        />
        <rect y="252" width="314" height="36" fill="#BEE9FC" />
        <rect
          y="216"
          width="314"
          height="36"
          fill="#555555"
          fill-opacity="0.4"
        />
        <rect y="180" width="314" height="36" fill="#BEE9FC" />
        <rect
          y="144"
          width="314"
          height="36"
          fill="#555555"
          fill-opacity="0.4"
        />
        <rect y="108" width="314" height="36" fill="#BEE9FC" />
        <rect
          y="72"
          width="314"
          height="36"
          fill="#555555"
          fill-opacity="0.4"
        />
        <rect y="36" width="314" height="36" fill="#BEE9FC" />
        <rect width="314" height="36" fill="#555555" fill-opacity="0.4" />
        <rect y="360" width="314" height="11" fill="#454545" />
      </svg>
    </div>
  );
}

export default CurtainMain;
