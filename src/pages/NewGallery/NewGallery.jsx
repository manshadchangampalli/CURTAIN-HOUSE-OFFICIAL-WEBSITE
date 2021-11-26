import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import GalleryItems from '../../Components/NewGallery/GalleryItems'
import './NewGallery.scss'
import zebra from '../../Images/Gallery/zebra-blinds.jpg'
import roman from '../../Images/Gallery/roman-blinds.jpg'
import icecrush from '../../Images/Gallery/ice-crush.jpg'
import longcrush from '../../Images/Gallery/long-crush.jpg'
import bamboo from '../../Images/Gallery/bamboo-curtain.jpeg'


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
    var img='';
    if(item==="item1"&&!removeItem){
        img = zebra
    }
    else if(item==="item2"&&!removeItem){
        img = roman
    }else if(item==="item3"&&!removeItem){
        img = icecrush
    }else if(item==="item4"&&!removeItem){
        img = longcrush
    }else if(item==="item5"&&!removeItem){
        img = bamboo
    }else{
        img="isnull"
    }

    
    return (
        // why is the new gallery means the old gallary componet design is not good or not good model
        <div onMouseOver={()=>setRemoveItem(false)} onMouseOut={()=>setRemoveItem(true)} className="new-gallery">
            <div className="container">
                <GalleryItems
                 whichOne ={item}
                 img={img}
                 mouseHover={mouseHover}
                 mouseOut={mouseOut}
                  text="ZEBRA BLINDS" 
                  items="item1"/>
                <GalleryItems
                 whichOne ={item}
                 mouseHover={mouseHover}
                 img={img}
                 mouseOut={mouseOut}
                 text="ROMAN BLINDS" 
                 items="item2"/>
                <GalleryItems
                 whichOne ={item}
                 mouseHover={mouseHover}
                 img={img}
                 mouseOut={mouseOut}
                 text="ICE CRUSH" 
                 items="item3"/>
                <GalleryItems
                 whichOne ={item}
                 mouseHover={mouseHover}
                 img={img}
                 mouseOut={mouseOut}
                 text="LONG CRUSH" 
                 items="item4"/>
                <GalleryItems
                 whichOne ={item}
                 mouseHover={mouseHover}
                 img={img}
                 mouseOut={mouseOut}
                 text="BAMBOO CURTAIN" 
                 items="item5"/>
            </div>

            {
                img!=="isnull"?
                <img style={{top:`${offsetY}px`,left:`${offsetX}px`}} src={img} alt="" className="gallery-cursor" />:
                ""
            }
           
        </div>
    )
}

export default NewGallery
