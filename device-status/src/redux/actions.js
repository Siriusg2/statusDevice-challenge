import devicesData from "../Data/devicesData.ts"
export const GET_DEVICES = "GET_DEVICES";

export function getDevices () {
    return async function(dispatch) {
        try {
            const apiDevices = await devicesData.getDevices();
            return dispatch({type: GET_DEVICES, payload: apiDevices})
        } catch (error) {
            alert((error) => error.message)
        }

    }
}