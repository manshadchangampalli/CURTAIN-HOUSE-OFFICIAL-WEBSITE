import React from 'react'

function GalleryItems({mouseHover,mouseOut,items,text}) {
    
    return (
        <div onMouseOut={()=>mouseOut(items)} onMouseOver={()=>mouseHover(items)}  className="items" id={items}>
            <h1>{text}</h1>
        </div>
    )
}

export default GalleryItems
