import React, { useContext } from "react";
import "./About.scss";
import {ModeContext} from '../../Components/Context'

function About() {
const mode = useContext(ModeContext)
  return (
    <div className={mode? "about darkmode ": "about"}>
      <div className="about-content">
        {/* subdiv of the about-content div */}
        <div className="about-content-div">
          <p>
              <span>WHY US ? </span>
             Looking for a way to let in just enough sunlight to give
            your room that warm glow? Or a way to keep the outside completely
            out? With our versatile Curtain collection of so many colours and
            fabrics, you’ll find the perfect one to suit your need and match
            your decor. Our eco-friendly dark coloured HILLEBORG curtains
            effectively block out any light that might disturb your sleep and
            protects you from curious eyes outside. While our AINA linen curtain
            allows in just the right amount of sunlight to light up your room
            and still give you your privacy.
          </p>
        </div>
      </div>
      <div className="about-title">
        {/* subdiv of the about-title div */}
        <div className="about-title-div">
          <h1>ABOUT US</h1>
        </div>
      </div>
    </div>
  );
}

export default About;
