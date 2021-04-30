
import { connect } from "react-redux";
import { addPostActionCreator, upDateNewPostextActionCreator } from "../../../redux/profile-reducer";
import Myposts from "./Myposts";



let mapStateToProps = (state)=>{
    return {
        postD:state.profilePage.postData,
        newPostText:state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        updateNewPostText: (text)=>{
            let action = upDateNewPostextActionCreator(text);
            dispatch(action)
        },
        addPost: ()=>{
            dispatch(addPostActionCreator())
        }


    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);



export default MyPostsContainer;