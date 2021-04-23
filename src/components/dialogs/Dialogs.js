import React, { Component } from 'react'
import DialogItems from './dialogItems/DialogItems'
import s from "./Dialogs.module.css"
import Messages from './messages/Messages'


export default function Dialogs(props) {

 
    let dialogsElements = props.state.dialogsData
    .map(dialog =>  <DialogItems name = {dialog.name} id={dialog.id}/>)

  
    let messageElements = props.state.messageData
    .map(messageElem => <Messages message={messageElem.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
              {dialogsElements}
            </div>
            <div className={s.mesaages}>
              {messageElements}
            </div>
        </div>
    )
}
