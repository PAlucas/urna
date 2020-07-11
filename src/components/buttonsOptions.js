import React from 'react'
import './style/buttonsOptions.css'

export default props =>{
    let classes = 'button-option'
    const squareOptions = 'squareOptions'

    classes += props.branco ? ' branco':''
    classes += props.confirmar ? ' confirmar':''
    classes += props.cancelar ? ' cancelar':''

    return(
        <div className={squareOptions}>
            <button className={classes} onClick={()=> props.click()}>{props.label}</button>
        </div>
        
    )
}