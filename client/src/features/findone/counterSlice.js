import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [],
    buscar: [],
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state,action) => {
            if (action.payload != undefined) {
          state.value=[
            ...state.value,
            action.payload ]    
            }         
        },
        decrement: (state, action) => {
            if (action.payload!=undefined) {
                state.buscar = [
                action.payload]  
            }
            
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer