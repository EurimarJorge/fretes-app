import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import driverReducer from '../features/Drivers/driverSlice';

// Add this function
export const setupStore = () => {
  return configureStore({
    reducer: {
      driver: driverReducer,
      // add other reducers here
    },
  });
};

// Create the store instance
export const store = setupStore();

// Define types
export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;