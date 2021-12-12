import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';
import { configureStore } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState :{
    customers:"letancuong"
  }
  // reducers: {
  //   customers:(state)=>{
  //     state.value=state;
  //   },
  //   increment: (state) => {
  //     state.value += 1;
  //   },
  //   decrement: (state) => {
  //     state.value -= 1;
  //   },
  //   incrementByAmount: (state, action) => {
  //     state.value += action.payload;
  //   },
  // },
});
const counterReducer=counterSlice.reducer;
const store=configureStore({
  reducer: {
    counterReducer,
  }
})
// export const { increment, decrement, incrementByAmount,customers } = counterSlice.actions;

// export const selectCount = (state) => state.counter.value;

// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };
export const customers=state=>state.counterReducer.customers;
export default store;


