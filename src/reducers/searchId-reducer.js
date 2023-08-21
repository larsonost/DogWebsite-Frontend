import { createSlice } from "@reduxjs/toolkit";
import { findDetailThunk } from "../services/search-thunk";

const initialState = {
    placesDetails: [],
    loading: false
}
const searchDetailSlice = createSlice({
    name: 'placesDetails',
    initialState,
    extraReducers: {
        [findDetailThunk.pending]:
            (state) => {
                state.loading = true
                state.placesDetails = [] },
        [findDetailThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.placesDetails = payload},
        [findDetailThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.placesDetails = action.error
            },

    },
});


export default searchDetailSlice.reducer;