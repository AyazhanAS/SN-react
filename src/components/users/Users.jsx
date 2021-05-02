import axios from 'axios'
import styles from "./Users.module.css"
import UserPhoto from "../../assets/user.png"

import React, { Component } from 'react'

export default class Users extends Component {

    componentDidMount(){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
        
            this.props.setUser(response.data.items)
        }
    
        )

    }

  
    render() {
        return (
             <div>
                <div>
                    <span>1</span>
                    <span>2</span>
                    <span className={styles.selectedPage}>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                </div>
                {this.props.users.map(u => <div key = {u.id}>
                    <span>
                        <div>
                            <img alt="" className = {styles.imgUsers} src={u.photos.small!=null ? u.photos.small: UserPhoto}/>
                        </div>
                        <div>
                            {u.followed  
                            ?<button onClick={()=>{this.props.unfollow(u.id)}}>UnFollow</button>
                            :<button onClick={()=>{this.props.follow(u.id)}}>Follow</button>}
                            
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
}


