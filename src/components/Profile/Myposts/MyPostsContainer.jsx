import { connect } from 'react-redux'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/ProfileReducer'
import Myposts from './MyPosts'


// const MypostsContainer = (props) => {
//     let state = props.store.getState()

//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator())
//     }

//     let onPostChange = (text) => {
//         let action = updateNewPostTextActionCreator(text)
//         props.store.dispatch(action)
//     }

//     return (
//         <Myposts updateNewPostText={onPostChange} addPost={addPost} posts={state.ProfilePage.PostsList} NewPostText={state.ProfilePage.NewPostText} />
//     )
// }


let MapStateToProps = (state) => {
    return {
        posts: state.ProfilePage.PostsList,
        NewPostText: state.ProfilePage.NewPostText
    }
}

let MapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MypostsContainer = connect(MapStateToProps, MapDispatchToProps)(Myposts)
export default MypostsContainer;