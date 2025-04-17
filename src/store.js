import { configureStore } from "@reduxjs/toolkit";
import userDetail from './slices/userDetailsSlice'


export const store = configureStore(
    {
        reducer: {
            user: userDetail
        },
    }
);
