let ADD_POST = "ADD-POST";
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let initialState = {
    postData: [
        {id: 1, message: "Hello", likesCount: "0"},
        {id: 2, message: "How are you", likesCount: "154"},
      ],
    newPostText: ""
}

export const profileReducer = (state = initialState, action) =>{

    switch(action.type){
        case ADD_POST:
            let newPost = {
                id:0,
                message: state.newPostText,
                likesCount: 0
              };
              state.postData.push(newPost);
              state.newPostText = "";
              return state;
        
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
    
}

export let addPostActionCreator = () =>({type: ADD_POST});

export let upDateNewPostextActionCreator = (text) =>{
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}


