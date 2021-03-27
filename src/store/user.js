import { createSlice } from "@reduxjs/toolkit";

let slice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        userAdded: (state, action) => {
            state[action.payload.id] = action.payload
        },
        userRemoved: (state, action) => {
            delete state[action.payload]
        },
    }
})

export const { userAdded, userRemoved } = slice.actions
export default slice.reducer;