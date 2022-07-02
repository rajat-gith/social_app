import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {userLoginReducers,userRegisterReducers} from './reducers/userReducers'
import { postDetailReducers,postListReducers } from './reducers/postReducers'

const reducer = combineReducers({
    userLogin:userLoginReducers,
    userRegister:userRegisterReducers,
    postList:postListReducers,
    postDetails:postDetailReducers
})
const middleware=[thunk];

const userInfoFromStorage = localStorage.getItem('userInfo') ?
  JSON.parse(localStorage.getItem('userInfo')) : null

const initialState={
    userLogin: { userInfo: userInfoFromStorage },
}


const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
