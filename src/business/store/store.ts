import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../auth/presentation/loginReducer";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  }, // Start with an empty reducer
});

export type AppStore = typeof store;
export type RootState = Record<string, typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
