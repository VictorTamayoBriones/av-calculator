import { IUser } from "@/models/user.model";
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE: IUser = {
    id: '',
    name: "",
    password: "" 
}

export const UserSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        login: (_state, action) => {
            const user: IUser = action.payload;
            return user;
        },
        logout: () => INITIAL_STATE
        
    }
})


export const{ login, logout } = UserSlice.actions;
export default UserSlice.reducer;