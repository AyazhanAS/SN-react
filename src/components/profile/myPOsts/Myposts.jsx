import s from "./Myposts.module.css";
import Post from "./post/Post";

const Myposts = () => {
    return (
        <div className="" >
            <textarea></textarea>
            <button>Add post</button>
            <div>New post</div>
            <div className="posts">
                <Post message="Hello" like="0"/>
                <Post message="It is me" like="453"/>
            </div>
        </div>
    )
}
export default Myposts;