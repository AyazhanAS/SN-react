
import { connect } from 'react-redux'
import { follow, setCurrentPage, setTotalUserCount, setUser, unFollow, toggleIsFetching, toggleFollowingProgress } from '../../redux/users-reduser'
import Users from './Users'
import React, { Component } from 'react'


import { Preloader } from '../common/preloader/Preloader'
import { userAPI } from '../../api/api'

class UsersContainer extends Component {

    componentDidMount(){
        this.props.toggleIsFetching(true)
        userAPI.getUsers(this.props.pageNumber, this.props.pageSize).then(data =>{

            this.props.toggleIsFetching(false)
            this.props.setUser(data.items)
            this.props.setTotalUserCount(data.totalCount)   
        }
        )

    }
    onPageChanged = (pageNumber) =>{
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
       userAPI.getUsers(pageNumber, this.props.pageSize).then(data =>{
            this.props.toggleIsFetching(false)
            this.props.setUser(data.items)
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
             unFollow = {this.props.unFollow}
             toggleFollowingProgress = {this.props.toggleFollowingProgress}
             followingInProgress = {this.props.followingInProgress}
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
        isFetching : state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}



export default connect(mapStateToProps,{
 follow,
 unFollow,
 setUser,
 setCurrentPage,
 setTotalUserCount,
 toggleIsFetching,
 toggleFollowingProgress
})(UsersContainer)
