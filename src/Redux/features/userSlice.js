import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    }
})


export const selectUser = state => state.user.user

export default userSlice.reducer