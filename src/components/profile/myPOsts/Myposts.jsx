import s from "./Myposts.module.css";
import Post from "./post/Post";

const Myposts = () => {

    let postData = [
        {id: 1, message: "Hello", likesCount: "0"},
        {id: 2, message: "How are you", likesCount: "154"},

    ]

    let postElements = postData
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