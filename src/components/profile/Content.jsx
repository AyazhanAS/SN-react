import s from"./Content.module.css"
import Myposts from "./myPOsts/Myposts"
import ProfileInfo from "./profileInfo/ProfileInfo";
const Content = (props)=>{
    
   
    return(

        
        <div>
            <ProfileInfo/>
            <Myposts postD ={props.state.postData}/>
        </div>
    )
}
export default Content;