import React, { Component } from 'react'
import { sendMessageCreator, upDateNewMessageBodyCreator } from '../../redux/message-reducer'
import DialogItems from './dialogItems/DialogItems'
import s from "./Dialogs.module.css"
import Messages from './messages/Messages'


export default function Dialogs(props) {
    
    let state = props.store.getState().messagePage;
 
    let dialogsElements = state.dialogsData
    .map(dialog =>  <DialogItems name = {dialog.name} id={dialog.id}/>)

  
    let messageElements = state.messageData
    .map(messageElem => <Messages message={messageElem.message}/>)



    let onNewMessageChange = (ev)=>{
        let body = ev.target.value;
        props.store.dispatch(upDateNewMessageBodyCreator(body))
    }

    let onSendMessageClick = ()=>{
        props.store.dispatch(sendMessageCreator())
    }

    


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
              {dialogsElements}
            </div>
            <div className={s.mesaages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <textarea 
                        value ={state.newMessageBody}
                        placeholder="Enter your message" 
                        onChange = {onNewMessageChange}
                        onClick = {onSendMessageClick}
                        ></textarea>
                    </div>
                    <div>
                       <button onClick = {onSendMessageClick}>Enter</button>
                    </div>
                </div>
              
         
            </div>
        </div>
    )
}
