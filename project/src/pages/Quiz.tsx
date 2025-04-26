import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { questions } from '../data/questions';
import { calculateResults } from '../data/results';

export const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [id: number]: number }>({});
  const [progress, setProgress] = useState(0);
  const [currentCategory, setCurrentCategory] = useState('');
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    if (currentQuestion) {
      setCurrentCategory(currentQuestion.category);
      // Calculate progress percentage
      setProgress((currentQuestionIndex / questions.length) * 100);
    }
  }, [currentQuestionIndex, currentQuestion]);

  const handleAnswer = (value: number) => {
    // Save answer
    setAnswers({
      ...answers,
      [currentQuestion.id]: value
    });

    // Move to next question or finish quiz
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishQuiz();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const finishQuiz = () => {
    // Calculate results
    const results = calculateResults(answers);
    
    // Store results in localStorage
    localStorage.setItem('quizResults', JSON.stringify(results));
    localStorage.setItem('quizAnswers', JSON.stringify(answers));
    
    // Navigate to results page
    navigate('/results');
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'personality': return 'Personality Traits';
      case 'career': return 'Career Interests';
      case 'aptitude': return 'Aptitudes & Skills';
      case 'astrology': return 'Astrological Tendencies';
      default: return 'Quiz';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'personality': return 'from-indigo-500 to-violet-500';
      case 'career': return 'from-emerald-500 to-teal-500';
      case 'aptitude': return 'from-amber-500 to-orange-500';
      case 'astrology': return 'from-blue-500 to-sky-500';
      default: return 'from-gray-500 to-gray-700';
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-500">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <span className="text-sm font-medium text-gray-500">
            {getCategoryLabel(currentCategory)}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className={`h-2.5 rounded-full bg-gradient-to-r ${getCategoryColor(currentCategory)}`} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 mb-8 transition-all duration-300 animate-fadeIn">
        <h2 className="text-2xl font-bold mb-6">{currentQuestion?.text}</h2>
        
        <div className="space-y-3">
          {currentQuestion?.options.map((option, index) => (
            <button
              key={index}
              className={`w-full py-4 px-6 text-left rounded-lg border transition-all hover:border-indigo-300 hover:bg-indigo-50 ${
                answers[currentQuestion.id] === option.value 
                  ? 'border-indigo-500 bg-indigo-50' 
                  : 'border-gray-200'
              }`}
              onClick={() => handleAnswer(option.value)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
          className={`flex items-center gap-1 px-4 py-2 rounded-lg ${
            currentQuestionIndex === 0
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <ArrowLeft className="h-4 w-4" />
          Previous
        </button>
        
        <div className="text-center">
          <span className="text-sm text-gray-500">
            You can always go back and change your answers
          </span>
        </div>
        
        <button
          onClick={finishQuiz}
          className="px-4 py-2 rounded-lg text-indigo-600 hover:bg-indigo-50 flex items-center gap-1"
        >
          Skip to Results
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};