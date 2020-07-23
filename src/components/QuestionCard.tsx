import React from 'react';
import { QuestionPropsType } from '../types/QuizTypes';

export const QuestionCard: React.FC<QuestionPropsType> = ({ questions, options }) =>{
  return (
    <div>
      <div>{questions}</div>
      <form>
        {options.map((opt: string, index: number) => {
          return (
            <div key={index}>
              <label>
                <input type="radio" name="opt" value={opt} />
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
