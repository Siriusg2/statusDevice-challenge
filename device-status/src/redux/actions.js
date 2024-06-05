import getDevices from '../Data/devicesData.ts'
export const GET_DEVICES = 'GET_DEVICES'
export const SEARCH_DEVICES = 'SEARCH_DEVICES'
export const FILTER_BY_CONNECT = 'FILTER_BY_CONNECT'
export const FILTER_BY_SOS = 'FILTER_BY_SOS'
export const FILTER_BY_ID = 'FILTER_BY_ID'
export const RESET_FILTER = 'RESET_FILTER'

export function getApiDevices() {
  return function (dispatch) {
    try {
      const apiDevices = getDevices()
      return dispatch({ type: GET_DEVICES, payload: apiDevices })
    } catch (error) {
      alert((error) => error.message)
    }
  }
}

export function searchDevices(searchParams) {
  return function (dispatch) {
    try {
      const apiDevices = getDevices()
      const filteredDevices = apiDevices.filter(
        (device) =>
          device.name.toLowerCase().includes(searchParams.toLowerCase()) ||
          device.id.toString().includes(searchParams) ||
          device.owner.toLowerCase().includes(searchParams.toLowerCase()),
      )
      console.log(searchParams)
      return dispatch({ type: SEARCH_DEVICES, payload: filteredDevices })
    } catch (error) {
      alert((error) => error.message)
    }
  }
}

export function filterByConnect(payload) {
  return {
    type: FILTER_BY_CONNECT,
    payload,
  }
}

export function filterBySos(payload) {
  return {
    type: FILTER_BY_SOS,
    payload,
  }
}

export function filterByID(payload) {
  return {
    type: FILTER_BY_ID,
    payload,
  }
}

export function resetFilter() {
  return {
    type: RESET_FILTER,
  }
}
