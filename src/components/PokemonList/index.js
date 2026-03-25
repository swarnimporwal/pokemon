import { useRef, useCallback } from 'react';
import PokemonCard from '../PokemonCard';
import './styles.css';

const PokemonList = ({ pokemons, hasMore, loadMore, isSearching }) => {
    const observer = useRef();

    const lastPokemonElementRef = useCallback(node => {
        if (isSearching) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                loadMore();
            }
        });
        if (node) observer.current.observe(node);
    }, [hasMore, loadMore, isSearching]);
    return (
        <div className="pokemon-grid">
            {pokemons.map((pokemon, index) => (
                <div
                    key={pokemon.id}
                    ref={index === pokemons.length - 1 ? lastPokemonElementRef : null}
                >
                    <PokemonCard pokemon={pokemon} />
                </div>
            ))}
        </div>
    );
};

export default PokemonList;