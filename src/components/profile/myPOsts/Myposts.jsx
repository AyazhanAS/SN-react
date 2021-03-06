import React from "react";
import s from "./Myposts.module.css";
import Post from "./post/Post";



const Myposts = (props) => {
    
    let postElements = props.postD
    .map(postEl =>
          <Post message={postEl.message} like={postEl.likesCount}/>)

    let newPostElement = React.createRef();
    
    let onAddPost =()=>{
        props.addPost();

    }
   

    let onPostChange = ()=>{
        let text = newPostElement.current.value;
         props.updateNewPostText(text)
    }

   

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
            <button onClick ={onAddPost}
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