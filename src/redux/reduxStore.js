import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux"
import MessageReducer from "./MessageReducer"
import ProfileReducer from "./ProfileReducer"
import SidebarReducer from "./SidebarReducer"
import UsersReducer from "./UsersReducer"
import AuthReducer from "./AuthReducer"
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from "redux-form"

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    MessagesPage: MessageReducer,
    sidebar: SidebarReducer,
    usersPage: UsersReducer,
    Auth: AuthReducer,
    form: formReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store