export function userLogin(user){
    return {
        type:'USER_LOGIN',
        data: user
    }
}

export function saveUserData(data){
    return{
        type: 'SAVE_USER_DATA',
        data: data
    }
}

export function userLogout(){
    return {
        type: 'USER_LOGOUT'
    }
}