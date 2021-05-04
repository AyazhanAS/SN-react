
import MypostsContainer from "./myPOsts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Content = (props)=>{
    return(
        <div>
            <ProfileInfo profile = {props.profile}/>
            <MypostsContainer />
        </div>
    )
}
export default Content;