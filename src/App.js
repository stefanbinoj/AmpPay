import './App.css';
import Dashboard from './components/Dashboard';
import Main from './components/Main';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
