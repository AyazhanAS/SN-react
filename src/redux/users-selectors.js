
import {createSelector} from "reselect"

const getUserSelector = (state)=>{
    return state.usersPage.users
}

// export const getUsersSelector = (state)=>{
//     return requestUsers(state).filter(u=>true)
// }

export const  requestUsers= createSelector(getUserSelector,(users)=>{
    return users.filter(u=>true)
})

export const getPageSize = (state)=>{
    return state.usersPage.pageSize
}

export const getTotalUserCount = (state)=>{
    return state.usersPage.totalUserCount
}


export const getCurrentPage = (state)=>{
    return state.usersPage.currentPage
}



export const getIsFetching = (state)=>{
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state)=>{
    return state.usersPage.followingInProgress
}

