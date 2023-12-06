'use client'


import React, { useEffect, useState } from 'react';
import Video from '@/components/Video';
import QuizData from '@/data/Quiz';
import QuizQuestion from '@/components/QuizQuestion';
import Sidebar from '@/components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/context/store';
import { getChapter, answerChapter } from '@/context/ChapterSlice';
import { CircularProgress } from '@mui/material';

export default function Content() {
  const dispatch = useDispatch<AppDispatch>();
  const { chapter, chapterScore, status } = useSelector((state: RootState) => state.chapter);
  const { user } = useSelector((state: RootState) => state.auth);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: { questionId: string; answer: string } }>({});
  const [score, setScore] = useState<number | null>(null);
  const [showScore, setShowScore] = useState(false);
  const currentQuiz = QuizData[0];

  useEffect(() => {
    if (user) {
      dispatch(getChapter(1));
    } else {
      window.location.href = 'auth/login';
    }
  }, [dispatch]);

  const handleNext = () => {
    const nextQuestionIndex = currentQuestion + 1;
    nextQuestionIndex < QuizData[0]?.questions.length && setCurrentQuestion(nextQuestionIndex);
  };

  const handlePrevious = () => {
    const prevQuestionIndex = currentQuestion - 1;
    prevQuestionIndex >= 0 && setCurrentQuestion(prevQuestionIndex);
  };

  const handleSubmit = async () => {
    if (selectedAnswers[currentQuestion]?.answer !== undefined) {
      const formData = {
        userId: user?.userId,
        quizId: QuizData[0]?.quiz.id,
        questions: Object.values(selectedAnswers),
      };
      console.log(formData);
      try {
        dispatch(answerChapter({ chapterId: chapter?.id, answers: formData }));
        if (chapterScore !== null) {
          setScore(chapterScore);
          setShowScore(true);
        } else {
          console.error('Invalid response from the backend');
        }
      } catch (error) {
        console.error('An error occurred while submitting answers:', error);
      }
    } else {
      console.warn('Please select an answer before submitting.');
    }
  };

  return (
    <div className='Main rounded-md flex  justify-around max-w-screen-xl mx-auto p-4 md:py-8 bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 w-full '>
      <Sidebar />
      <main className="flex-grow flex justify-center items-center">
        {status === 'loading' && <div className=''><CircularProgress /></div> }

        {status === 'failed' && <p>Error occurred. Please try again.</p>}

        {status === 'succeeded' && (
          <>
            {currentQuestion === 0 ? (
              <Video url={currentQuiz?.videos && currentQuiz.videos[0]?.url} />
            ) : (
              currentQuiz?.questions && (
                <QuizQuestion
                  question={currentQuiz.questions[currentQuestion]?.text}
                  answerOptions={currentQuiz.questions[currentQuestion]?.options || []}
                  selectedAnswer={selectedAnswers[currentQuestion]?.answer}
                  onRadioChange={(answer: string) => {
                    const updatedAnswers = { ...selectedAnswers };
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

            {showScore && (
              <div className="mt-4 text-center">
                <h3>Your Score is: {score}</h3>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
