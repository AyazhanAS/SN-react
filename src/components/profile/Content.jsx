
import { Redirect } from "react-router";
import MypostsContainer from "./myPOsts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Content = (props)=>{
    if(!props.isAuth){
        return <Redirect to = {"/login"}/>
    }
    return(
        <div>
            <ProfileInfo profile = {props.profile}/>
            <MypostsContainer />
        </div>
    )
}
export default Content;