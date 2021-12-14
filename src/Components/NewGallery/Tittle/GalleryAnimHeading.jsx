import React from 'react'
import './GalleryTitle.scss'
import DarkModeHeading from "../../../Images/gif/darkmode-gallery.gif"
import LightModeHeading from "../../../Images/gif/light-mode-gallery.gif"
import { useSelector } from 'react-redux'

function GalleryAnimHeading() {
    const darkmode = useSelector(state => state.darkmode)
    return (
        <div style={darkmode?{background:"black"}:{background:"white"}} className="gallery-heading-animation">
            <img src={darkmode? DarkModeHeading : LightModeHeading} alt="Heading..." />
        </div>
    )
}

export default GalleryAnimHeading
