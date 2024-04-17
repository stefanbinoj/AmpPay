import './App.css';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Purpose from './components/Purpose';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/purpose' element={<Purpose />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
