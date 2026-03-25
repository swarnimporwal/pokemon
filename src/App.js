import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  const [search, setSearch] = useState('');

  return (
    <Router>
      <div className="App">
        <Header search={search} setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
