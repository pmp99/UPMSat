import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
axios.defaults.withCredentials = true

const initialState = {tables: null, tablesError: null, table: null, tableError: null, loading: false}

export const getTables = createAsyncThunk(
    'upmsat/getTables',
    async (_, {rejectWithValue}) => {
        try{
            const res = await axios.get('https://localhost:8443/api/tables')
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const getTable = createAsyncThunk(
    'upmsat/getTable',
    async ({table, start, end}, {rejectWithValue}) => {
        try{
            const res = await axios.get('https://localhost:8443/api/tables/'+table, {params: {start: start, end: end}})
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const upmsatSlice = createSlice({
    name: 'upmsat',
    initialState,
    reducers: {
        resetErrors: (state) => {
            state.tablesError = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getTables.pending, (state) => {
            state.loading = true
            state.tablesError = null
        })
        builder.addCase(getTables.fulfilled, (state, action) => {
            state.loading = false
            state.tables = action.payload
            state.tablesError = null
        })
        builder.addCase(getTables.rejected, (state, action) => {
            state.loading = false
            state.tablesError = action.payload.msg
        })
        builder.addCase(getTable.pending, (state) => {
            state.loading = true
            state.tableError = null
        })
        builder.addCase(getTable.fulfilled, (state, action) => {
            state.loading = false
            state.table = action.payload
            state.tableError = null
        })
        builder.addCase(getTable.rejected, (state, action) => {
            state.loading = false
            state.tableError = action.payload.msg
        })
    }
})

export const {resetErrors} = upmsatSlice.actions

export default upmsatSlice.reducer