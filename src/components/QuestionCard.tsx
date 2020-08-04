import React, { useState } from 'react';
import { QuestionPropsType } from '../types/QuizTypes';
import { ListItem, Radio, Button, List } from '@material-ui/core';

export const QuestionCard: React.FC<QuestionPropsType> = ({ questions, options, callback,}) => {
  const [ selectedAns, setSelectedAns ] = useState('');

  return (
    <div>
      <div style={{display:'flex', justifyContent:'center', fontFamily:'lobster'}}>{questions}</div>
      <List style={{display:'flex', justifyContent:'center'}}>
        <form
          onSubmit={(e: React.FormEvent<EventTarget>) =>
            callback(e, selectedAns)
          }
        >
          {options.map((opt: string, index: number) => {
            return (
              <ListItem key={index} style={{fontFamily:'lobster'}} >
                  <Radio
                    name="opt"
                    value={opt}
                    required
                    checked={selectedAns === opt}
                    onChange={(e) => { setSelectedAns(e.target.value) }}
                  />
                  {opt}
              </ListItem>
            );
          })}
          <Button style={{fontFamily:'lobster'}} type="submit" variant="outlined" color="primary">
            Submit
          </Button>
        </form>
      </List>
    </div>
  );
};
