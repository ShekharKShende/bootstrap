const initialState = {
    status: {
        isLoggedIn: "false"
    }
}


const login = (state = initialState, action) => {
    switch(action.type){
        case 'isLoggedIn' :
        return {
            ...state,
            status: {
                ...state,
                isLoggedIn: action.payload
            }
        }
        default:
            return {
            ...state
        }
    }
}

export default login;
