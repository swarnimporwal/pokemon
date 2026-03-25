import { render, screen, fireEvent } from '@testing-library/react';
import * as api from '../services/pokemonApi';
import PokemonDetail from './PokemonDetail';

const mockUseParams = jest.fn();
const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    useParams: () => mockUseParams(),
    useNavigate: () => mockUseNavigate,
}));

describe('PokemonDetail', () => {
    beforeEach(() => {
        mockUseParams.mockReturnValue({ id: '1' });
    });

    test('shows loading and detail data', async () => {
        const pokemonData = {
            id: 1,
            name: 'bulbasaur',
            height: 7,
            weight: 69,
            base_experience: 64,
            sprites: {
                other: { 'official-artwork': { front_default: 'artwork.png' } },
                front_default: 'front.png',
                back_default: 'back.png',
                front_shiny: 'front_shiny.png',
                back_shiny: 'back_shiny.png',
            },
            types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
            abilities: [{ ability: { name: 'overgrow' }, is_hidden: false }],
            stats: [{ stat: { name: 'hp' }, base_stat: 45 }],
            held_items: [],
            moves: [{ move: { name: 'tackle' } }],
        };

        const speciesData = {
            color: { name: 'green' },
            capture_rate: 45,
            base_happiness: 70,
            generation: { name: 'generation-i' },
            habitat: { name: 'grassland' },
            growth_rate: { name: 'medium-slow' },
            hatch_counter: 20,
            gender_rate: 1,
            is_legendary: false,
        };

        jest.spyOn(api, 'fetchPokemonDetails').mockImplementation((url) => {
            if (url.includes('pokemon-species')) return Promise.resolve(speciesData);
            return Promise.resolve(pokemonData);
        });

        render(<PokemonDetail />);

        expect(screen.getByText(/Loading Pokémon details/i)).toBeInTheDocument();

        await screen.findByText(/Types/i);
        expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
        expect(screen.getByText(/Height/i)).toBeInTheDocument();

        fireEvent.click(screen.getByRole('button', { name: /Back to List/i }));
        expect(mockUseNavigate).toHaveBeenCalled();
    });
});