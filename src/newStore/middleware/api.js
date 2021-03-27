import axios from "axios";
import * as actions from "../apiActions";

const api = ({ dispatch }) => next => async action => {
    if (action.type !== actions.apiRequest.type) return next(action);
    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    if (onStart) dispatch({ type: onStart });
    // this only to show the original action in redux devTool
    // action that contain the upper data 
    next(action);
    try {
        const response = await axios.request({
            baseURL: "https://localhost:44333/api", // url from config file
            url,
            method,
            data
        });
        // General
        dispatch(actions.apiCallSuccess(response.data));
        // Specific
        if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
        // General
        dispatch(actions.apiCallFailed(error.message));
        // Specific
        if (onError) dispatch({ type: onError, payload: error.message });
    }
}

export default api;