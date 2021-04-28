
import MypostsContainer from "./myPOsts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Content = (props)=>{
    return(
        <div>
            <ProfileInfo/>
            <MypostsContainer store= {props.store}/>
        </div>
    )
}
export default Content;