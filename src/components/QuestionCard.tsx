  import React, { useState } from 'react';
  import { QuestionPropsType } from '../types/QuizTypes';
  import { List, ListItem, Radio } from '@material-ui/core';


  export const QuestionCard: React.FC<QuestionPropsType> = ({ questions, options, callback }) => {
    const [selectedAns, setSelectedAns] = useState('');

    return (
      <List>
        <div>{questions}</div>
        <form
          onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, selectedAns)}
        >
          {options.map((opt: string, index: number) => {
            return (
              <ListItem key={index}>
                <>
                  <Radio
                    name="opt"
                    value={opt}
                    required
                    checked={selectedAns === opt}
                    onChange={(e) => {
                      setSelectedAns(e.target.value);
                    }}
                  />
                  {opt}
                </>
              </ListItem>
            );
          })}
          <input type="submit" />
        </form>
      </List>
    );
  };
