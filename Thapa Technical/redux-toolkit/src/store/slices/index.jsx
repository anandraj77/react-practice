import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice";
import adminSlice from "./AdminSlice";

const store = configureStore({
    reducer: {
        users: userSlice,
        admins: adminSlice,
    },
})

export default store;