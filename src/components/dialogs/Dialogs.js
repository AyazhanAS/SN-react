import React  from 'react';

import DialogItems from './dialogItems/DialogItems'
import s from "./Dialogs.module.css"
import Messages from './messages/Messages'

import {reduxForm, Field} from 'redux-form';
import { TextArea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, requiredField } from '../../utils/validations/validators';

  
const maxLength50 = maxLengthCreator(50)

export default function Dialogs(props) {

    let state = props.messagePage;


    const addNewMessage = (e)=>{
        props.sendMessage(e.newMessageBody)
    }

    let dialogsElements = state.dialogsData
    .map(dialog =>  <DialogItems name = {dialog.name} id={dialog.id} key = {dialog.id}/>)

  
    let messageElements = state.messageData
    .map(messageElem => <Messages message={messageElem.message} key = {messageElem.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
              {dialogsElements}
            </div>
            <div className={s.mesaages}>
                <div>{messageElements}</div>
                <AddMessageFormRedux onSubmit = {addNewMessage}/>
              
         
            </div>
        </div>
    )
}


const AddMessageForm =(props)=>{



    return(
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newMessageBody" component={TextArea} validate={[requiredField,maxLength50]} placeholder="enter word" />
        </div>
        <div>
           <button>Enter</button>
        </div>
    </form>
    )
}

const AddMessageFormRedux = reduxForm({form:"addMessageForm"})(AddMessageForm)
