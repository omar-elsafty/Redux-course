import axios from "axios";

let api = ({ dispatch }) => next => async action => {
    if (action.type !== 'apiRequest') return next(action);

    // this is to show the api call action on redux devTool 
    next(action);

    const { url, method, data, onSccess, onError } = action.payload;
    try {
        const response = await axios.request({
            baseURL: 'https://localhost:44333/api',
            url,
            method,
            data,
        });
        dispatch({ type: onSccess, payload: response.data });
    } catch (error) {
        dispatch({ type: onError, payload: error });
    }
}

export default api;
