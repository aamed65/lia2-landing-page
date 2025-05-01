import React, { useState } from 'react';
import './QuizComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faChartLine, 
  faComments, 
  faUserTie,
  faArrowLeft
} from '@fortawesome/free-solid-svg-icons';

const QuizComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');

  const questions = [
    {
      question: "Vad är ditt huvudintresse?",
      options: [
        {
          text: "Ledarskap och projektledning",
          icon: faUsers
        },
        {
          text: "Sälj och marknad",
          icon: faChartLine
        },
        {
          text: "Kommunikation och retorik",
          icon: faComments
        },
        {
          text: "Personal och HR",
          icon: faUserTie
        }
      ]
    },
    {
      question: "Hur mycket erfarenhet har du?",
      options: [
        {
          text: "Ny på området",
          icon: faUsers
        },
        {
          text: "Några års erfarenhet",
          icon: faChartLine
        },
        {
          text: "Erfaren ledare",
          icon: faComments
        },
        {
          text: "Senior expert",
          icon: faUserTie
        }
      ]
    },
    {
      question: "Vad är ditt mål med utbildningen?",
      options: [
        {
          text: "Karriärbyte",
          icon: faUsers
        },
        {
          text: "Kompetensutveckling",
          icon: faChartLine
        },
        {
          text: "Ledarskapsutveckling",
          icon: faComments
        },
        {
          text: "Specialisering",
          icon: faUserTie
        }
      ]
    }
  ];

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setEmail('');
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
   
    console.log('Email submitted:', email);
    
  };

  return (
    <div className="quiz-section">
      <div className="quiz-container">
        <h2>Vilken utbildning passar dig?</h2>
        <p>Svara på några frågor och få förslag på utbildningar som passar just dina behov.</p>
        
    {!showResults ? (
        <div className="question-container">
      <div className="question-header">
       <button 
         className="nav-button back-button" 
           onClick={handleBack}
          disabled={currentQuestion === 0}
             >
        <FontAwesomeIcon icon={faArrowLeft} /> Tillbaka
        </button>

          <h3>{questions[currentQuestion].question}</h3>

         <div className="question-number">
        Fråga {currentQuestion + 1} av {questions.length}
          </div>

         </div>
        <div className="options-container">
          {questions[currentQuestion].options.map((option, index) => (

          <button
             key={index}
             className={`option-button ${answers[currentQuestion] === option.text ? 'selected' : ''}`}
            onClick={() => handleAnswer(option.text)}
         >
          <FontAwesomeIcon icon={option.icon} className="option-icon" />
         <span>{option.text}</span>
           </button>
          ))}
        </div>
       </div>
        ) : (
          <div className="results-container">

        <h3>Tack för dina svar!</h3>
            <p>Vi har tagit emot dina svar och kommer att kontakta dig snart med personliga utbildningsförslag.</p>
        <form onSubmit={handleEmailSubmit} className="email-form">

          <input
            type="email"

          value={email}
             onChange={(e) => setEmail(e.target.value)}
            placeholder="Ange din e-postadress"
           required
              className="email-input"
             />
            <button type="submit" className="submit-email-button">
               Skicka
           </button>
         </form>
       <button className="reset-button" onClick={resetQuiz}>
        Ta testet igen
          </button>
        </div>
       )}
      </div>
    </div>
  );
};

export default QuizComponent; 