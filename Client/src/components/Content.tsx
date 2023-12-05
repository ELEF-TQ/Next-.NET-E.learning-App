'use client'


import React, { useEffect, useState } from 'react';
import Video from '@/components/Video';
import QuizData from '@/data/Quiz';
import QuizQuestion from '@/components/QuizQuestion';
import Sidebar from '@/components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/context/store';
import { getChapter, answerChapter } from '@/context/QuizSlice';

export default function Content() {
  const dispatch = useDispatch<AppDispatch>();
  const { chapter, status, error } = useSelector((state: RootState) => state.quiz);

  const getUserFromLocalStorage = (): any | null => {
    const userJSON = localStorage.getItem('user');
    return userJSON ? JSON.parse(userJSON) : null;
  };

  useEffect(() => {
    const user = getUserFromLocalStorage();
    if (user) {
      dispatch(getChapter(1));
    } else {
      window.location.href = 'auth/login';
    }
  }, [dispatch]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Array<{ questionId: string; answer: string }>>(
    Array.from({ length: QuizData[0]?.questions.length }, () => ({ questionId: '', answer: '' }))
  );

  const handleNext = () => {
    const nextQuestionIndex = currentQuestion + 1;
    nextQuestionIndex < QuizData[0]?.questions.length && setCurrentQuestion(nextQuestionIndex);
  };

  const handlePrevious = () => {
    const prevQuestionIndex = currentQuestion - 1;
    prevQuestionIndex >= 0 && setCurrentQuestion(prevQuestionIndex);
  };

  const handleSubmit = () => {
    dispatch(answerChapter({ chapterId: chapter?.id, answers: selectedAnswers }));
  };

  const currentQuiz = QuizData[0];

  return (
    <div className='flex mt-20 justify-around max-w-screen-xl mx-auto p-4 md:py-8 bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
      <Sidebar />
      <main className="flex-grow">
        {currentQuestion === 0 ? (
          <Video url={currentQuiz?.videos && currentQuiz.videos[0]?.url} />
        ) : (
          currentQuiz?.questions && (
            <QuizQuestion
              question={currentQuiz.questions[currentQuestion]?.text}
              answerOptions={currentQuiz.questions[currentQuestion]?.options || []}
              selectedAnswer={selectedAnswers[currentQuestion].answer}
              onRadioChange={(answer: string) => {
                const updatedAnswers = [...selectedAnswers];
                updatedAnswers[currentQuestion] = {
                  questionId: String(currentQuiz.questions[currentQuestion]?.id),
                  answer,
                };
                setSelectedAnswers(updatedAnswers);
              }}
            />
          )
        )}

        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevious}
            className="w-[30%] py-3 bg-primary-600 rounded-lg"
            disabled={currentQuestion === 0}
          >
            Previous
          </button>

          {currentQuestion === QuizData[0]?.questions.length - 1 ? (
            <button onClick={handleSubmit} className="w-[30%] py-3 bg-primary-600 rounded-lg">
              Submit
            </button>
          ) : (
            <button onClick={handleNext} className="w-[30%] py-3 bg-primary-600 rounded-lg">
              Next
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
