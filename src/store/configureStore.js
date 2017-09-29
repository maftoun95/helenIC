import {createStore, applyMiddleware} from 'redux';
import appReducer from '../reducers/appReducer.js';

export default function configureStore(){
    return createStore(appReducer);
};