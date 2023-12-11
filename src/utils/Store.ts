import { configureStore } from '@reduxjs/toolkit';

import orderReducer from '../features/orderSlice';
import productReducer from '../features/productSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    userReducer,
    productReducer,
    orderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [
          'user/login/fulfilled',
          'user/register/fulfilled',
          'product/list/fulfilled',
          'user/withdraw/fulfilled',
          'user/deposit/fulfilled',
          'order/fulfilled',
          'user/logout/fulfilled',
          'product/delete/fulfilled',
          'product/add/fulfilled',
          'product/update/fulfilled',
        ],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
