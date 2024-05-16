import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./Slices/TaskSlice";

export const store = configureStore({
    reducer:{
        task:taskSlice.reducer,
    },
});