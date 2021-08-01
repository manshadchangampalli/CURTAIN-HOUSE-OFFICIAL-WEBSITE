import React from 'react'


export const ModeContext = React.createContext();

function Context(props) {
    console.log(props.mode + "context");
    return (
        <ModeContext.Provider value={props.mode}>
            {props.children}
        </ModeContext.Provider>
    )
}

export default Context
