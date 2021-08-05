import React, { useContext } from 'react'
import './Gallery.scss'
import {ModeContext} from "../../Components/Context"

function Gallery() {
    const mode = useContext(ModeContext)
    const mouseover = ( ) => {
        document.getElementById("cursor").style.opacity = "0"
      }
    return (
        <div onMouseOver={mouseover} id="gallery" className={mode?"gallery darkmode":"gallery"}>
            <div className="gallery-title">
                <h1>Gallery</h1>
            </div>
            <div className="gallery-images">
                {/* its the subdiv of gallery images its for centering the images which in the sub div */}
                <div className="gallery-images-div">
                    <div className="img img1"></div>
                    <div className="img img2"></div>
                    <div className="img img3"></div>
                    <div className="img img4"></div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
