import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import DialogItems from './dialogItems/DialogItems'
import s from "./Dialogs.module.css"
import Messages from './messages/Messages'


export default function Dialogs(props) {

    let dialogsData = [
        {id: 1, name: "Almaty"},
        {id: 2, name: "Nursultan"},
        {id: 3, name: "Lenger"},
        {id: 4, name: "Shymkent"},
        {id: 5, name: "Oral"},
        {id: 6, name: "Aktobe"},
        {id: 7, name: "Aktau"},
        {id: 8, name: "Semey"},
        {id: 9, name: "Kokshetau"},
        {id: 10, name: "Tashkent"}

    ]

    let dialogsElements = dialogsData
    .map(dialog =>  <DialogItems name = {dialog.name} id={dialog.id}/>)

    let messageData = [
        {id:1, message: "Hello"},
        {id:2, message: "How are you"},
        {id:3, message: "How old are you"},
        {id:4,   message: "Wow!!!"}
    ]

    let messageElements = messageData
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
