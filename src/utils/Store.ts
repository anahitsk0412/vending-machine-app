import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['user/login/fulfilled'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
