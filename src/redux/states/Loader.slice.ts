import { ILoader } from "@/models/loader.model";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE: ILoader = {
    isLoading: false
}

const LoaderSlice = createSlice({
    name: "Loader",
    initialState: INITIAL_STATE,
    reducers: {
        showLoader: (state) => {
            state.isLoading = true
        },
        hideLoader: (state) => {
            state.isLoading = false
        }
    }
})

export const { showLoader, hideLoader } = LoaderSlice.actions
export default LoaderSlice.reducer