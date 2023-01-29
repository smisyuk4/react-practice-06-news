import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "./operations";

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        items:[],
        isLoading: false,
        error: null,
    }, 
    extraReducers: {
        [fetchNews.pending] (state)  {
            state.isLoading = true;
        },
        [fetchNews.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload
        },
        [fetchNews.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },       
    },
});

export const newsReducer = newsSlice.reducer;