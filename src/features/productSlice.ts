import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { number } from 'yup';

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

interface CreateProductPayload {
  name: string;
  cost: number;
  amountAvailable: number;
}

interface UpdateProductPayload {
  productId: number;
  body: CreateProductPayload;
}

class ThunkArg<T> {}

export const getProductList = createAsyncThunk('product/list', async () => {
  const response = axiosInstance.get(`/product`);
  return response;
});

export const deleteProduct = createAsyncThunk(
  'product/delete',
  async (deleteId: ThunkArg<{ id: number }>) => {
    const response = axiosInstance.delete(`/product/${deleteId}`);
    return response;
  }
);

export const createProduct = createAsyncThunk(
  'product/add',
  async (createProductRedBody: ThunkArg<CreateProductPayload>) => {
    const response = axiosInstance.post(`/product`, {
      ...createProductRedBody,
    });
    return response;
  }
);

export const updateProduct = createAsyncThunk(
  'product/update',
  // @ts-ignore
  async ({ productId, body }: ThunkArg<UpdateProductPayload>) => {
    const response = axiosInstance.patch(`/product/${productId}`, {
      ...body,
    });
    return response;
  }
);

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

    builder.addCase(deleteProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = state.products.filter((item) => item.id !== action.meta.arg);
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(createProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = [...state.products, action.payload.data];
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(updateProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = [...state.products, action.payload.data];
      state.products = state.products.map((item) =>
        item.id === action.payload.data.id ? { ...item, ...action.payload.data } : item
      );
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
  reducers: {},
});

export const productSelector = (state: RootState) => state.productReducer;
export default productSlice.reducer;
