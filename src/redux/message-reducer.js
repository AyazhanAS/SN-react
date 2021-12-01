
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
}


export const messageReducer = (state = initialState, action) =>{
    switch(action.type){
    
           
        
        case SEND_MESSAGE:{
            let body = action.newMessageBody;
            return{
                ...state,
                messageData: [...state.messageData, { id:5, message: body} ]
            };
        
        }
        default:
            return state;
    }
}


export let sendMessageCreator = (newMessageBody) =>({type: SEND_MESSAGE, newMessageBody});

