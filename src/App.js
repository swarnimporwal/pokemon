import { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { usePokemons } from './hooks/usePokemons';
import Header from './components/Header';

function App() {
  const { pokemons, } = usePokemons();
  const [search, setSearch] = useState('');

  const filteredPokemons = useMemo(() => {
    return pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [pokemons, search]);

  console.log('filteredPokemons', filteredPokemons);

  return (
    <Router>
      <div className="App">
        <Header search={search} setSearch={setSearch} pokemons={pokemons} />
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
