'use client'

import { getChapter } from '@/context/QuizSlice';
import  { useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
interface QuizQuestionProps {
  question: string;
  answerOptions: { answer: string; isCorrect?: boolean }[];
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, answerOptions }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>(undefined);

  const handleRadioChange = (answer: string) => {
    setSelectedAnswer(answer);
  };


  const { quiz } = useSelector((state : any)=>state.quiz) ;
  
 


  return (
    <div className='w-full flex justify-center items-center flex-col'>
      <h2>{question}</h2>
      <ul className='p-5'>
        {answerOptions.map((option, index) => (
          <li key={index} className='flex p-2'>
           
              <input
                type="radio"
                name="answer"
                value={option.answer}
                checked={selectedAnswer === option.answer}
                onChange={() => handleRadioChange(option.answer)}
                className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <div className='ml-5'>{option.answer}</div>
              
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizQuestion;
