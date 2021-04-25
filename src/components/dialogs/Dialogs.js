import React, { Component } from 'react'
import DialogItems from './dialogItems/DialogItems'
import s from "./Dialogs.module.css"
import Messages from './messages/Messages'


export default function Dialogs(props) {

 
    let dialogsElements = props.state.dialogsData
    .map(dialog =>  <DialogItems name = {dialog.name} id={dialog.id}/>)

  
    let messageElements = props.state.messageData
    .map(messageElem => <Messages message={messageElem.message}/>)

    let newMessage = React.createRef();

    let addMessage = ()=>{
        let text = newMessage.current.value;
        alert(text);
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
              {dialogsElements}
            </div>
            <div className={s.mesaages}>
              {messageElements}
              <textarea ref={newMessage}></textarea>
         <button onClick = {addMessage}>Enter</button>
            </div>
        </div>
    )
}
