import { profileAPI, usersAPI } from "../API/API"

const ADD_POST = 'ADD-POST'

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const SET_USER_PROFILE = 'SET_USER_PROFILE'

const SET_STATUS = 'SET_STATUS'


let initialState = {
    PostsList: [
        { id: 1, post: 'Я читаю книги и работаю в космошопе)', likesCount: 23 },
        { id: 2, post: 'Я работаю официантом в ресторане, люблю чипсы', likesCount: 11 },
        { id: 2, post: 'Был в Москве, пытался устроиться на работу сушистом или кальянщиком', likesCount: 50 },
        { id: 2, post: 'Играю в доту 24/7, брал несколько Всерос. туриков', likesCount: 118 },
    ],
    NewPostText: 'Eternity',
    profile: null,
    status: ''
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                post: state.NewPostText,
                likesCount: 0
            };
            return {
                ...state,
                PostsList: [...state.PostsList, newPost],
                NewPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                NewPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultcode === 0) {
                dispatch(setStatus(status))
            }
        })
}

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default ProfileReducer