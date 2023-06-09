import { IUser } from "@/models/user.model";
import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./states/User.slice";

export interface AppStore{
    user: IUser
}

export default configureStore({
    reducer: {
        user: UserSlice
    },
})