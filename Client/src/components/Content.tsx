'use client'


import React, { useEffect, useState } from 'react';
import Video from '@/components/Video';
import QuizQuestion from '@/components/QuizQuestion';
import Sidebar from '@/components/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/context/store';
import { getChapter, answerChapter } from '@/context/ChapterSlice';
import { CircularProgress } from '@mui/material';
import getUserFromLocalStorage from '@/utils/getLocalUser';

export default function Content() {
  const dispatch = useDispatch<AppDispatch>();
  const { chapter, chapterScore, status } = useSelector((state: RootState) => state.chapter);
  const user = getUserFromLocalStorage()
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: { questionId: string; answer: string } }>({});
  const [score, setScore] = useState<number | null>(null);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    if (user) {
      dispatch(getChapter(1));
    } else {
      window.location.href = 'auth/login';
    }
  }, [dispatch]);

  useEffect(() => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setScore(null);
    setShowScore(false);
  }, [chapter]);

  const handleNext = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestion((prevQuestion) => Math.max(prevQuestion - 1, 0));
  };

  const handleSubmit = async () => {
    const isAnyAnswerEmpty = Object.values(selectedAnswers).some(answer => answer.answer === '');
    if (isAnyAnswerEmpty) {
      console.warn('Please select all answers before submitting.');
      alert('Please make sure to answer all questions before submitting.');
      return;
    }

    const formData = {
      userId: user?.id,
      quizId: chapter?.quiz.id,
      questions: Object.values(selectedAnswers).map(answer => ({
        questionId: answer.questionId,
        answer: answer.answer,
      })),
    };
    if (formData.questions.length < chapter?.questions.length) {
      alert('Please answer all questions before submitting.');
      return;
    }
    console.log(formData);
    try {
      dispatch(answerChapter({ chapterId: chapter?.chapter.id, answers: formData }));
      if (chapterScore !== null) {
        setScore(chapterScore);
        setShowScore(true);
      } else {
        console.error('Invalid response from the backend');
      }
    } catch (error) {
      console.error('An error occurred while submitting answers:', error);
    }
  };

  const isVideo = currentQuestion < chapter?.videos.length;
  const isVideoLoading = status === 'loading' && isVideo;

  return (
    <div className='Main rounded-md flex  justify-around max-w-screen-xl mx-auto p-4 md:py-8 bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 w-full '>
      <Sidebar />
      <main className="flex-grow flex justify-center items-center flex-col">
        {status === 'loading' && isVideo && <div className=''><CircularProgress /></div>}
        {status === 'failed' && <p>Error occurred. Please try again.</p>}
        {status === 'succeeded' && (
          <>
            {isVideo ? (
              <Video url={chapter.videos[currentQuestion]?.url} />
            ) : (
              <QuizQuestion
                question={chapter.questions[currentQuestion - chapter.videos.length]?.text}
                answerOptions={
                  chapter.questions[currentQuestion - chapter.videos.length]?.options || []
                }
                selectedAnswer={
                  selectedAnswers[currentQuestion - chapter.videos.length]?.answer
                }
                onRadioChange={(answer: string) => {
                  const updatedAnswers = { ...selectedAnswers };
                  updatedAnswers[currentQuestion - chapter.videos.length] = {
                    questionId: String(
                      chapter.questions[currentQuestion - chapter.videos.length]?.id
                    ),
                    answer,
                  };
                  setSelectedAnswers(updatedAnswers);
                }}
              />
            )}

            <div className="flex justify-between mt-4 gap-10">
              <button
                onClick={handlePrevious}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                disabled={currentQuestion === 0}
              >
                Previous
              </button>

              {currentQuestion < chapter?.questions.length + chapter?.videos.length - 1 && (
                <button onClick={handleNext} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Next
                </button>
              )}

              {currentQuestion === chapter?.questions.length + chapter?.videos.length - 1 && (
                <button onClick={handleSubmit} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Submit
                </button>
              )}
            </div>

            
            {showScore && (
            <div className="mt-4 text-center">
              {chapterScore !== null ? (
                <>
                  <h3>Your Score is: {chapterScore}</h3>
                  {chapterScore >= 50 ? (
                    <p>Congratulations, you passed!</p>
                  ) : (
                    <p>You didn't pass! Retake the test!</p>
                  )}
                </>
              ) : (
                <p>No score available.</p>
              )}
            </div>
          )}








          </>
        )}
      </main>
    </div>
  );
}
