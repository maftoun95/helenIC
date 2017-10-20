const initialState = {
    loggedIn: false,
    userData: {},
    cogUser: {}
};

export default function userReducer(state = initialState, action) {
    let tempState = Object.assign({}, state);
    switch (action.type) {
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
            tempState.userData = {};
            tempState.cogUser.signOut();
            tempState.cogUser = {};
            return tempState;
        case 'SIGNED_IN_USER_DATA_SUCCESS':
            return {
                ...state,
                userData: action.data
            }
        default:
            return state;
    }
}