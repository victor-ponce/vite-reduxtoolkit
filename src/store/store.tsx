import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";


export const store = configureStore({
  reducer: {
    user: authSlice
// you can add more reducers 
},
})






export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch    
