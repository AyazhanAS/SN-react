
import { connect } from 'react-redux'
import { setCurrentPage, toggleFollowingProgress, getUsers, unFollow, follow } from '../../redux/users-reduser'
import Users from './Users'
import React, { Component } from 'react'


import { Preloader } from '../common/preloader/Preloader'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

class UsersContainer extends Component {

    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) =>{
        this.props.getUsers( pageNumber, this.props.pageSize)
        
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




export default compose(
    connect(mapStateToProps, {unFollow, follow, setCurrentPage, toggleFollowingProgress, getUsers})
)(UsersContainer)
