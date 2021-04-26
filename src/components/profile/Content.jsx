import s from"./Content.module.css"
import Myposts from "./myPOsts/Myposts"
import ProfileInfo from "./profileInfo/ProfileInfo";
const Content = (props)=>{
    
   
    return(

        
        <div>
            <ProfileInfo/>
            <Myposts postD ={props.state.postData}
            newPostText = {props.state.newPostText}
            dispatch = {props.dispatch}
             
             />
        </div>
    )
}
export default Content;