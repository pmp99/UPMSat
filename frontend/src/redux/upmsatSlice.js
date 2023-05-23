import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
axios.defaults.withCredentials = true

const initialState = {table: null, tableError: null, loading: false}

export const getTable = createAsyncThunk(
    'upmsat/getTable',
    async ({table, start, end}, {rejectWithValue}) => {
        try{
            let url
            if (table.includes('hk')) {
                url = 'https://localhost:8443/api/telemetry/hk'
            } else if (table.includes('sc')) {
                url = 'https://localhost:8443/api/telemetry/sc'
            } else {
                url = 'https://localhost:8443/api/telecommand'
            }
            const res = await axios.get(url, {params: {start: start, end: end}})
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const upmsatSlice = createSlice({
    name: 'upmsat',
    initialState,
    extraReducers: (builder) => {
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

export default upmsatSlice.reducer