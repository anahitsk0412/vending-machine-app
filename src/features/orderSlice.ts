import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import axiosInstance from '../utils/AxiosInstance';
import { RootState } from '../utils/Store';
export interface Order {
  productId: number;
  quantity: number;
  price: number | string;
  buyerId: number;
  sellerId: number;
  id: number;
  createdAt: string;
}
export interface UserState {
  loading: boolean;
  order: Order | null;
  error: string | undefined;
}

const initialState: UserState = {
  loading: false,
  order: null,
  error: undefined,
};

interface OrderPayload {
  productId: number;
  quantity: number;
}

interface OrderPayload {
  productId: number;
  quantity: number;
}

class ThunkArg<T> {}

export const createOrder = createAsyncThunk(
  'order',
  async (orderReqData: ThunkArg<OrderPayload>) => {
    const response = axiosInstance.post(`/order`, {
      ...orderReqData,
    });
    return response;
  }
);
const orderSlice = createSlice({
  name: 'order',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createOrder.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.order = action.payload.data;
    });
    builder.addCase(createOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
  reducers: {},
});

export const orderSelector = (state: RootState) => state.orderReducer;
export default orderSlice.reducer;