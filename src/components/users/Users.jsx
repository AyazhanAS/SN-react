import axios from 'axios'
import styles from "./Users.module.css"
import UserPhoto from "../../assets/user.png"

import React, { Component } from 'react'

export default class Users extends Component {

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{
        
            this.props.setUser(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
            
        }
    
        )

    }
    onPageChanged = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>{
        
            this.props.setUser(response.data.items)
        }
    
        )

    }

  
    render() {
        
        let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }
        return (
            
             <div className={styles.userWrapper}>
                 {pages.map(p=>{
                return <span className={(this.props.currentPage===p)&&styles.selectedPage} onClick={()=>{this.onPageChanged(p)}}>{p}</span>
            } )}
               
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


