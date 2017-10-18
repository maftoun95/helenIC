import { createStore, applyMiddleware, compose } from 'redux';
import appReducer from '../reducers/appReducer.js';

// connecting to google extension for redux dev tools
// Redux Dev Tools --> https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
// allows to step through action. 
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
)

export default function configureStore() {
    return createStore(appReducer, enhancers);
};