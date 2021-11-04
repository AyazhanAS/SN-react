

import MypostsContainer from "./myPOsts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Content = (props)=>{
 
    return(
        <div>
            <ProfileInfo profile = {props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MypostsContainer />
        </div>
    )
}
export default Content;