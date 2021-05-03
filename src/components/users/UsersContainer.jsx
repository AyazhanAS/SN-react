
import { connect } from 'react-redux'
import { followActionCreater, setCurrentPageActionCreater, setTotalUserCountActionCreater, setUsersActionCreater, UnFollowActionCreater, toggleIsFetchingActionCreater } from '../../redux/users-reduser'
import Users from './Users'
import React, { Component } from 'react'
import axios from 'axios'

import { Preloader } from '../common/preloader/Preloader'

class UsersContainer extends Component {

    componentDidMount(){
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response =>{
            this.props.toggleIsFetching(false)
            this.props.setUser(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)   
        }
        )

    }
    onPageChanged = (pageNumber) =>{
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response =>{
            this.props.toggleIsFetching(false)
            this.props.setUser(response.data.items)
        }
        )
    }

  
    render() {  
        return (           
            <>
            {this.props.isFetching?<Preloader/>:null}
            
             <Users 
             totalUserCount = {this.props.totalUserCount}
             currentPage = {this.props.currentPage}
             pageSize = {this.props.pageSize}
             onPageChanged = {this.onPageChanged}
             users = {this.props.users}
             follow = {this.props.follow}
             unfollow = {this.props.unfollow}
             />
             </>
        )
    }
}


let mapStateToProps = (state)=>{
   

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching : state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
    follow: (userId) =>{
        dispatch(followActionCreater(userId));
    }, 
    unfollow: (userId)=>{
        dispatch(UnFollowActionCreater(userId));
    },
    setUser: (users) =>{
        dispatch(setUsersActionCreater(users))
    },
    setCurrentPage: (pageNumber)=>{
        dispatch(setCurrentPageActionCreater(pageNumber))
    },
    setTotalUserCount: (totalCount)=>{
        dispatch(setTotalUserCountActionCreater(totalCount))
    },
    toggleIsFetching: (isFetching)=>{
        dispatch(toggleIsFetchingActionCreater(isFetching))
    }
}

}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
