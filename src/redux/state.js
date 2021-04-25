
import {rerenderEntireTree} from "../render"

  let state = {

    profilePage: {
        postData: [
            {id: 1, message: "Hello", likesCount: "0"},
            {id: 2, message: "How are you", likesCount: "154"},
          ],
        newPostText: "klklk"
         
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
      ]
    }
  }


  export let addPost = ()=>{
    let newPost = {
      id:0,
      message: state.profilePage.newPostText,
      likesCount: 0
    };
    state.profilePage.newPostText = ""
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state)
  }

  export let updateNewPostText = (newText)=>{
    
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
  }

  export default state;