import { fetchPokemonList, fetchPokemonDetails } from './pokemonApi';

describe('pokemonApi', () => {
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    test('fetchPokemonList success', async () => {
        global.fetch.mockResolvedValue({ ok: true, json: async () => ({ results: [] }) });
        const data = await fetchPokemonList(10, 0);
        expect(data).toEqual({ results: [] });
        expect(global.fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
    });

    test('fetchPokemonList failure', async () => {
        global.fetch.mockResolvedValue({ ok: false });
        await expect(fetchPokemonList()).rejects.toThrow('Failed to fetch Pokémon list');
    });

    test('fetchPokemonDetails success', async () => {
        global.fetch.mockResolvedValue({ ok: true, json: async () => ({ id: 1, name: 'bulbasaur' }) });
        const data = await fetchPokemonDetails('https://pokeapi.co/api/v2/pokemon/1/');
        expect(data).toEqual({ id: 1, name: 'bulbasaur' });
        expect(global.fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1/');
    });

    test('fetchPokemonDetails failure', async () => {
        global.fetch.mockResolvedValue({ ok: false });
        await expect(fetchPokemonDetails('https://pokeapi.co/api/v2/pokemon/1/')).rejects.toThrow('Failed to fetch Pokémon details');
    });
});