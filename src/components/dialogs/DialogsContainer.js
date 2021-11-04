
import { connect } from 'react-redux';
import { sendMessageCreator, upDateNewMessageBodyCreator } from '../../redux/message-reducer'
import { Redirect } from 'react-router';
import Dialogs from "./Dialogs"
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



let mapStateToProps = (state)=>{
    
    return {
        messagePage: state.messagePage
        
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        upDateNewMessageBody: (body)=>{
            dispatch(upDateNewMessageBodyCreator(body))
            
        },
        sendMessage: ()=>{
            
            dispatch(sendMessageCreator())
        }
    }
}



 export default compose(
     connect(mapStateToProps, mapDispatchToProps),
     withAuthRedirect
 )(Dialogs)
