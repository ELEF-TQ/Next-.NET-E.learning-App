'use client'

import React, { useState } from 'react';
import Video from '@/components/Video';
import QuizData from '@/data/Quiz';
import QuizQuestion from '@/components/QuizQuestion';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < QuizData.length && setCurrentQuestion(nextQues);
  };

  const currentQuiz = QuizData[currentQuestion];

  return (
    <div className='flex  justify-around max-w-screen-xl mx-auto p-4 md:py-8 bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
      <Sidebar />
      <main className="flex-grow">
        {currentQuestion === 0 ? (
          <Video url={currentQuiz?.url} />
        ) : (
          currentQuiz?.question && (
            <QuizQuestion
              question={currentQuiz.question}
              answerOptions={currentQuiz.answerOptions || []}
            />
          )
        )}
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevious}
            className="w-[49%] py-3 bg-indigo-600 rounded-lg"
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="w-[49%] py-3 bg-indigo-600 rounded-lg"
            disabled={currentQuestion === QuizData.length - 1}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
