import React from 'react'
import { Routes, Route } from "react-router-dom";
import { QuizPage } from './components/QuizPage'
import { Start } from './components/Start'
import { Category } from "./components/Category";

function App () {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='category' element={<Category />}/>
        <Route path='quiz/:category_id/:level' element={<QuizPage />} />
      </Routes>
    </div>
  )
}

export default App