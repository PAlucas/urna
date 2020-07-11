import React from 'react'
import '../components/style/buttonsVote.css'

export default props =>{
    let square = 'square'
    const buttonVote = 'buttonVote' 
    square += props.zero ? ' zero': ''

    return(
        <div className={square}>
            <button className={buttonVote}  onClick={() => props.click(props.label)}>{props.label}</button>
        </div>
    )
}