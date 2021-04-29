
import MypostsContainer from "./myPOsts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Content = (props)=>{
    return(
        <div>
            <ProfileInfo/>
            <MypostsContainer />
        </div>
    )
}
export default Content;