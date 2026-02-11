import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./features/SearchSlice";


export const store = configureStore({
  reducer: {
    counter:counterSlice ,
  },
})