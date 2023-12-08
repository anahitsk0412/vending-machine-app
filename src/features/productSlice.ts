import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import axiosInstance from '../utils/AxiosInstance';
import { RootState } from '../utils/Store';
export interface Product {
  id: number;
  name: string;
  cost: number;
  amountAvailable: number;
  sellerId: number;
}
export interface ProductState {
  loading: boolean;
  products: Product[] | [];
  selectedProduct: Product | null;
  error: string | undefined;
}

const initialState: ProductState = {
  loading: false,
  products: [],
  selectedProduct: null,
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

    // builder.addCase(registerUser.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(registerUser.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.user = action.payload.data;
    // });
    // builder.addCase(registerUser.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message;
    // });
  },
  reducers: {
    selectProduct: (state, action: PayloadAction<Product>) => {
      state.selectedProduct = action.payload;
    },
    deselectProduct: (state) => {
      state.selectedProduct = null;
    },
  },
});

export const { selectProduct, deselectProduct } = productSlice.actions;

export const productSelector = (state: RootState) => state.productReducer;
export default productSlice.reducer;
