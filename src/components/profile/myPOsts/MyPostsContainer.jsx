
import { addPostActionCreator, upDateNewPostextActionCreator } from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";
import Myposts from "./Myposts";




const MypostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            (store)=>{
                let state = store.getState();
                let addPost =()=>{
                   store.dispatch(addPostActionCreator())
            }
   
            let onPostChange = (text)=>{
                 let action = upDateNewPostextActionCreator(text);
                 store.dispatch(action)
            }

            return <Myposts postD = {state.profilePage.postData} 
                addPost= {addPost} 
                updateNewPostText={onPostChange}
                newPostText = {state.profilePage.newPostText}/>
            }
            }
          
        </StoreContext.Consumer>
    )
}
export default MypostsContainer;