import React, { useState } from 'react';

interface QuizQuestionProps {
  question: string;
  answerOptions: { answer: string; isCorrect?: boolean }[];
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, answerOptions }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>(undefined);

  const handleRadioChange = (answer: string) => {
    setSelectedAnswer(answer);
  };

  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {answerOptions.map((option, index) => (
          <li key={index}>
            <label
              className=' text-sm font-medium text-gray-900 dark:text-gray-300'
            >
              <input
                type="radio"
                name="answer"
                value={option.answer}
                checked={selectedAnswer === option.answer}
                onChange={() => handleRadioChange(option.answer)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              {option.answer}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizQuestion;
