
import { connect } from "react-redux";
import { addPostActionCreator} from "../../../redux/profile-reducer";
import Myposts from "./Myposts";



let mapStateToProps = (state)=>{
    return {
        postD:state.profilePage.postData,
        newPostText:state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
      
        addPost: (newPostText)=>{
            dispatch(addPostActionCreator(newPostText))
        }


    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);



export default MyPostsContainer;