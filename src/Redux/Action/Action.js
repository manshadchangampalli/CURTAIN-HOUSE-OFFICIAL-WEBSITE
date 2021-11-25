export const darkModeOn = () =>{
    return{
        type:"DARKMODE_ON",
        payload:"",
    }
}
export const darkModeOff = () =>{
    return{
        type:"DARKMODE_OFF",
        payload:"",
    }
}

export const MousePointer = (offsetX,offsetY) =>{
    return{
        type:"THE_MOUSEPOINT",
        payload:{
            offsetX:offsetX,
            offsetY:offsetY
        }
    }
}