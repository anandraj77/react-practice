import { createSlice } from "@reduxjs/toolkit";
import { clearAllAdmins } from "../actions";

const adminSlice = createSlice({
    name: "admins",
    initialState: [],
    reducers: {
        addAdmin(state, action){
            state.push(action.payload)
        },
        deleteAdmin(state, action){
            state.splice(action.payload, 1)
        },
    },
    extraReducers(builder){
        builder.addCase(clearAllAdmins, () =>{
            return []
        })
    }

})

export default adminSlice.reducer

export const {addAdmin, deleteAdmin} = adminSlice.actions