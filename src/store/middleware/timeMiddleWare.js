

let timeMiddleWare = ({ dispatch, getState }) => next => action => {
    if (action.type == 'error')
        alert(action.payload);
    else {
        next(action)
    }
}

export default timeMiddleWare;