import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '@/context/QuizSlice';

export const createStore = () =>
  configureStore({
    reducer: {
      quiz: quizReducer,
    },
  });

// export type RootState = ReturnType<typeof createStore.getState>;
// export type AppDispatch = typeof createStore.dispatch;
