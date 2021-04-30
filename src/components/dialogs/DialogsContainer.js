
import { connect } from 'react-redux';
import { sendMessageCreator, upDateNewMessageBodyCreator } from '../../redux/message-reducer'

import Dialogs from "./Dialogs"



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

 const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

 export default DialogsContainer;
