import getDevices from "../Data/devicesData.ts"
export const GET_DEVICES = "GET_DEVICES";

export function getApiDevices () {
    return async function(dispatch) {
        try {
            const apiDevices =  getDevices();
            return dispatch({type: GET_DEVICES, payload: apiDevices})
        } catch (error) {
            alert((error) => error.message)
        }
    }
}