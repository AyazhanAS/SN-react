const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE"

let initialState = {
    dialogsData: [
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
        ],
    messageData: [
        {id:1, message: "Hello"},
        {id:2, message: "How are you"},
        {id:3, message: "How old are you"},
        {id:4,   message: "Wow!!!"}
        ],
    newMessageBody: " "
}

export const messageReducer = (state = initialState, action) =>{
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY: 
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messageData.push({ id:5, message: body});
            return state;
        default:
            return state;
    }
}


export let sendMessageCreator = () =>({type: SEND_MESSAGE});

export let upDateNewMessageBodyCreator = (body) =>{
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}