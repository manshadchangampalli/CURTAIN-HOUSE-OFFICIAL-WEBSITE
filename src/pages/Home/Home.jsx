import React ,{ useEffect, useState } from "react";
import CurtainHeader from '../../Components/CurtainHeader';
import CurtainMain from '../../Components/CurtainMain' ;
import TaleStar from "../../Components/TaleStar";
import './home.css' 

function Home() {
    const [offsety, setoffsety] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", function (e) {
      setoffsety(window.scrollY)
    });
  }, []);

  return (
    <div className="header">
      <div className="header-main">
        <div className="window-wall">
          <div className="window">
              <TaleStar/>
            <CurtainMain offsety={offsety} />
          </div>
          <div className="CurtainHeader"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
