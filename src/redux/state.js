
let ADD_POST = "ADD-POST";
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE"


  let store = {
    _state:{

      profilePage: {
          postData: [
              {id: 1, message: "Hello", likesCount: "0"},
              {id: 2, message: "How are you", likesCount: "154"},
            ],
          newPostText: ""
           
      },
      messagePage:{
          dialogsData: [
              {id: 1, name: "Almaty"},
              {id: 2, name: "Nursultan"},
              {id: 3, name: "Lenger"},
              {id: 4, name: "Shymkent"},
              {id: 5, name: "Oral"},
              {id: 6, name: "Aktobe"},
              {id: 7, name: "Aktau"},
              {id: 8, name: "Semey"},
              {id: 9, name: "Kokshetau"},
              {id: 10, name: "Tashkent"}  
              ],
          messageData: [
              {id:1, message: "Hello"},
              {id:2, message: "How are you"},
              {id:3, message: "How old are you"},
              {id:4,   message: "Wow!!!"}
              ],
          newMessageBody: " "
      }
    },
    _callSubscriber(){
      console.log("state change")
   },

  
    getState(){
      return this._state;
    },
  
    subscribe(observer){
      this._callSubscriber = observer;
    },

    dispatch(action){
      if(action.type===ADD_POST){
        let newPost = {
          id:0,
          message: this._state.profilePage.newPostText,
          likesCount: 0
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = ""
        this._callSubscriber(this._state)
      } else if(action.type===UPDATE_NEW_POST_TEXT ){
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state)
      }else if (action.type === UPDATE_NEW_MESSAGE_BODY){
        this._state.messagePage.newMessageBody = action.body;
        this._callSubscriber(this._state)
      }else if(action.type===SEND_MESSAGE){
        let body = this._state.messagePage.newMessageBody;
        this._state.messagePage.newMessageBody = "";
        this._state.messagePage.messageData.push({ id:5, message: body});
        this._callSubscriber(this._state);
      }

    }
  }

export let addPostActionCreator = () =>({type: ADD_POST});

export let upDateNewPostextActionCreator = (text) =>{
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export let sendMessageCreator = () =>({type: SEND_MESSAGE});

export let upDateNewMessageBodyCreator = (body) =>{
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}

  export default store;
  window.store = store;