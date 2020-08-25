import React from 'react';
import { Button, Box } from '@material-ui/core';
import QuizImg from '../quizImg.png';
import { Link } from 'react-router-dom';
 
export const Start = () => {
  return (
    <div>
      <Box
        style={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${QuizImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Link to='category'>
        <Button
          variant="outlined"
          style={{
            height: '50px',
            width: '150px',
            fontSize: '40px',
            fontWeight: 'bold',
            fontFamily: 'lobster',
            borderColor: '#00f7ff',
            color: '#f200ca',
          }}
        >
          Start
        </Button>
        </Link>
      </Box>
    </div>
  );
};
