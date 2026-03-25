import { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { usePokemons } from './hooks/usePokemons';
import PokemonList from './components/PokemonList';
import Header from './components/Header';
import PokemonDetail from './pages/PokemonDetail';

function App() {
  const { pokemons, loading, hasMore, loadMore } = usePokemons();
  const [search, setSearch] = useState('');

  const filteredPokemons = useMemo(() => {
    return pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [pokemons, search]);

  return (
    <Router>
      <div className="App">
        <Header search={search} setSearch={setSearch} pokemons={pokemons} />
        <Routes>
          <Route
            path="/"
            element={
              <PokemonList pokemons={filteredPokemons} hasMore={hasMore} loadMore={loadMore} isSearching={!!search} />
            }
          />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
        {loading && <p style={{ textAlign: 'center', padding: '20px' }}>Loading...</p>}
      </div>
    </Router>
  );
}

export default App;
