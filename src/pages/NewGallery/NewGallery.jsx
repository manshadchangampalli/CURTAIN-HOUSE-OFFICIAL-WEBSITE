import React, {useEffect, useState} from 'react'
import GalleryItems from '../../Components/NewGallery/GalleryItems'
import './NewGallery.scss'


function NewGallery() {
    const [mouseOver, SetMouseOver] = useState(false)
    const [mouseOut, SetMouseOut] = useState(false)


    
    return (
        // why is the new gallery means the old gallary componet design is not good or not good model
        <div className="new-gallery">
            <div className="container">
                <GalleryItems
                 SetMouseOver={SetMouseOver}
                 SetMouseOut={SetMouseOut}
                  text="ZEBRA BLINDS" 
                  items="item1"/>
                <GalleryItems
                 SetMouseOver={SetMouseOver} 
                 SetMouseOut={SetMouseOut}
                 text="ROMAN BLINDS" 
                 items="item1"/>
                <GalleryItems
                 SetMouseOver={SetMouseOver} 
                 SetMouseOut={SetMouseOut}
                 text="ICE CRUSH" 
                 items="item1"/>
                <GalleryItems
                 SetMouseOver={SetMouseOver} 
                 SetMouseOut={SetMouseOut}
                 text="LONG CRUSH" 
                 items="item1"/>
                <GalleryItems
                 SetMouseOver={SetMouseOver} 
                 SetMouseOut={SetMouseOut}
                 text="BAMBOO CURTAIN" 
                 items="item1"/>
            </div>
            <div style={mouseOver===true &&  mouseOut===false?{display:"block"}:{display:"none"}} className="gallery-cursor"></div>
        </div>
    )
}

export default NewGallery
