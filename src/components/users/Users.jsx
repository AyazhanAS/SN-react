import axios from 'axios'
import React from 'react'
import styles from "./Users.module.css"
import UserPhoto from "../../assets/user.png"

export default function Users(props) {

    if(!props.users.length){


        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
    
            props.setUser(response.data.items)
        }
        )

     

    }

    return (
        <div>
            {props.users.map(u => <div key = {u.id}>
                <span>
                    <div>
                        <img alt="" className = {styles.imgUsers} src={u.photos.small!=null ? u.photos.small: UserPhoto}/>
                    </div>
                    <div>
                        {u.followed  
                        ?<button onClick={()=>{props.unfollow(u.id)}}>UnFollow</button>
                        :<button onClick={()=>{props.follow(u.id)}}>Follow</button>}
                        
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>               
                    </span>
                </span>
            </div>)}
            
        </div>
    )
}
