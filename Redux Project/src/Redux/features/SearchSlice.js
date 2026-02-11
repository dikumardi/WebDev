import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
}

export const MediaSlice = createSlice({
      name : 'counter',
       initialState,
       reducers:{
        increment:(state)=>{
           state.value += 1
        },
        decrement:(state)=>{
             state.value -= 1
        },
        incrementByAmount:(state,actions)=>{
             state.value += actions.payload
        },
       }
})

export  const  {increment,decrement,incrementByAmount} = MediaSlice.actions
export default MediaSlice.reducer