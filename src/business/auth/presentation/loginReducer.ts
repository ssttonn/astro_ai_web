import ApiRoutes from "@/business/shared/data/api/ApiRoutes";
import ApiService from "@/business/shared/data/api/services/ApiService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginRequest } from "../data/request/LoginRequest";
import { AuthResponse } from "../data/response/AuthResponse";

export enum LoginStatus {
  idle,
  loggingIn,
  loggedIn,
}

export interface LoginState {
  email: string;
  password: string;
  status: LoginStatus;
  error: string | null;
}

const initialState: LoginState = {
  email: "",
  password: "",
  status: LoginStatus.idle,
  error: null,
};

const onLogin = createAsyncThunk(
  "login/onLogin",
  async (payload: LoginRequest) => {
    const response = await ApiService.getInstance().post<
      AuthResponse,
      LoginRequest
    >(ApiRoutes.auth.login, payload);

    return response;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    login: (state) => {
      state.status = LoginStatus.loggingIn;
    },
    loginSuccess: (state) => {
      state.status = LoginStatus.loggedIn;
    },
    loginFailure: (state, action) => {
      state.status = LoginStatus.idle;
      state.error = action.payload;
    },
  },
});

export const { setEmail, setPassword, login, loginSuccess, loginFailure } =
  loginSlice.actions;

export { onLogin };

export default loginSlice.reducer;
