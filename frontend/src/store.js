import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {userLoginReducers,userRegisterReducers} from './reducers/userReducers'
import {  postDetailReducers,postListReducers,listCommentsReducers} from './reducers/postReducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'root',
    storage,
  }



const reducer = combineReducers({
    userLogin:userLoginReducers,
    userRegister:userRegisterReducers,
    postList:postListReducers,
    postDetails:postDetailReducers,
    //postComment:postCommentReducer,
    commentList:listCommentsReducers
})

const persistedReducer = persistReducer(persistConfig, reducer)


const middleware=[thunk];



const initialState={}


const store=createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export const persistor=persistStore(store)
export default store
