import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    loggedIn : false
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        setToken : (state,value) => {
            state.token = value.payload
        },
        setLoggedIn : (state,value) => {
            state.loggedIn = true
        }
    }
})

export const {setToken,setLoggedIn} = authSlice.actions;
export default authSlice.reducer;