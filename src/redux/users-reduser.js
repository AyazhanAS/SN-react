import { userAPI } from '../api/api'


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"


let initialState = {
    users: [ ],
    pageSize:4,
    totalUserCount:0, 
    currentPage:1,
    isFetching:true, 
    followingInProgress: []
}
export const userReduser = (state = initialState, action)=>{
  
    switch(action.type){
        case FOLLOW:
            return{
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed:true}
                    } 
                    return u;  
                })
            }
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed:false}
                    } 
                    return u;  
                })
            }
        case SET_USERS:{
            return{...state, users:action.users}
        }
        case SET_CURRENT_PAGE:{
            return{
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USER_COUNT:{
            return{
                ...state, totalUserCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING:{
            return{
                ...state, isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS:{
            return{
                ...state, 
                followingInProgress: action.isFetching ?[...state.followingInProgress, action.userId] : [state.followingInProgress.filter(id => id !==action.userId)]
        }
    }
        default:
            return state;

    }
}

export const acceptFollow = (userId) => ({type: FOLLOW, userId})
export const acceptUnFollow = (userId) => ({type: UNFOLLOW, userId})
export const setUser = (users) => ({type:SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage})
export const setTotalUserCount = (totalUserCount) => ({type:SET_TOTAL_USER_COUNT, count:totalUserCount})
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type:TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsers = (pageNumber, pageSize) =>{
    return (dispatch) =>{
        dispatch(toggleIsFetching(true))
        userAPI.getUsers(pageNumber, pageSize).then(data =>{
            dispatch(setCurrentPage(pageNumber))
            dispatch(toggleIsFetching(false))
            dispatch(setUser(data.items))
            dispatch(setTotalUserCount(data.totalCount))   
        }
        )
    }
} 

export const follow = (userId) =>{
    return (dispatch) =>{
        dispatch(toggleFollowingProgress(true, userId))  
        userAPI.getFollow(userId)
        .then(response =>{
            if(response.data.resultCode === 0){
                dispatch(acceptFollow(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        }
        )
     
    }
} 
    
export const unFollow = (userId) =>{
    return (dispatch) =>{
        dispatch(toggleFollowingProgress(true, userId))  
        userAPI.getUnFollow(userId)
        .then(response =>{
            if(response.data.resultCode === 0){
                dispatch(acceptUnFollow(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        }
        )
     
    }
} 