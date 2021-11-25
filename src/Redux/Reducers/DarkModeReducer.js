const DarkModeReducer = (state= false,action) =>{
    switch(action.type){
        case "DARKMODE_ON":
            return state=true;
        case "DARKMODE_OFF":
            return state=false;
        default:
            return state;
    }
}
export default DarkModeReducer;