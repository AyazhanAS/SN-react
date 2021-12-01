
import { connect } from 'react-redux';
import { sendMessageCreator} from '../../redux/message-reducer'

import Dialogs from "./Dialogs"
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



let mapStateToProps = (state)=>{
    
    return {
        messagePage: state.messagePage
        
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        sendMessage: (newMessageBody)=>{
            
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}



 export default compose(
     connect(mapStateToProps, mapDispatchToProps),
     withAuthRedirect
 )(Dialogs)
