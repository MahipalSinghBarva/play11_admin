import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
// import baseURL from "../baseURL"
const baseURL = "http://localhost:8080"

const contestSlice = createSlice({
    name: "contest",
    initialState: {
        loading: false,
        contest: [],
        allContest: [],
        isAuthenticated: false,
        error: null,
        message: null,
        success: null
    },
    reducers: {
        getAllContestRequest(state, action) {
            state.loading = true,
                state.isAuthenticated = false,
                state.allContest = [],
                state.error = null
        },
        getAllContestSuccess(state, action) {
            state.loading = false,
                state.isAuthenticated = true,
                state.allContest = action.payload,
                state.error = null
            state.message = action.payload.message
        },
        getAllContestFail(state, action) {
            state.loading = false,
                state.isAuthenticated = false,
                state.allContest = [],
                state.error = action.payload,
                state.message = action.payload.message
        },
        getSingleContestRequest(state, action) {
            state.loading = true,
                state.isAuthenticated = false,
                state.contest = [],
                state.error = null
        },
        getSingleContestSuccess(state, action) {
            state.loading = false,
                state.isAuthenticated = true,
                state.contest = action.payload,
                state.error = null
            state.message = action.payload.message
        },
        getSingleContestFail(state, action) {
            state.loading = false,
                state.isAuthenticated = false,
                state.contest = [],
                state.error = action.payload,
                state.message = action.payload.message
        },


        clearAllErrors(state, action) {
            state.error = null;
            state = null
        },
    }


})

export const getAllContest = () => async (dispatch) => {
    dispatch(contestSlice.actions.getAllContestRequest)
    try {
        const { data } = await axios.get(`${baseURL}/api/v1/contest/get-all`)
        dispatch(contestSlice.actions.getAllContestSuccess(data.contests));
        // console.log(data);

    } catch (error) {
        dispatch(contestSlice.actions.getAllContestFail(error.response?.data?.message || "Something went wrong"));
    }
}

export const getSingleContest = (id) => async (dispatch) => {
    dispatch(contestSlice.actions.getSingleContestRequest)
    try {
        const { data } = await axios.get(`${baseURL}/api/v1/contest/${id}`)
        dispatch(contestSlice.actions.getSingleContestSuccess(data.contests));
        // console.log(data.contest);

    } catch (error) {
        dispatch(contestSlice.actions.getSingleContestFail(error.response?.data?.message || "Something went wrong"));
    }
}

export default contestSlice.reducer