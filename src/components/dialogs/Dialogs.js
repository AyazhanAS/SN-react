import React  from 'react';
import { Redirect } from 'react-router';
import DialogItems from './dialogItems/DialogItems'
import s from "./Dialogs.module.css"
import Messages from './messages/Messages'


export default function Dialogs(props) {
    debugger
    let state = props.messagePage;

    let dialogsElements = state.dialogsData
    .map(dialog =>  <DialogItems name = {dialog.name} id={dialog.id} key = {dialog.id}/>)

  
    let messageElements = state.messageData
    .map(messageElem => <Messages message={messageElem.message} key = {messageElem.id}/>)



    let onNewMessageChange = (ev)=>{
        let body = ev.target.value;
        props.upDateNewMessageBody(body)
    }

    let onSendMessageClick = ()=>{
        props.sendMessage();
    }

    if(!props.isAuth){
        return <Redirect to = {"/Login"}/>
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
