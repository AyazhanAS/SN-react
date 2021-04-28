// import { messageReducer } from "./message-reducer";
// import { profileReducer } from "./profile-reducer";
// import { sidebarReducer } from "./sidebar-reducer";


//   let store = {
//     _state:{

//       profilePage: {
//           postData: [
//               {id: 1, message: "Hello", likesCount: "0"},
//               {id: 2, message: "How are you", likesCount: "154"},
//             ],
//           newPostText: ""
           
//       },
//       messagePage:{
//           dialogsData: [
//               {id: 1, name: "Almaty"},
//               {id: 2, name: "Nursultan"},
//               {id: 3, name: "Lenger"},
//               {id: 4, name: "Shymkent"},
//               {id: 5, name: "Oral"},
//               {id: 6, name: "Aktobe"},
//               {id: 7, name: "Aktau"},
//               {id: 8, name: "Semey"},
//               {id: 9, name: "Kokshetau"},
//               {id: 10, name: "Tashkent"}  
//               ],
//           messageData: [
//               {id:1, message: "Hello"},
//               {id:2, message: "How are you"},
//               {id:3, message: "How old are you"},
//               {id:4,   message: "Wow!!!"}
//               ],
//           newMessageBody: " "
//       },
//       sideBar:{}
//     },
//     _callSubscriber(){
//       console.log("state change")
//    },

  
//     getState(){
//       return this._state;
//     },
  
//     subscribe(observer){
//       this._callSubscriber = observer;
//     },

//     dispatch(action){

//       this._state.profilePage = profileReducer(this._state.profilePage, action);
//       this._state.messagePage = messageReducer(this._state.messagePage, action);
//       this._state.sideBar = sidebarReducer(this._state.sideBar, action);
     
//       this._callSubscriber(this._state);
//     }
//   }




  export default store;
  window.store = store;