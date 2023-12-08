import { configureStore } from '@reduxjs/toolkit';

import productReducer from '../features/productSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    userReducer,
    productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [
          'user/login/fulfilled',
          'user/register/fulfilled',
          'product/list/fulfilled',
        ],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
