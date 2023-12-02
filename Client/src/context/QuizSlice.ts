import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import api from '@/api';


const initialState = {
  quiz: null,
  status: 'idle',
  error: null as string | null,
};
export const getChapter = createAsyncThunk('quiz/getChapter', async (chapterId: number) => {
  try {
    const response = await api.get(`/${chapterId}`);
    return response.data.quiz;
  } catch (error) {
    throw new Error('An error occurred while fetching the quiz.');
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
        state.quiz = action.payload;
      })
      .addCase(getChapter.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default quizSlice.reducer;
