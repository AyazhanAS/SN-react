import { profileAPI, userAPI } from "../api/api";

let ADD_POST = "ADD-POST";
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let SET_USER_PROFILE = "SET_USER_PROFILE";
let SET_STATUS = "SET_STATUS";


let initialState = {
    postData: [
        {id: 1, message: "Hello", likesCount: "0"},
        {id: 2, message: "How are you", likesCount: "154"},
      ],
    newPostText: "",
    profile: null,
    status:""
}

export const profileReducer = (state = initialState, action) =>{

    switch(action.type){
        case ADD_POST:{
            let newPost = {
                id:0,
                message: state.newPostText,
                likesCount: 0
              };

              return{
                  ...state,
                  postData:[...state.postData, newPost],
                  newPostText:""
                };
            }
        case UPDATE_NEW_POST_TEXT:{
            return{
                ...state,
                newPostText:action.newText
            };
        }
        case SET_STATUS:{
            return{
                ...state,
                status:action.status
            };
        }
        case SET_USER_PROFILE:
            return{...state, profile:action.profile}
        default:
            return state;
    }
    
}

export let addPostActionCreator = () =>({type: ADD_POST});

export let setUserProfile = (profile) =>({type:SET_USER_PROFILE, profile});

export let setStatus = (status) =>({type:SET_STATUS, status})

export let getUserProfile = (userId) =>(dispatch)=>{
    userAPI.getProfile(userId)
        .then(response =>{
            dispatch(setUserProfile(response.data))
        }
        )
}


export let getUserStatus = (userId) =>(dispatch)=>{
    profileAPI.getStatus(userId)
        .then(response =>{
        
            dispatch(setStatus(response.data))
        }
        )
}


export let getUpdateStatus = (status) =>(dispatch)=>{
    profileAPI.updateStatus(status)
        .then(response =>{
            if(response.data.resultCode===0)
            dispatch(setStatus(status))
        }
        )
}

export let upDateNewPostextActionCreator = (text) =>{
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}


