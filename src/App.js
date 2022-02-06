
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/login';
import Result from './pages/result';

function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Login />} />
        <Route path ="/main" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
