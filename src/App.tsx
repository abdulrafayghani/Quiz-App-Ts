import React, { useEffect, useState } from 'react';
import { getQuiz } from './services/QuizService';
import { QuestionCard } from './components/QuestionCard';
import { QuizType } from './types/QuizTypes';

function App() {
  const [quiz, setQuiz] = useState<QuizType[]>([]);
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

  if (!quiz.length) {
    return <h1>loadinng</h1>;
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
