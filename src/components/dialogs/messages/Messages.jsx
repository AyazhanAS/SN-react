import React from 'react'
import s from "./Messages.module.css"

export default function Messsages(props) {

 
    
    return (
         <div className={s.message }>{props.message}
        
         </div>
         
    )
}
