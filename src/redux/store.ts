import { IUser } from "@/models/user.model";
import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./states/User.slice";
import { ILoader } from "@/models/loader.model";
import LoaderSlice from "./states/Loader.slice";

export interface AppStore{
    user: IUser,
    loader: ILoader
}

export default configureStore({
    reducer: {
        user: UserSlice,
        loader: LoaderSlice
    },
})