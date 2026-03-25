import { useState, useEffect } from 'react';
import './styles.css';

const SearchBar = ({ search, setSearch, pokemons }) => {
    const [showSuggestions, setShowSuggestions] = useState(false);

    const suggestions = pokemons
        ?.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()) && search)
        ?.slice(0, 5)
        ?.map(pokemon => pokemon.name);

    useEffect(() => {
        setShowSuggestions(search.length > 0);
    }, [search]);

    const handleSuggestionClick = (suggestion) => {
        setSearch(suggestion);
        setShowSuggestions(false);
    };

    const handleClear = () => {
        setSearch('');
        setShowSuggestions(false);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search Pokémon"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-bar"
                onFocus={() => setShowSuggestions(search.length > 0)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            />
            <div className="search-icons">
                <button className="search-icon" onClick={search ? handleClear : undefined} type="button">
                    {search ? (
                        <img src="/icons/clear.svg" alt="clear" width="22" height="22" />
                    ) : (
                        <img src="/icons/search.svg" alt="search" width="22" height="22" />
                    )}
                </button>
            </div>
            {showSuggestions && suggestions.length > 0 && (
                <ul className="suggestions-list">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="suggestion-item"
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;