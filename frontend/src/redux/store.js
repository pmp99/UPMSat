import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import databaseReducer from './databaseSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        database: databaseReducer
    }
});