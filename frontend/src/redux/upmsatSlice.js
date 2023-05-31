import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
axios.defaults.withCredentials = true

const initialState = {table: null, tableError: null, loading: false, editLoading: false, editError: null}

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
            return {data: res.data, name: table}
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const editTelecommand = createAsyncThunk(
    'upmsat/editTelecommand',
    async (newTC, {rejectWithValue}) => {
        try{
            let url = 'https://localhost:8443/api/telecommand/edit/' + newTC?.['iid']
            const res = await axios.post(url, {newTC: newTC})
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
        builder.addCase(editTelecommand.pending, (state) => {
            state.editLoading = true
            state.editError = null
        })
        builder.addCase(editTelecommand.fulfilled, (state, action) => {
            state.editLoading = false
            if (state.table.name === 'tc') {
                state.table.data = state.table.data.map(e => e?.iid === action.payload.iid ? action.payload : e)
            }
            state.editError = null
        })
        builder.addCase(editTelecommand.rejected, (state, action) => {
            state.editLoading = false
            state.editError = action.payload.msg
        })
    }
})

export default upmsatSlice.reducer