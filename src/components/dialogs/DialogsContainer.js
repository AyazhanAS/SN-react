import React from 'react'
import { sendMessageCreator, upDateNewMessageBodyCreator } from '../../redux/message-reducer'
import StoreContext from '../../StoreContext';
import Dialogs from "./Dialogs"


export default function DialogsContainer() {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().messagePage;
 
                let onNewMessageChange = (body)=>{
                   store.dispatch(upDateNewMessageBodyCreator(body))
    }

                let onSendMessageClick = ()=>{
                store.dispatch(sendMessageCreator())
          }

                return <Dialogs sendMessage={onSendMessageClick}
                messagePage = {state}
                upDateNewMessageBody={onNewMessageChange}/>
    
            }
        }
            
         </StoreContext.Consumer>
    )
}
