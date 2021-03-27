
export let addCountry = (payload) => {
    return ({
        type: 'ADD_COUNTRY',
        payload
    })
}

let countriesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COUNTRY':
            return state.push(action.payload);
        default:
            return state;
    }
}

export default countriesReducer;