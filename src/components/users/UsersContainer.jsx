
import { connect } from 'react-redux'
import { followActionCreater, setUsersActionCreater, UnFollowActionCreater } from '../../redux/users-reduser'
import Users from './Users'

let mapStateToProps = (state)=>{

    return {
        users: state.usersPage.users
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
    }
}

}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
