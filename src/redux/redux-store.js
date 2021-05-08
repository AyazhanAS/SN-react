import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from "./auth-reducer";
import { messageReducer } from "./message-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import { userReduser } from "./users-reduser";
import thunkMiddleware from "redux-thunk"



let reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagePage: messageReducer,
        sideBar: sidebarReducer, 
        usersPage: userReduser,
        auth: authReducer
    }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;