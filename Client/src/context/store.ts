import { configureStore, ThunkAction, Action, ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import  QuizReducer from '@/context/QuizSlice'
import AuthReducer from '@/context/AuthSlice'

export const store = configureStore({
  reducer: {
    quiz: QuizReducer ,
    auth: AuthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
