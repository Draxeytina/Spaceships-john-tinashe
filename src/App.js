import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/Rockets';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Rockets />} />
        <Route path="/profile" element={<Rockets />} />
      </Routes>
    </div>
  );
}

export default App;
