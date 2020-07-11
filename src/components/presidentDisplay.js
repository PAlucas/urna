import React from 'react'

export default props =>{
    return(
        <div>
            <header>
                <h1>{props.name}</h1>
            </header>
            <div>
                <div><span>{props.number1}</span></div>
                <div><span>{props.number2}</span></div>
            </div>
            <div>
                <img>{props.img}</img>
            </div>
        </div>
    )
}