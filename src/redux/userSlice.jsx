import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        otherUsers: null,
        profile: null
    },
    reducers: {
        //multiple slice
        getUser: (state, action) => {
            state.user = action.payload
        },
        getOtherUsers: (state, action) => {
            state.otherUsers = action.payload;
        },
        getProfile: (state, action) => {
            state.profile = action.payload;
        },
        followUpdate: (state, action) => {
            const userId = action.payload;

            // Check if the user is already following
            const isFollowing = state.user.following.includes(userId);

            if (isFollowing) {
                // If user is already following, unfollow
                state.user.following = state.user.following.filter(itemId => itemId !== userId);
            } else {
                // If user is not following, follow
                state.user.following.push(userId);
            }
        }
    }
})

export const { getUser, getOtherUsers, getProfile, followUpdate } = userSlice.actions;
export default userSlice.reducer