import s from "./Myposts.module.css";
import Post from "./post/Post";

const Myposts = (props) => {


    let postElements = props.postD
    .map(postEl =>  <Post message={postEl.message} like={postEl.likesCount}/>)

    return (
        <div className={s.postsBlock} >
            <h3>My posts</h3>
            <div>
            <textarea></textarea>
            </div>
            <div>
            <button>Add post</button>
            </div>
            
            
            <div>New post</div>
            <div className="posts">
               {postElements}
               {postElements}
            </div>
        </div>
    )
}
export default Myposts;