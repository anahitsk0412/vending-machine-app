import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserRole } from '../models/UserRoles';
import axiosInstance from '../utils/AxiosInstance';
import { RootState } from '../utils/Store';
export interface User {
  id: number;
  username: string;
  role: UserRole;
  deposit: number;
}
export interface UserState {
  loading: boolean;
  user: User | null;
  error: string | undefined;
}

const initialState: UserState = {
  loading: false,
  user: null,
  error: undefined,
};

interface LoginUserPayload {
  username: string;
  password: string;
}

class ThunkArg<T> {}

export const loginUser = createAsyncThunk(
  'user/login',
  async (loginReqData: ThunkArg<LoginUserPayload>) => {
    const response = axiosInstance.post(
      `/user/auth`,
      {
        ...loginReqData,
      },
      { headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' } }
    );
    return response;
  }
);
const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
      // @ts-ignore
      // state.user = [...state.qAs, { question: action.meta.arg['question'] }];
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.data;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
  reducers: {},
});

export const userSelector = (state: RootState) => state.userReducer;
export default userSlice.reducer;
