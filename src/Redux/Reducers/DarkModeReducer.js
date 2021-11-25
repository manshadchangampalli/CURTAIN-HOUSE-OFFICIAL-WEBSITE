var darkMode
if( localStorage.getItem("darkmode")==="off"){
     darkMode =false
}
else{
     darkMode =true
}



const DarkModeReducer = (state= darkMode,action) =>{
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