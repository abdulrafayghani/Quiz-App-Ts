import React, { useEffect, useState, Fragment } from 'react';
import { useParams, Link } from "react-router-dom";
import { Button, Typography } from '@material-ui/core';
import { getQuiz } from '../services/QuizService';
import { QuestionCard } from '../components/QuestionCard';
import { QuizType } from '../types/QuizTypes';

export const QuizPage = () => {
  const [quiz, setQuiz] = useState<QuizType[]>([]);
  const [loading, setLoading] = useState(true);
  let [currentStep, setCurrentStep] = useState(0);
  let [score, setScore] = useState(0);
  let {category_id, level} = useParams()

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      const questions: QuizType[] = await getQuiz(category_id, level);
      setQuiz(questions);
      setLoading(false)
    }
    fetchData();
  }, // eslint-disable-next-line
  []);

  const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) => {
    e.preventDefault();
    const questionSelection: QuizType = quiz[currentStep];

    if (questionSelection.correct_answer === userAns) {
      setScore(++score);
    }
    if (currentStep < 10) {
      setCurrentStep(++currentStep);
    } 
  };

  if (!quiz.length || loading) {
    return  <h1>"...loading"</h1> 
  }
  if(quiz.length === 0){
    return (
        <div>The page you are lokking for is not Found</div>
    )
  }

  return (
    <Fragment>
        {
          currentStep < 10
          ?
        <div>
      <QuestionCard
        options={quiz[currentStep].option}
        questions={quiz[currentStep].question}
        callback={handleSubmit}
      />
      </div>
      :
      <div>
          <Typography >
              <b>Answered Correct: </b> {score}
          </Typography>
          <Link to='/'>
            <Button >Start Again</Button>
          </Link>
      </div>
        }
    </Fragment>
  );
}

