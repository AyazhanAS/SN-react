import React, { createRef } from "react";
import { addPostActionCreator, upDateNewPostextActionCreator } from "../../../redux/state";
import s from "./Myposts.module.css";
import Post from "./post/Post";



const Myposts = (props) => {

    let newPostElement = React.createRef();
    
    let addPost =()=>{
        props.dispatch(addPostActionCreator())

    }
   

    let onPostChange = ()=>{
        let text = newPostElement.current.value;
        props.dispatch(upDateNewPostextActionCreator(text))
    }

    let postElements = props.postD
    .map(postEl =>
          <Post message={postEl.message} like={postEl.likesCount}/>)

    return (
        <div className={s.postsBlock} >
            <h3>My posts</h3>
            <div>

            <textarea 
            onChange={onPostChange}
            value={props.newPostText}
            ref={newPostElement}/>
            </div>
            <div>
            <button onClick ={addPost}
            
            
            >Add post</button>
            </div>
            
            
            <div>New post</div>
            <div className="posts">
               {postElements}
            </div>
        </div>
    )
}
export default Myposts;