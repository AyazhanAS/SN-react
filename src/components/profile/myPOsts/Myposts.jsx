import React from "react";
import s from "./Myposts.module.css";
import Post from "./post/Post";
import {reduxForm, Field} from 'redux-form';
import { maxLengthCreator, requiredField } from "../../../utils/validations/validators";
import { TextArea } from "../../common/FormsControls/FormsControls";

const maxLenght10 = maxLengthCreator(10);

const Myposts = (props) => {
    
    let postElements = props.postD
    .map(postEl =>
          <Post message={postEl.message} like={postEl.likesCount}/>)

    
    let onAddPost =(value)=>{
        props.addPost(value.newPostText);

    }

    return (
        <div className={s.postsBlock} >
            <h3>My posts</h3>
           
            <AddNewPostForm onSubmit={onAddPost}/>
            
            <div>New post</div>
            <div className="posts">
               {postElements}
            </div>
        </div>
    )
}

let AddNewPostForm=(props)=>{
    return(
        <form onSubmit = {props.handleSubmit}>
        <div>

        <Field name="newPostText" placeholder="Enter word" component={TextArea} validate={[requiredField, maxLenght10]}/>
        </div>
        <div>
        <button >Add post</button>
        </div>
        </form>
    )
}


AddNewPostForm=reduxForm({form:"addNewPostForm"})(AddNewPostForm)

export default Myposts;