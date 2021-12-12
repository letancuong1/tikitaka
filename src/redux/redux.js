import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState :{
    customers:[],
    orther:[],
    details:[]
  },
  reducers:{
    userInformation:(state,action)=>{
      state.customers=action.payload
    },
    ortherInformation:(state,action)=>{
      state.orther=action.payload
    },
    AddortherInformation:(state,action)=>{
      state.orther.unshift(action.payload)
    },
    detailsInformation:(state,action)=>{
      state.details=action.payload
    }
  }
})
const counterReducer=counterSlice.reducer;
const store=configureStore({
  reducer: {
    counterReducer,
  }
})
export const {userInformation}=counterSlice.actions;
export const customers=state=>state.counterReducer.customers;
export const {ortherInformation}=counterSlice.actions;
export const {AddortherInformation}=counterSlice.actions;
export const orther=state=>state.counterReducer.orther;
export const {detailsInformation}=counterSlice.actions;
export const details=state=>state.counterReducer.details;
export default store;