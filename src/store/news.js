

let newsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NEWS':
            return state.push(action.payload);
        case 'error':
            return console.log(action.payload);
        default:
            return state;
    }
}

export default newsReducer;