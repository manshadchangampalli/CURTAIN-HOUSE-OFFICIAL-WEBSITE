import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import GalleryItems from '../../Components/NewGallery/GalleryItems'
import './NewGallery.scss'


function NewGallery() {
    const [offsetX, setOffsetX] = useState(0)
    const [offsetY, setOffsetY] = useState(0)
    const [item,setItem] = useState('')
    const [removeItem,setRemoveItem] = useState(false)
    // const {offsetX,offsetYY = useSelector(state => state.mousePointer)
    window.addEventListener('mousemove',(e)=>{
        setOffsetX(e.screenX-100)
        setOffsetY(e.screenY-200)
    })
    // console.log(offsetX,offsetY,"using by redux");
    const mouseHover =(item)=>{
        setItem(item)
    }
    const mouseOut = (item)=>{
    }
    if(item==="item1"&&!removeItem){
    }
    else if(item==="item2"&&!removeItem){
    }else if(item==="item3"&&!removeItem){
    }else if(item==="item4"&&!removeItem){
    }else if(item==="item5"&&!removeItem){
    }else{
    }
    

    return (
        // why is the new gallery means the old gallary componet design is not good or not good model
        <div onMouseOver={()=>setRemoveItem(false)} onMouseOut={()=>setRemoveItem(true)} className="new-gallery">
            <div className="container">
                <GalleryItems
                 mouseHover={mouseHover}
                 mouseOut={mouseOut}
                  text="ZEBRA BLINDS" 
                  items="item1"/>
                <GalleryItems
                 mouseHover={mouseHover}
                 mouseOut={mouseOut}
                 text="ROMAN BLINDS" 
                 items="item2"/>
                <GalleryItems
                 mouseHover={mouseHover}
                 mouseOut={mouseOut}
                 text="ICE CRUSH" 
                 items="item3"/>
                <GalleryItems
                 mouseHover={mouseHover}
                 mouseOut={mouseOut}
                 text="LONG CRUSH" 
                 items="item4"/>
                <GalleryItems
                 mouseHover={mouseHover}
                 mouseOut={mouseOut}
                 text="BAMBOO CURTAIN" 
                 items="item5"/>
            </div>
            <img src="" alt="" className="gallery-cursor" />
        </div>
    )
}

export default NewGallery
