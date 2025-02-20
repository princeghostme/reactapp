import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Token } from "../../Interfaces/UserDetail";
import { jwtDecode } from "jwt-decode";

interface initialValueProp{
    val:string;
    token:Token;
}

const initialValue:initialValueProp = {
    val: "",
    token:{
        created: new Date().toDateString(),
        exp: new Date().toDateString(),
        accessToken: {
            firstName: "Guest",
            middleName: "",
            lastName: "",
            fullName: "Guest",
            age: 0,
            gender: "",
            mobile: "",
            email: "",
            dob: new Date().toDateString(),
            profilePic: "",
            address: "",
            roles: []
        }
    }
}

const tokenSlice = createSlice({
    name:"token",
    initialState:initialValue,
    reducers : {
        GetUser : (state)=>{
            if(state.val){
                state.token = jwtDecode(state.val);
            }
        },
        SetUser: (state, action:PayloadAction<string>)=>{
            state.val = action.payload;
        },

    }
})

export const{GetUser,SetUser} = tokenSlice.actions;

export default tokenSlice.reducer;