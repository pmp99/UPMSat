import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
axios.defaults.withCredentials = true

const initialState = {table: null, tableError: null, loading: false, editLoading: false,
    editError: null, createLoading: false, createError: null, deleteLoading: false, deleteError: null, tcKind: null}

export const getTable = createAsyncThunk(
    'database/getTable',
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

export const getTCkind = createAsyncThunk(
    'database/getTCkind',
    async (_, {rejectWithValue}) => {
        try{
            const url = 'https://localhost:8443/api/telecommand/kind'
            const res = await axios.get(url)
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const editTelecommand = createAsyncThunk(
    'database/editTelecommand',
    async (newTC, {rejectWithValue}) => {
        try{
            const url = 'https://localhost:8443/api/telecommand/' + newTC?.['iid']
            const res = await axios.post(url, {newTC: newTC})
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const createTelecommand = createAsyncThunk(
    'database/createTelecommand',
    async ({kind, data, data2}, {rejectWithValue}) => {
        try{
            const url = 'https://localhost:8443/api/telecommand'
            const res = await axios.post(url, {kind: kind, data: data, data2: data2})
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const deleteTelecommand = createAsyncThunk(
    'database/deleteTelecommand',
    async (id, {rejectWithValue}) => {
        try{
            const url = 'https://localhost:8443/api/telecommand/' + id
            const res = await axios.delete(url)
            return res.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const databaseSlice = createSlice({
    name: 'database',
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
        builder.addCase(getTCkind.pending, (state) => {
            state.tcKind = null
        })
        builder.addCase(getTCkind.fulfilled, (state, action) => {
            state.tcKind = action.payload
        })
        builder.addCase(getTCkind.rejected, (state) => {
            state.tcKind = null
        })
        builder.addCase(createTelecommand.pending, (state) => {
            state.createLoading = true
            state.createError = null
        })
        builder.addCase(createTelecommand.fulfilled, (state, action) => {
            state.createLoading = false
            if (state.table.name === 'tc') {
                state.table.data.push(action.payload)
            }
            state.createError = null
        })
        builder.addCase(createTelecommand.rejected, (state, action) => {
            state.createLoading = false
            state.createError = action.payload.msg
        })
        builder.addCase(deleteTelecommand.pending, (state) => {
            state.deleteLoading = true
            state.deleteError = null
        })
        builder.addCase(deleteTelecommand.fulfilled, (state, action) => {
            state.deleteLoading = false
            if (state.table.name === 'tc') {
                state.table.data = state.table.data.filter(e => e['iid'] !== action.payload.id)
            }
            state.deleteError = null
        })
        builder.addCase(deleteTelecommand.rejected, (state, action) => {
            state.deleteLoading = false
            state.deleteError = action.payload.msg
        })
    }
})

export default databaseSlice.reducer