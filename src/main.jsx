import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Index from './index.jsx';
import Quiz from './quiz.jsx';
import Generate from './generate.jsx';
import Bio from './bio.jsx';

function Main () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/quiz' element={<Quiz />} />
        <Route path="/" element={<Index />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <Main />
)
