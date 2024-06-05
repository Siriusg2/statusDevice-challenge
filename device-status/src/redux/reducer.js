import { GET_DEVICES, SEARCH_DEVICES, FILTER_BY_CONNECT, FILTER_BY_SOS, FILTER_BY_ID } from "./actions";

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
        case SEARCH_DEVICES:
            return {
                ...state, 
                devices: action.payload
            }
        case FILTER_BY_CONNECT:
            const filteredByConnected = state.devices.filter(device => 
                device.connected === action.payload
              );
              return {
                ...state,
                devices: filteredByConnected,
              };
        case FILTER_BY_ID:
            const filteredById = state.devices.filter(device => 
                device.id.toString().includes(action.payload)
              );
              return {
                ...state,
                devices: filteredById,
              };
        case FILTER_BY_SOS:
            const filteredBySos = state.devices.filter(device => 
                device.isSos === action.payload
              );
              return {
                ...state,
                devices: filteredBySos,
              };      
        default: 
        return {...state};
    }
}

export default rootReducer;