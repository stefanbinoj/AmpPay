import './App.css';
import Dashboard from './components/Dashboard';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
