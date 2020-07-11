import React from 'react'
import '../components/style/presidentDisplay.css'

export default props =>{
    const display = 'display'
    const title = 'title'
    const titleWrite = 'titleWrite'
    const numbers = 'numbers'
    const divNumber = 'divNumber'
    const number1 = 'number1'
    const number2 = 'number2'
    const image = 'image'
    const img = 'img'
    return(
        <div id={display}>
            <header id={title}>
                <h1 id={titleWrite}>Presidente</h1>
            </header>
            <div id={numbers}>
                <div className={divNumber}><span id={number1}>{props.number1}</span></div>
                <div className={divNumber}><span id={number2}>{props.number2}</span></div>
            </div>
            <div id={image}>
                <div id={img}>
                    <h1>{props.nomePresidente}</h1>
                    <img src={props.img} alt={props.nomePresidente}></img>
                </div>
            </div>
        </div>
    )
}