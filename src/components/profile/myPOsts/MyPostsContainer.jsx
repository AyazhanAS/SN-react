
import { addPostActionCreator, upDateNewPostextActionCreator } from "../../../redux/profile-reducer";
import Myposts from "./Myposts";




const MypostsContainer = (props) => {

    let state = props.store.getState();

    let addPost =()=>{
       props.store.dispatch(addPostActionCreator())
    }
   

    let onPostChange = (text)=>{
        let action = upDateNewPostextActionCreator(text);
        props.store.dispatch(action)
    }

    return (
        <Myposts postD = {state.profilePage.postData} 
        addPost= {addPost} 
        updateNewPostText={onPostChange}
        newPostText = {state.profilePage.newPostText}/>
    )
}
export default MypostsContainer;