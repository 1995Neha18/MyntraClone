import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk from 'redux-thunk';
import mReducer from './mReducer/mReducer';
import wReducer from './mReducer/wReducer';
import { authReducer } from './Authentication/authReducer';


const rootReducer=combineReducers({
   mReducer,
   wReducer,
   authReducer
});

const store=legacy_createStore(rootReducer,applyMiddleware(thunk));

export default store;