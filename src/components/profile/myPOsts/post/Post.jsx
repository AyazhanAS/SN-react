import s from "./Post.module.css";

const Post = (props) => {
    return (

        <div className={s.item}>
            <img alt="" src="https://www.girlschase.com/images/street-smarts-3.jpg" />
                 {props.message}
            <div>
                <span>Like </span>{props.like}
            </div>
        </div>

    )
}
export default Post;