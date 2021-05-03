import React from 'react'
import loader from "../../../assets/loader.gif"

export const Preloader = (props) => {
    return (
        <div>
            <img className="Loader" alt = "" src = {loader}/>
            
        </div>
    )
}
