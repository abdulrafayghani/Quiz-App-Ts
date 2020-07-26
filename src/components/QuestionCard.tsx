import React, { useState } from 'react';
import { QuestionPropsType } from '../types/QuizTypes';

export const QuestionCard: React.FC<QuestionPropsType> = ({ questions, options, callback }) => {
  let [selectedAns, setSelectedAns] = useState('');

  const handleSelection = (e: any) => {
    setSelectedAns(e.target.value);
  };

  return (
    <div>
      <div>{questions}</div>
      <form
        onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAns)}
      >
        {options.map((opt: string, index: number) => {
          return (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  name="opt"
                  value={opt}
                  required
                  checked={selectedAns === opt}
                  onChange={handleSelection}
                />
                {opt}
              </label>
            </div>
          );
        })}
        <input type="submit" />
      </form>
    </div>
  );
};
