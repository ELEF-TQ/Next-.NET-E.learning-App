import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import quizReducer from '@/context/QuizSlice';

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
