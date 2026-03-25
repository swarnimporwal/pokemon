import { render, screen } from '@testing-library/react';
import PokemonList from './index';

jest.mock('react-router-dom', () => ({
    useNavigate: () => jest.fn(),
}));

jest.mock('../PokemonCard', () => {
    return function PokemonCard({ pokemon }) {
        return <div data-testid="pokemon-card">{pokemon.name}</div>;
    };
});

// Mock IntersectionObserver
global.IntersectionObserver = class MockIntersectionObserver {
    constructor() {
        this.observe = jest.fn();
        this.disconnect = jest.fn();
    }
};

describe('PokemonList', () => {
    test('renders pokemon cards', () => {
        const pokemons = [
            { id: 1, name: 'bulbasaur' },
            { id: 2, name: 'ivysaur' },
        ];

        render(<PokemonList pokemons={pokemons} hasMore={false} loadMore={jest.fn()} isSearching={false} />);

        expect(screen.getAllByTestId('pokemon-card')).toHaveLength(2);
        expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
    });
});