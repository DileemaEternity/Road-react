import { connect } from 'react-redux'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/MessageReducer'
import Dialogs from './Dialogs'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { compose } from 'redux'


// const DialogsContainer = (props) => {

//     let state = props.store.getState().MessagesPage

//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator())
//     }

//     let onNewMessageChange = (body) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     }

//     return (
//         <Dialogs sendMessage={onSendMessageClick} updateNewMessageBody={onNewMessageChange} MessagesPage={state} />
//     )
// }



let mapStateToProps = (state) => {
    return {
        MessagesPage: state.MessagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => { dispatch(sendMessageCreator()) },
        updateNewMessageBody: (body) => { dispatch(updateNewMessageBodyCreator(body)) }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);