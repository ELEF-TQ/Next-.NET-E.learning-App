import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@/api';
import { setCookie } from 'cookies-next';
import getUserFromLocalStorage from '@/utils/getLocalUser';

interface AuthState {
  user: any | null; 
  token: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}


const initialState: AuthState = {
  user: getUserFromLocalStorage() ,
  token: null,
  status: 'idle',
  error: null,
};

const redirectLogIn = () => {
  window.location.href = 'auth/login';
};

const redirectMain = () => {
  window.location.href = '/';
};

export const login = createAsyncThunk('auth/login', async (userData: any) => {
  try {
    const response = await api.post('/auth/login', userData);
    return response.data;
  } catch (error) {
    throw new Error('An error occurred during login.');
  }
});

export const signup = createAsyncThunk('auth/signup', async (userData: any) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw new Error('An error occurred during signup.');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
        setCookie('token',  state.token );
        localStorage.setItem('user', JSON.stringify(state.user));
        redirectMain();
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'An error occurred during login.';
      })
      .addCase(signup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
        redirectLogIn();
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'An error occurred during signup.';
      });
  },
});

export default authSlice.reducer;
