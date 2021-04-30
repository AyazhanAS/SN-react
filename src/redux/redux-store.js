import { combineReducers, createStore } from "redux";
import { messageReducer } from "./message-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagePage: messageReducer,
        sideBar: sidebarReducer
    }
);

let store = createStore(reducers);

window.store = store;
export default store;
