import React from "react";

function CurtainMain({offsety}) {
  console.log(offsety);
  
 
  
  return (
    <div style={{"top": offsety<335? offsety-300 : 35+"px"}}  className="curtain-main ">
      <svg
        width="300"
        height="371"
        viewBox="0 0 314 371"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="324" width="314" height="36" fill="#110606" />
        <rect
          y="288"
          width="314"
          height="36"
          fill="#555555"
          fill-opacity="0.4"
        />
        <rect y="252" width="314" height="36" fill="#110606" />
        <rect
          y="216"
          width="314"
          height="36"
          fill="#555555"
          fill-opacity="0.4"
        />
        <rect y="180" width="314" height="36" fill="#110606" />
        <rect
          y="144"
          width="314"
          height="36"
          fill="#555555"
          fill-opacity="0.4"
        />
        <rect y="108" width="314" height="36" fill="#110606" />
        <rect
          y="72"
          width="314"
          height="36"
          fill="#555555"
          fill-opacity="0.4"
        />
        <rect y="36" width="314" height="36" fill="#110606" />
        <rect width="314" height="36" fill="#555555" fill-opacity="0.4" />
        <rect y="360" width="314" height="11" fill="#454545" />
      </svg>
    </div>
  );
}

export default CurtainMain;
