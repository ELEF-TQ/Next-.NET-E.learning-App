import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '@/context/QuizSlice'; 

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export default store;
