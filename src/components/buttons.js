import React from 'react'

export default props =>{
    return(
        <div>
            <button onClick={() => props.click(props.label)}>{props.label}</button>
        </div>
    )
}