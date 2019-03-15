const INITIAL_STATE = {id : 0, username: "", error : "", loading : false, role: ""}

export default (state=INITIAL_STATE, action) => 

{
    if(action.type === 'LOGIN_SUCCESS') {
        return {...INITIAL_STATE,username : action.payload.username, role: action.payload.role, id: action.payload.id}
    } else if (action.type === 'LOADING'){
        return {...INITIAL_STATE , loading : true}
    } else if (action.type === 'USER_NOT_FOUND') {
        return {...INITIAL_STATE , error : 'username atau password salah'}
    } else if (action.type === 'SYSTEM_ERROR') {
        return {...INITIAL_STATE , error : 'Server down, silahkan coba lagi dilain waktu'}
    } else if (action.type === 'RESET_USER') {
        return INITIAL_STATE
    } else if (action.type === 'USERNAME_NOT_AVAILABLE') {
        return {...INITIAL_STATE, error : 'username not available'}
    } else {
        return state
    }

    // kalau menggunakan switch case
    // switch(action.type){
    //     case 'LOGIN_SUCCESS' :
    //         return {...INITIAL_STATE,username : action.payload.username, role: action.payload.role}
    //     case 'LOADING' :
    //         return {...INITIAL_STATE , loading : true}
    //      default : 
    //           return state
    // }
}