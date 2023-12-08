import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserRole } from '../models/UserRoles';
import axiosInstance from '../utils/AxiosInstance';
import { RootState } from '../utils/Store';
export interface User {
  id: number;
  username: string;
  role: UserRole;
  deposit: number;
  change?: number[];
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

interface RegisterUserPayload {
  username: string;
  password: string;
  role: UserRole;
  change?: number[];
}

interface UserDepositPayload {
  deposit: number;
}

class ThunkArg<T> {}

export const loginUser = createAsyncThunk(
  'user/login',
  async (loginReqData: ThunkArg<LoginUserPayload>) => {
    const response = axiosInstance.post(`/user/auth`, {
      ...loginReqData,
    });
    return response;
  }
);

export const registerUser = createAsyncThunk(
  'user/register',
  async (registerReqData: ThunkArg<RegisterUserPayload>) => {
    const response = axiosInstance.post(`/user/signup`, {
      ...registerReqData,
    });
    return response;
  }
);

export const addUserDeposit = createAsyncThunk(
  'user/deposit',
  async (depositReqData: ThunkArg<UserDepositPayload>) => {
    const response = axiosInstance.patch(`/user/deposit`, {
      deposit: depositReqData,
    });
    return response;
  }
);

export const withdrawBalance = createAsyncThunk('user/withdraw', async () => {
  const response = axiosInstance.patch(`/user/resetbalance`);
  return response;
});

export const logoutUser = createAsyncThunk('user/logout', async () => {
  const response = axiosInstance.post(`/user/signout`);
  return response;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.data;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.data;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(logoutUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = null;
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(addUserDeposit.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addUserDeposit.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.data;
    });
    builder.addCase(addUserDeposit.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(withdrawBalance.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(withdrawBalance.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.data;
    });
    builder.addCase(withdrawBalance.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
  reducers: {},
});

export const userSelector = (state: RootState) => state.userReducer;
export default userSlice.reducer;
