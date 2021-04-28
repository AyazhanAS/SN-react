import React from 'react'
import { sendMessageCreator, upDateNewMessageBodyCreator } from '../../redux/message-reducer'
import Dialogs from "./Dialogs"


export default function DialogsContainer(props) {
    debugger;
    
    let state = props.store.getState().messagePage;
 
   

    let onNewMessageChange = (body)=>{
        props.store.dispatch(upDateNewMessageBodyCreator(body))
    }

    let onSendMessageClick = ()=>{
        props.store.dispatch(sendMessageCreator())
    }

    


    return (
        <Dialogs sendMessage={onSendMessageClick}
        messagePage = {state}
         upDateNewMessageBody={onNewMessageChange}/>
    )
}
