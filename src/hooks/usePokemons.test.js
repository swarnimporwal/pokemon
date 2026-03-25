import { render, screen, } from '@testing-library/react';
import { usePokemons } from './usePokemons';
import * as api from '../services/pokemonApi';

jest.mock('../services/pokemonApi');

const TestComponent = () => {
    const { pokemons, loading } = usePokemons();
    return <div>{loading ? 'Loading' : `${pokemons.length} pokemons`}</div>;
};

describe('usePokemons', () => {
    test('loads pokemons and sets state', async () => {
        api.fetchPokemonList.mockResolvedValue({
            results: [{ url: 'https://pokeapi.co/api/v2/pokemon/1/' }],
            next: null,
        });
        api.fetchPokemonDetails.mockResolvedValue({ id: 1, name: 'bulbasaur' });

        render(<TestComponent />);

        expect(screen.getByText(/Loading/i)).toBeInTheDocument();

        await screen.findByText(/1 pokemons/i);
    });
});