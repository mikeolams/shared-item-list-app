const initState ={
    authError: null
};

export const authReducer = (state=initState, action)=>{
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('Login failed');
            return {
             ...state,
                authError: 'Login failed'
            };
        case 'LOGIN_SUCCESS':
            console.log('Login success');
            return{
                ...state,
                authError: null
            };
        case 'SIGNOUT_SUCCESS':
            console.log('signout success')
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return {
                ...state,
                    authError: null
                }
        case 'SIGNUP_ERROR':
            console.log('signup failed')
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}