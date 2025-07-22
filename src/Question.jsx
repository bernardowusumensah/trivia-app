import { useState, useEffect } from 'react';

function Question() {
  // State variables initialized as specified
  const [category, setCategory] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [revealed, setRevealed] = useState(false);

  // useEffect hook to make API request
  useEffect(() => {
    // Fetch a single true/false Science & Nature question from Open Trivia DB
    const fetchQuestion = async () => {
      try {
        // Category 17 = Science & Nature
        const response = await fetch('https://opentdb.com/api.php?amount=1&category=17&type=boolean');
        const data = await response.json();
        
        // Extract the first (and only) question from the results array
        const questionData = data.results[0];
        
        // Set state values using setter functions
        setCategory(questionData.category);
        setQuestion(questionData.question);
        setAnswer(questionData.correct_answer);
      } catch (error) {
        console.error('Error fetching question:', error);
      }
    };

    fetchQuestion();
  }, []); // Empty dependency array means this runs once on component mount

  // Button click handler to reveal the answer
  const handleRevealAnswer = () => {
    setRevealed(true);
  };

  return (
    <div className="question-container">
      <div>
        <strong>Category:</strong> {category}
      </div>
      <h3>{question}</h3>
      <button type="button" onClick={handleRevealAnswer}>
        Reveal answer
      </button>
      {/* Conditional rendering for the answer */}
      {revealed ? <div className="answer"><strong>Answer:</strong> {answer}</div> : ''}
    </div>
  );
}

export default Question;
