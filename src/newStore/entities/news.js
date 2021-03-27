import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import axios from "axios";
import moment from "moment";
import { apiRequest } from '../apiActions';


const slice = createSlice({
    name: "news",
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {

        newsRequested: (news, action) => { //news = local state
            news.loading = true;
        },

        newsReceived: (news, action) => {
            news.list = action.payload;
            news.loading = false;
            news.lastFetch = Date.now();
        },

        newsRequestFailed: (news, action) => {
            news.loading = false;
        },

        cityAdded: (news, action) => {
            news.list.push(action.payload);
        },
    }
});


// Action Creators
const url = "/news";
export const loadnews = () => (dispatch, getState) => {
    const { lastFetch } = getState().entities.news;

    const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
    if (diffInMinutes < 10) return;

    return dispatch(
        apiRequest({
            url,
            onStart: newsRequested.type,
            onSuccess: newsReceived.type,
            onError: newsRequestFailed.type
        })
    );
};


export const {
    newsRequested,
    newsReceived,
    newsRequestFailed,
    cityAdded
} = slice.actions;

export default slice.reducer;
