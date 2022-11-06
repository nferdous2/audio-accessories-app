import { createSlice } from "@reduxjs/toolkit";




export const counterSlice = createSlice({
 
  name: "counter",
  initialState: {
    value: 0,
  },

  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
})
//redux toolkit create action atometically agains every state

export const {increment,decrement} = counterSlice.actions;

//selectors

export const selectCount = (state)=> state.counter.value;

export default counterSlice.reducer;