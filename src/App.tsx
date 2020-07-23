import React, { useEffect, useState } from 'react';
import { getQuiz } from './services/QuizService';
import { QuestionCard } from './components/QuestionCard';
import { QuestionType, QuizType } from './types/QuizTypes';

function App() {
  const [quiz, setQuiz] = useState<QuizType[]>([])

  useEffect(() => {
    async function fetchData(){
      const questions: QuizType[] = await getQuiz(5,'easy')
      setQuiz(questions)
    }
    fetchData()
  }, []);

  if(!quiz.length){
    return <h1>loadinng</h1>
  }
  return (
    <div>
      <QuestionCard 
      options={quiz[0].option}
      questions={quiz[0].question} 
      />
    </div>
  );
}

export default App;
