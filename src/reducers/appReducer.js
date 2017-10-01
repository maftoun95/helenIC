const initialState = {
    loggedIn: false,
    userData: {},
    cogUser: {}
};

export default function appReducer(state = initialState, action){
    let tempState = Object.assign({}, state);
    switch(action.type){
        case 'USER_LOGIN':
        tempState.loggedIn = true;
        tempState.cogUser = action.data;
        return tempState;

        case 'SAVE_USER_DATA':
        let tempData = action.data.map((userAttribute) => {
            return {
                [userAttribute.Name]: userAttribute.Value,
            }
        });
        tempState.userData = tempData;
        return tempState;

        case 'USER_LOGOUT':
        tempState.loggedIn = false;
        tempState.cogUser.signOut();
        tempState.cogUser = null;
        return tempState;

        default:
        return state;
    }
}