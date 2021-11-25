import React from 'react'

function GalleryItems({SetMouseOut,SetMouseOver,items,text}) {
    const mouseHovered = () =>{
        SetMouseOver(true)
        SetMouseOut(false)
    } 
    const mouseOut = () =>{
        SetMouseOver(false)
        SetMouseOut(true)
    }
    return (
        <div onMouseOut={()=>mouseOut()} onMouseOver={()=>mouseHovered()}  className="items" id={items}>
            <h1>{text}</h1>
        </div>
    )
}

export default GalleryItems
