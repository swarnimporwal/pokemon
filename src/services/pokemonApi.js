const API_BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = async (limit = 20, offset = 0) => {
    const response = await fetch(`${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
        throw new Error('Failed to fetch Pokémon list');
    }
    return response.json();
};

export const fetchPokemonDetails = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch Pokémon details');
    }
    return response.json();
};