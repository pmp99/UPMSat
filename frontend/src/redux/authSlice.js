import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
axios.defaults.withCredentials = true

const initialState = {user: null, loginError: null, registerError: null, error: null, loading: false, userLoaded: false}

export const login = createAsyncThunk(
    'auth/login',
    async (user, {rejectWithValue}) => {
        try{
            const res = await axios.post('https://localhost:8443/auth/login', {username: user.username, password: user.password})
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, {rejectWithValue}) => {
        try{
            const res = await axios.get('https://localhost:8443/auth/logout')
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const register = createAsyncThunk(
    'auth/register',
    async (user, {rejectWithValue}) => {
        try{
            const res = await axios.post('https://localhost:8443/auth/register', {username: user.username, email: user.email, password: user.password, confirmPassword: user.confirmPassword})
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const getUser = createAsyncThunk(
    'auth/getUser',
    async (_, {rejectWithValue}) => {
        try{
            const res = await axios.get('https://localhost:8443/auth/get-user')
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetErrors: (state) => {
            state.loginError = null
            state.registerError = null
            state.error = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true
            state.loginError = null
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload.user
            state.loginError = null
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false
            state.loginError = action.payload.msg
        })
        builder.addCase(logout.pending, (state) => {
            state.loading = true
            state.error = null
        })
        builder.addCase(logout.fulfilled, (state, action) => {
            state.loading = false
            state.user = null
        })
        builder.addCase(logout.rejected, (state, action) => {
            state.loading = false
            state.user = null
        })
        builder.addCase(register.pending, (state) => {
            state.loading = true
            state.registerError = null
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload.user
            state.registerError = null
        })
        builder.addCase(register.rejected, (state, action) => {
            state.loading = false
            state.registerError = action.payload.msg
        })
        builder.addCase(getUser.pending, (state) => {
            state.loading = true
            state.error = null
            state.userLoaded = false
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload.user
            state.error = null
            state.userLoaded = true
        })
        builder.addCase(getUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload.msg
            state.userLoaded = true
        })
    }
})

export const {resetErrors} = authSlice.actions

export default authSlice.reducer