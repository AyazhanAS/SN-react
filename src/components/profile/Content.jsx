import s from"./Content.module.css"
import Myposts from "./myPOsts/Myposts"
import ProfileInfo from "./profileInfo/ProfileInfo";
const Content = ()=>{
    return(
        <div>
            <ProfileInfo/>
            <Myposts/>
        </div>
    )
}
export default Content;