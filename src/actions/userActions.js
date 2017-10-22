/* USERLOGIN ACTION*/
export function userLogin(user) {
    return {
        type: 'USER_LOGIN',
        data: user
    }
}

export function saveUserData(data) {
    return {
        type: 'SAVE_USER_DATA',
        data: data
    }
}

export function userLogout() {
    return {
        type: 'USER_LOGOUT'
    }
}
const SIGNED_IN_USER_DATA_SUCCESS = 'SIGNED_IN_USER_DATA_SUCCESS'
export function signedInUserDataSuccess(data) {
    return {
        type: SIGNED_IN_USER_DATA_SUCCESS,
        data
    }
}