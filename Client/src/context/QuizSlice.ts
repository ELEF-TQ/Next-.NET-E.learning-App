import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@/api';

interface QuizState {
  chapter: any | null; 
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: QuizState = {
  chapter: null,
  status: 'idle',
  error: null,
};

export const getChapter = createAsyncThunk('quiz/getChapter', async (chapterId: number) => {
  try {
    const response = await api.get(`/${chapterId}`);
    return response.data; 
  } catch (error) {
    throw new Error('An error occurred while fetching the chapter.');
  }
});

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getChapter.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getChapter.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.chapter = action.payload;
      })
      .addCase(getChapter.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default quizSlice.reducer;
