import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';

// connecting to google extension for redux dev tools
// Redux Dev Tools --> https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
// allows to step through action. 

// APIs go here


const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
)

export default function configureStore() {
    return createStore(rootReducer, enhancers);
};