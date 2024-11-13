import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions";

const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        addUser(state, action){
            state.push(action.payload)
        },
        deleteUser(state, action){
            state.splice(action.payload, 1)
        },
        // clearAllUser(state, action){
        //     return []
        //     // state.splice(0,)  or this
        // }
    },
    extraReducers(builder){
        builder.addCase(clearAllUsers, () =>{
            return []
        })
    }
})


export default userSlice.reducer

export const {addUser, deleteUser} = userSlice.actions