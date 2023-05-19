import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice';
import upmsatReducer from './upmsatSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        upmsat: upmsatReducer
    }
});