
import styles from "./Users.module.css"
import UserPhoto from "../../assets/user.png"
import React from 'react';
import { NavLink } from "react-router-dom";




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
                   ?<button disabled = {props.followingInProgress.some(id=> id===u.id)} onClick={()=>{props.unFollow(u.id)}}>UnFollow</button>
                   :<button disabled = {props.followingInProgress.some(id=> id===u.id)}  onClick={()=>{props.follow(u.id)}}>Follow</button>}
                   
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






