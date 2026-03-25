import { useState, useEffect, useCallback } from 'react';
import { fetchPokemonList, fetchPokemonDetails } from '../services/pokemonApi';

export const usePokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [offset, setOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    const loadPokemons = useCallback(async (reset = false) => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchPokemonList(20, reset ? 0 : offset);
            const pokemonDetails = await Promise.all(
                data.results.map(async (pokemon) => {
                    return await fetchPokemonDetails(pokemon.url);
                })
            );
            setPokemons(prev => reset ? pokemonDetails : [...prev, ...pokemonDetails]);
            setOffset(prev => reset ? 20 : prev + 20);
            setHasMore(data.next !== null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [offset]);

    useEffect(() => {
        loadPokemons(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadMore = () => {
        if (!loading && hasMore) {
            loadPokemons();
        }
    };

    return { pokemons, loading, error, hasMore, loadMore };
};