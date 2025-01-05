import React, { useState, useEffect } from 'react'
import QuestionCard from './QuestionCard'
import '../style/Quizapp.css'

function MainQuizApp() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [attendedQuestions, setAttendedQuestions] = useState(new Set());
  useEffect(() => {
    fetch('http://localhost:5000/api/questions')
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  const handleOptionSelect = (optionIndex) => {
    setSelectedOption(optionIndex);
    setAttendedQuestions((prev) => new Set(prev).add(currentQuestionIndex));
  }

  const handleShowExplanation = () => {
    setShowExplanation(true)
  }

  const handleNextQuestion = () => {
    setShowExplanation(false)
    setSelectedOption(null)
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
  };

  const handlePrevQuestion = () => {
    setShowExplanation(false)
    setSelectedOption(null)
    setCurrentQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0))

  };

  const handleQuestionSelect = (index) => {
    setShowExplanation(false)
    setSelectedOption(null)
    setCurrentQuestionIndex(index)
  };
  return (
    <div className="App">
      <header className="quiz-header">
        <h1>Quiz Application UI</h1>
      </header>
      {questions.length > 0 ? (
        <QuestionCard
          question={questions[currentQuestionIndex]}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          selectedOption={selectedOption}
          showExplanation={showExplanation}
          onOptionSelect={handleOptionSelect}
          onShowExplanation={handleShowExplanation}
          onNextQuestion={handleNextQuestion}
          onPrevQuestion={handlePrevQuestion}
          onQuestionSelect={handleQuestionSelect}
          attendedQuestions={attendedQuestions}
        />
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
}

export default MainQuizApp
