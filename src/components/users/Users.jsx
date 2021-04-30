import React from 'react'
import styles from "./Users.module.css"

export default function Users(props) {

    if(!props.users.length){
        props.setUser(
            [
              {id: 1, followed: false, fulName: "Batosh", photoURL:"https://img-fotki.yandex.ru/get/52765/340977384.1/0_13c56d_e8a81eaf_orig",  status: "I am a Boss", location: {country: "Kazakhstan", city: "Almaty"}},
              {id: 2, followed: false, fulName: "Kabluda", photoURL:"https://img-fotki.yandex.ru/get/52765/340977384.1/0_13c56d_e8a81eaf_orig", status: "I am a berry", location: {country: "Kazakhstan", city: "Nursultan"}},
              {id: 3, followed: true, fulName: "SpangeBob", photoURL:"https://img-fotki.yandex.ru/get/52765/340977384.1/0_13c56d_e8a81eaf_orig",  status: "I am a personaj", location: {country: "USA", city: "Chikago"}},
              {id: 4, followed: true, fulName: "Babay", photoURL:"https://img-fotki.yandex.ru/get/52765/340977384.1/0_13c56d_e8a81eaf_orig", status: "I am a Babay", location: {country: "Kazakhstan", city: "BabayCity"}}
               
              ]
        )

    }

    return (
        <div>
            {props.users.map(u => <div key = {u.id}>
                <span>
                    <div>
                        <img alt="" className = {styles.imgUsers} src={u.photoURL}/>
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
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>               
                    </span>
                </span>
            </div>)}
            
        </div>
    )
}
