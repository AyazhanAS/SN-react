import { NavLink } from "react-router-dom"
import h from"./Header.module.css"


const Header = (props)=>{
    return(
        <header className = {h.header}>
        <img  alt ="" src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png"/>
        <div className = {h.loginBlock}>
          {props.isAuth ? <div>{props.login} - <button onClick = {props.loginout}>LOG OUT</button></div>
          :<NavLink to = {"/login"}>Login</NavLink>
}

        </div>
      </header>
    )
}

export default Header;