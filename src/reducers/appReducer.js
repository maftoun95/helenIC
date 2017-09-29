const initialState = {
    loggedIn: false,
    userData: {}
};

export default function appReducer(state = initialState, action){
    let tempState = Object.assign({}, state);
    switch(action.type){
        case 'USER_LOGIN':
        tempState.loggedIn = true;
        
        return tempState;

        default:
        return state
    }
}