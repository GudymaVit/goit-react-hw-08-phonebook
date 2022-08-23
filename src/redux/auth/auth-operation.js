import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.default.baseUrl = 'https://connections-api.herokuapp.com';

const token = {
    set(token) { axios.defaults.headers.common.Authorization = `Bearer ${token}` },
    unSet() { axios.defaults.headers.common.Authorization = '' }
};

const register = createAsyncThunk(
    'auth/register',
    async()
)