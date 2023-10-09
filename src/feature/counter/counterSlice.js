import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    count:0,   
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment :(state)=>{
            state.count += 1;
        },
        decreament: (state)=>{
            state.count -= 1;
        }

    }
});

export const {increment,decreament} = counterSlice.actions;
export default counterSlice.reducer;
