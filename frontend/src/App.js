import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainQuizApp from './components/MainQuizApp';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainQuizApp />} />
      </Routes>
    </Router>
  );
}

export default App;
