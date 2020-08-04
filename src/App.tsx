import React, { useEffect, useState } from 'react';
import { Button, Box } from '@material-ui/core';
import { getQuiz } from './services/QuizService';
import { QuestionCard } from './components/QuestionCard';
import { QuizType } from './types/QuizTypes';
import QuizImg from './quizImg.png'

function App() {
  const [quiz, setQuiz] = useState<QuizType[]>([]);
  const [loading, setLoading] = useState(false);
  let [currentStep, setCurrentStep] = useState(0);
  let [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const questions: QuizType[] = await getQuiz(5, 'easy');
      setQuiz(questions);
    }
    fetchData();
  }, []);
  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();
    const questionSelection: QuizType = quiz[currentStep];

    if (questionSelection.correct_answer === userAns) {
      setScore(++score);
    }
    if (currentStep !== quiz.length - 1) {
      setCurrentStep(++currentStep);
    } else {
      alert(`Quiz Completed Correct Answers: ${score}`);
      setCurrentStep(0);
      setScore(0);
    }
  };

  if (!quiz.length || !loading) {
    return (
      <Box style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage:`url(${QuizImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
        }}>
        <Button
         variant='outlined'
        // color="secondary"
          style={{
            height:'50px',
            width:'150px',
            fontSize:'40px',
            fontWeight:'bold',
            fontFamily:'lobster',
            borderColor:'#00f7ff',
            color:'#f200ca',
            // backgroundColor:'#ff00fb',
            // marginTop:'380px',
            // marginRight:'10px'
            
          }}
          onClick={() => setLoading(true)}
        >
          Start
        </Button>
      </Box>
    );
  }
  return (
    <div>
      <QuestionCard
        options={quiz[currentStep].option}
        questions={quiz[currentStep].question}
        callback={handleSubmit}
      />
    </div>
  );
}

export default App;
