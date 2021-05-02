
import { connect } from 'react-redux'
import { followActionCreater, setCurrentPageActionCreater, setTotalUserCountActionCreater, setUsersActionCreater, UnFollowActionCreater } from '../../redux/users-reduser'
import Users from './Users'

let mapStateToProps = (state)=>{
   

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
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
    }
}

}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
