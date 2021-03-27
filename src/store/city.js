import { createSlice } from "@reduxjs/toolkit";


let api = [
    {
        id: 1,
        name: 'cairo'
    },
    {
        id: 2,
        name: 'alex'
    }
]

// //as async action
// export let cityAdded = (action, dispatch, getState) => {
//     // virtual api 
//     let city = api.find(e => e.id == action);
//     // dispatching actions based on result
//     city ?
//         dispatch(cityAddedFullFilled(city))
//         // : dispatch(cityAddedRejected('Error message here ...'))
//         : dispatch({ type: 'error', payload: 'there is an error occured' })
// }

//as async action
export let cityAdded = action => (dispatch, getState) => {
    // virtual api 
    let city = api.find(e => e.id == action);
    // dispatching actions based on result
    city ?
        dispatch(cityAddedFullFilled(city))
        // : dispatch(cityAddedRejected('Error message here ...'))
        : dispatch({ type: 'error', payload: 'there is an error occured' })
}



let slice = createSlice({
    name: 'cities',
    initialState: [],
    reducers: {
        //action =>action handler
        cityAddedFullFilled: (state, action) => {
            state.push(action.payload);
            // state[action.payload.id] = action.payload
        },
        //action =>action handler
        cityAddedRejected: (state, action) => {
            // state.push(action.payload);
            console.log(`Error : ${action.payload}`);
            // state[action.payload.id] = action.payload
        },



        cityRemoved: (state, action) => {
            // let obj = { ...state[action.payload.id] };
            let obj = state.find(e => e.id == action.payload.id);
            console.log(obj);
            obj.removed = 'deleted'
            // state[action.payload.id] = obj
        },
    }
})

export const getCities = (state) => state.entities.cities.filter(e => e.removed === 'deleted')

export const { cityRemoved, cityAddedRejected, cityAddedFullFilled } = slice.actions;
export default slice.reducer;