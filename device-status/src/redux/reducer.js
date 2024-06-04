import { GET_DEVICES } from "./actions";

const initialState = {
    devices : [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DEVICES:
            return {
                ...state,
                devices: action.payload,
            }
        
        default: 
        return {...state};
    }
}

export default rootReducer;