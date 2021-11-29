import React, {useEffect, useRef, useState} from 'react'

function GalleryItems({img,whichOne,mouseHover,mouseOut,items,text}) {
    const [state, setstate] = useState(0)
    const [skewX,setSkewX] = useState(0)
    const itemRef = useRef()
    var prevEvent , currentEvent;
    var isEnableThrottle = true
    // its a throttle function it call after each 100milli second 
    const mouseMove = (e) =>{
        if(prevEvent&&currentEvent){
            var movX = currentEvent.screenX-prevEvent.screenX
            // var movY = Math.abs(currentEvent.screenY-prevEvent.screenY)
            

            if(movX/4>20){
                setSkewX(20)
            }else if(movX/4<-20){
                setSkewX(-20);
            }else{
                setSkewX(movX)
            }

        }
        prevEvent=currentEvent
    }
    useEffect(() => {
        // if there have item check the listner of mouse move
        if(itemRef&&itemRef.current){
            itemRef.current.addEventListener('mousemove',(e)=>{
               if(!isEnableThrottle)return;
            //    add the current event to the currentEvent 
               currentEvent=e;
            //    call the throtlle function 
                mouseMove(e)
                isEnableThrottle=false
                setTimeout(()=>{
                    isEnableThrottle=true
                },200)
            })
        }
    }, [])

    return (
        <div ref={itemRef} className="items" id={items}>
             {/* <span>{movmentX}</span> */}
            <h1 style={whichOne===items&&img!="isnull"?{transform:`skew(${-skewX/4}deg)`,opacity:1}:{opacity:1}} className="original" onMouseLeave={()=>mouseOut(items)} onMouseEnter={()=>mouseHover(items)} data-text={text} >{text}</h1>
            <h1 style={whichOne===items&&img!="isnull"?{opacity:1,transform:`skew(${-skewX/4}deg)`}:{opacity:0}} className="dummy">{text}</h1>
        </div>
    )
}

export default GalleryItems
