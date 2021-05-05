
import styles from "./Users.module.css"
import UserPhoto from "../../assets/user.png"
import React from 'react';
import { NavLink } from "react-router-dom";
import axios from "axios";


export default function Users(props) {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }  
    return (
        <div>
        <div className={styles.userWrapper}>
        {pages.map(p=>{
       return <span className={(props.currentPage===p)&&styles.selectedPage} onClick={()=>{props.onPageChanged(p)}}>{p}</span>
   } )}
   </div>
           
       {props.users.map(u => <div key = {u.id}>
           <span>
               <div>
                   <NavLink to = {'/profile/' + u.id}>
                       <img alt="" className = {styles.imgUsers} src={u.photos.small!=null ? u.photos.small: UserPhoto}/>
                   </NavLink>
                  
               </div>
               <div>
                   {u.followed  
                   ?<button onClick={()=>{
                       
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                        withCredentials:true,
                        headers: {
                            "API-KEY": "10785454-965d-41cc-9009-2fd1faf2ce84"
                        }
                    })
                    .then(response =>{
                        if(response.data.resultCode === 0){
                            props.unFollow(u.id)
                        }
                    }
                    )
                 
                
                }}>UnFollow</button>
                   :<button onClick={()=>{
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                        withCredentials:true,
                        headers: {
                            "API-KEY": "10785454-965d-41cc-9009-2fd1faf2ce84"
                        }
                    })
                    .then(response =>{
                        if(response.data.resultCode === 0){
                            props.follow(u.id)
                        }
                    }
                    )
                       
                    
                       
                       
                }}>Follow</button>}
                   
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






