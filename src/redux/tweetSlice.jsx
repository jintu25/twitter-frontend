import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
    name: "tweet",
    initialState: {
        tweets: null,
        refresh: false,
        isActive: true
    },
    reducers: {
        //multiple slice
        getTweets: (state, action) => {
            state.tweets = action.payload
        },
        getRefresh: (state) => {
            state.refresh = !state.refresh
        },
        getIsActive: (state, action) => {
            state.isActive = action.payload
        }

    }
})

export const { getTweets, getRefresh, getIsActive } = tweetSlice.actions;
export default tweetSlice.reducer