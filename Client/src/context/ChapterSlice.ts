import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@/api';

interface QuizState {
  chapterScore: any | null ;
  chapter: any | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: QuizState = {
  chapterScore: 45,
  chapter: null,
  status: 'idle',
  error: null,
};

export const getChapter = createAsyncThunk('quiz/getChapter', async (chapterId: number) => {
  try {
    const response = await api.get(`chapters/${chapterId}`);
    return response.data;
  } catch (error) {
    throw new Error('An error occurred while fetching the chapter.');
  }
});

export const answerChapter = createAsyncThunk('quiz/answerChapter', async ({ chapterId, answers }: { chapterId: number; answers: any }) => {
  try {
    console.log(answers)
    const response = await api.post(`chapters/${chapterId}`, answers);
    return response.data;
  } catch (error) {
    throw new Error('An error occurred while answering the chapter.');
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
      })
      .addCase(answerChapter.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(answerChapter.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.chapterScore = action.payload;
      })
      .addCase(answerChapter.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'An error occurred while answering the chapter.';
      });
  },
});

export default quizSlice.reducer;
