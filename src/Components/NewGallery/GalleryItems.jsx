import React, {useState} from 'react'

function GalleryItems({img,whichOne,mouseHover,mouseOut,items,text}) {
    const [state, setstate] = useState()
var prevEvent , currentEvent;
//  window.addEventListener('mousemove',(e)=>{
//     currentEvent=e
//     console.log(currentEvent.screenX); 
      
//  })
// //  setInterval(() => {
// //     prevEvent=currentEvent
// //     // console.log(prevEvent);
// // }, 400); 
// var movmentX
 

    return (
        <div className="items" id={items}>
             {/* <span>{movmentX}</span> */}
            <h1 style={whichOne===items&&img!="isnull"?{transform:"skew(-5deg)",opacity:1}:{opacity:1}} className="original" onMouseLeave={()=>mouseOut(items)} onMouseEnter={()=>mouseHover(items)} data-text={text} >{text}</h1>
            <h1 style={whichOne===items&&img!="isnull"?{opacity:1,transform:"skew(-5deg)"}:{opacity:0}} className="dummy">{text}</h1>
        </div>
    )
}

export default GalleryItems
