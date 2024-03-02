import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name : 'counter',
    initialState : {
      count:  null
    },
    reducers : {
        increment : (state)=> {
            state.count += 1
        },
        decrement : (state)=> {
            state.count -= 1
        }
    }

})

export const {increment, decrement} = counterSlice.actions
// export const selectCount = (state)=> state.counter.value
export default counterSlice.reducer