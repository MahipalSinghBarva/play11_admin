import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import baseURL from "../baseURL"
const baseURL = "http://localhost:8080";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: {},
    allUser: [],
    singleUser: {},
    isAuthenticated: false,
    error: null,
    message: null,
    passwordUpdated: null,
    success: null,
  },
  reducers: {
    loginRequest(state, action) {
      (state.loading = true),
        (state.isAuthenticated = false),
        (state.user = {}),
        (state.error = null);
    },
    loginSuccess(state, action) {
      (state.loading = false),
        (state.isAuthenticated = true),
        (state.user = action.payload),
        (state.error = null);
      state.message = action.payload.message;
    },
    loginFail(state, action) {
      (state.loading = false),
        (state.isAuthenticated = false),
        (state.user = {}),
        (state.error = action.payload),
        (state.message = action.payload.message);
    },
    getAllUserRequest(state, action) {
      (state.loading = true),
        (state.isAuthenticated = false),
        (state.allUser = {}),
        (state.error = null);
    },
    getAllUserSuccess(state, action) {
      (state.loading = false),
        (state.isAuthenticated = true),
        (state.allUser = action.payload.user),
        (state.error = null);
      state.message = action.payload.message;
    },
    getAllUserFail(state, action) {
      (state.loading = false),
        (state.isAuthenticated = false),
        (state.allUser = {}),
        (state.error = action.payload),
        (state.message = action.payload.message);
    },
    getSingleUserRequest(state, action) {
      (state.loading = true),
        (state.isAuthenticated = false),
        (state.singleUser = {}),
        (state.error = null);
    },
    getSingleUserSuccess(state, action) {
      (state.loading = false),
        (state.isAuthenticated = true),
        (state.singleUser = action.payload.user),
        (state.error = null);
      state.message = action.payload.message;
    },
    getSingleUserFail(state, action) {
      (state.loading = false),
        (state.isAuthenticated = false),
        (state.singleUser = {}),
        (state.error = action.payload),
        (state.message = action.payload.message);
    },
    userActionRequest(state) {
      state.loading = true;
      state.error = null;
    },
    userActionSuccess(state, action) {
      state.loading = false;
      state.singleUser = action.payload.user;
      state.message = action.payload;
    },
    userActionFail(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.message = action.payload;
    },

    clearAllErrors(state, action) {
      state.error = null;
      state.success = null;
      state.message = null;
    },
  },
});

export const login = (userData) => async (dispatch) => {
  dispatch(userSlice.actions.loginRequest());
  try {
    const { data } = await axios.post(
      `${baseURL}/api/v1/admin/login`,
      userData
    );
    dispatch(userSlice.actions.loginSuccess(data.user));
    localStorage.setItem("token", data.token);
  } catch (error) {
    dispatch(
      userSlice.actions.loginFail(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
};

export const getAllUser = () => async (dispatch) => {
  dispatch(userSlice.actions.getAllUserRequest());
  try {
    const { data } = await axios.get(`${baseURL}/api/v1/admin/get-all`);
    dispatch(userSlice.actions.getAllUserSuccess(data));
    // console.log(data)
  } catch (error) {
    dispatch(
      userSlice.actions.getAllUserFail(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
};

export const getSingleUser = (id) => async (dispatch) => {
  dispatch(userSlice.actions.getSingleUserRequest());
  try {
    const { data } = await axios.get(`${baseURL}/api/v1/user/${id}`);
    dispatch(userSlice.actions.getSingleUserSuccess(data));
    // console.log(data)
  } catch (error) {
    dispatch(
      userSlice.actions.getSingleUserFail(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
};

export const blockUser = (id) => async (dispatch) => {
  dispatch(userSlice.actions.userActionRequest());
  try {
    const { data } = await axios.put(
      `${baseURL}/api/v1/admin/user/${id}/block`
    );
    dispatch(userSlice.actions.userActionSuccess(data));
  } catch (error) {
    dispatch(
      userSlice.actions.userActionFail(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
};

export const unblockUser = (id) => async (dispatch) => {
  dispatch(userSlice.actions.userActionRequest());
  try {
    const { data } = await axios.put(
      `${baseURL}/api/v1/admin/user/${id}/unblock`
    );
    dispatch(userSlice.actions.userActionSuccess(data));
  } catch (error) {
    dispatch(
      userSlice.actions.userActionFail(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
};

export const clearAllUserErrors = () => (dispatch) => {
  dispatch(userSlice.actions.clearAllErrors());
};

export default userSlice.reducer;
