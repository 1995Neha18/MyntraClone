import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk from 'redux-thunk';
import mReducer from './mReducer/mReducer';

const rootReducer=combineReducers({
   mReducer
});

const store=legacy_createStore(rootReducer,applyMiddleware(thunk));

export default store;