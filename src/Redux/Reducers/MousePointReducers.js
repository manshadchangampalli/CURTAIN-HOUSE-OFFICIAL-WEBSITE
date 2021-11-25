const states ={
    offsetX:0,
    offsetY:0
}
const MousePointeReducer = (state=states,action) =>{
    switch(action.type){
        case "THE_MOUSEPOINT":
            return state=action.payload
        default:
            return state 
    }
}
export default MousePointeReducer;