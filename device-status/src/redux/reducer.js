import {
  GET_DEVICES,
  SEARCH_DEVICES,
  FILTER_BY_CONNECT,
  FILTER_BY_SOS,
  FILTER_BY_ID,
  RESET_FILTER,
} from './actions'

const initialState = {
  devices: [],
  allDevices: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEVICES:
      return {
        ...state,
        devices: action.payload,
        allDevices: action.payload,
      }
    case SEARCH_DEVICES:
      return {
        ...state,
        devices: action.payload,
      }
    case FILTER_BY_CONNECT:
      const filteredByConnected = state.devices.filter(
        (device) => device.connected === action.payload,
      )
      return {
        ...state,
        devices: filteredByConnected,
      }
    case FILTER_BY_ID:
      const idFilter = action.payload
      const filteredById =
        idFilter === 'all'
          ? state.allDevices // Si el filtro es 'all', mostrar todos los dispositivos
          : state.allDevices.filter(
              (device) => device.id === parseInt(idFilter),
            )

      return {
        ...state,
        devices: filteredById,
      }
    case FILTER_BY_SOS:
      const allDevices = [...state.devices]
      const sosFilter = action.payload === 'all' ? null : action.payload
      const sosFiltered =
        sosFilter === null
          ? allDevices
          : allDevices.filter((dev) => dev.isSos === sosFilter)
      return { ...state, devices: sosFiltered }

    case RESET_FILTER:
      return { ...state, devices: [...state.allDevices] }

    default:
      return { ...state }
  }
}

export default rootReducer
