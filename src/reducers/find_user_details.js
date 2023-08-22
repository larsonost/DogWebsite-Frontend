import { createSlice } from "@reduxjs/toolkit";
import { findUserDetailThunk} from "../services/search-thunk";

const initialState = {
    userDetails: [],
    loading: false
}
const searchDetailSlice = createSlice({
    name: 'userDetails',
    initialState,
    extraReducers: {
        [findUserDetailThunk.pending]:
            (state) => {
                state.loading = true
                state.userDetails = [] },
        [findUserDetailThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.userDetails = payload},
        [findUserDetailThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.userDetails = action.error
            },

    },
});


export default searchDetailSlice.reducer;