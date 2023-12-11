import { configureStore, ThunkAction, Action, ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import  ChapterReducer from '@/context/ChapterSlice'
import AuthReducer from '@/context/AuthSlice'

export const store = configureStore({
  reducer: {
    chapter: ChapterReducer ,
    auth: AuthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
