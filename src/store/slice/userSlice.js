import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
// import baseURL from "../baseURL"
const baseURL = "http://localhost:8080"


const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        user: {},
        allUser: [],
        isAuthenticated: false,
        error: null,
        message: null,
        passwordUpdated: null,
        success: null
    },
    reducers: {
        loginRequest(state, action) {
            state.loading = true,
                state.isAuthenticated = false,
                state.user = {},
                state.error = null
        },
        loginSuccess(state, action) {
            state.loading = false,
                state.isAuthenticated = true,
                state.user = action.payload,
                state.error = null
            state.message = action.payload.message
        },
        loginFail(state, action) {
            state.loading = false,
                state.isAuthenticated = false,
                state.user = {},
                state.error = action.payload,
                state.message = action.payload.message
        },
        getAllUserRequest(state, action) {
            state.loading = true,
                state.isAuthenticated = false,
                state.allUser = {},
                state.error = null
        },
        getAllUserSuccess(state, action) {
            state.loading = false,
                state.isAuthenticated = true,
                state.allUser = action.payload,
                state.error = null
            state.message = action.payload.message
        },
        getAllUserFail(state, action) {
            state.loading = false,
                state.isAuthenticated = false,
                state.allUser = {},
                state.error = action.payload,
                state.message = action.payload.message
        },

        clearAllErrors(state, action) {
            state.error = null;
            state = null
        },

    }
})

export const login = (userData) => async (dispatch) => {
    dispatch(userSlice.actions.loginRequest)
    try {
        const { data } = await axios.post(`${baseURL}/api/v1/admin/login`, userData)
        dispatch(userSlice.actions.loginSuccess(data.user));
    } catch (error) {
        dispatch(userSlice.actions.loginFailed(error.response?.data?.message || "Something went wrong"));
    }
}

export const getAllUser = () => async (dispatch) => {
    dispatch(userSlice.actions.getAllUserRequest)
    try {
        const { data } = await axios.get(`${baseURL}/api/v1/admin/get-all`)
        dispatch(userSlice.actions.getAllUserSuccess(data));
        // console.log(data)
    } catch (error) {
        dispatch(userSlice.actions.getAllUserFailed(error.response?.data?.message || "Something went wrong"));
    }
}

export const clearAllUserErrors = () => (dispatch) => {
    dispatch(userSlice.actions.clearAllErrors())
}

export default userSlice.reducer