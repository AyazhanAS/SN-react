let ADD_POST = "ADD-POST";
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let SET_USER_PROFILE = "SET_USER_PROFILE"


let initialState = {
    postData: [
        {id: 1, message: "Hello", likesCount: "0"},
        {id: 2, message: "How are you", likesCount: "154"},
      ],
    newPostText: "",
    profile: null
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
        case SET_USER_PROFILE:
            return{...state, profile:action.profile}
        default:
            return state;
    }
    
}

export let addPostActionCreator = () =>({type: ADD_POST});

export let setUserProfile = (profile) =>({type:SET_USER_PROFILE, profile})

export let upDateNewPostextActionCreator = (text) =>{
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}


