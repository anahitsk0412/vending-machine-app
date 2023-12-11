import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from '../models/Product';
import axiosInstance from '../utils/AxiosInstance';
import { RootState } from '../utils/Store';
export interface ProductState {
  loading: boolean;
  products: Product[] | [];
  error: string | undefined;
}

const initialState: ProductState = {
  loading: false,
  products: [],
  error: undefined,
};

class ThunkArg<T> {}

export const getProductList = createAsyncThunk('product/list', async () => {
  const response = axiosInstance.get(`/product`);
  return response;
});

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProductList.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProductList.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.data;
    });
    builder.addCase(getProductList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
  reducers: {},
});

export const productSelector = (state: RootState) => state.productReducer;
export default productSlice.reducer;
