import React from 'react';
import '../style/Question.css';

function QuestionCard({
  question,
  currentQuestionIndex,
  totalQuestions,
  selectedOption,
  showExplanation,
  onOptionSelect,
  onShowExplanation,
  onNextQuestion,
  onPrevQuestion,
  onQuestionSelect,
  attendedQuestions
}) {
  return (

    <div className="question-card">
      <h4 className='title'>Quiz Title</h4>
      <div className='card'>
        <div className='sidebar1'>
          <div className='question'>
            <h2 className="question-title">
              Question {currentQuestionIndex + 1}
            </h2>
            <p className="question-text">{question.text}</p>
          </div>
          <div className="options">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`option ${selectedOption === index
                  ? showExplanation
                    ? index === question.correctIndex
                      ? 'correct'
                      : 'incorrect'
                    : 'selected'
                  : ''
                  }`}
                onClick={() => onOptionSelect(index)}
                disabled={showExplanation}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="navigation-buttons">
            <button
              onClick={onPrevQuestion}
              disabled={currentQuestionIndex === 0}
              className="nav-button"
            >
              Prev
            </button>
            <button
              onClick={onNextQuestion}
              className="nav-button"
            >
              Next
            </button>
          </div>
          {selectedOption !== null && (
            <div className="explanation">
              <button
                onClick={onShowExplanation}
                disabled={showExplanation} 
                className="nav-button"
              >
                Explanation
              </button>
              {showExplanation && (<p>{question.explanation}</p>)}
            </div>
          )}
        </div>
        <div className="bar">
          <div className='title2'>
            <h5 className='left-text '>
              Question {currentQuestionIndex + 1}/{totalQuestions}
            </h5>
            <h5 className='right-text '>
              Need Help?
            </h5>
          </div>
          <div className="sidebar2">
            {Array.from({ length: totalQuestions }).map((_, index) => (
              <button
                key={index}
                className={`sidebar-button ${index === currentQuestionIndex ? 'current' : attendedQuestions.has(index)
                  ? 'attended'
                  : ''}`}
                onClick={() => onQuestionSelect(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionCard;
