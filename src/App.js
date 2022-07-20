import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import Rockets from './components/Rockets';
import Missions from './components/Missions';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Missions />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Missions />} />
      </Routes>
    </div>
  );
}

export default App;
