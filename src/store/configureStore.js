import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

// connecting to google extension for redux dev tools
// Redux Dev Tools --> https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
// allows to step through action. 

// APIs go here
// import userData from './../data/sample';

export default function configureStore() {
    return createStore(rootReducer, {}, compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
};
