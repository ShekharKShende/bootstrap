const initialState = {
    status: {
        isLoggedIn: "false"
    },
    candidates: []
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
        case 'getData':

        return {
            ...state,
            candidates:action.payload
        }
        case 'delete':
            return {
                ...state,
                candidates: action.payload
            }
        case 'add':
            return {
                ...state,
                candidates:action.payload
            }

        default:
            return {
            ...state
        }
    }
}

export default login;
