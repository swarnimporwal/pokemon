import { render, screen, fireEvent } from '@testing-library/react';
import PokemonCard from '.';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    useNavigate: () => mockNavigate,
}));

describe('PokemonCard', () => {
    const pokemon = {
        id: 1,
        name: 'bulbasaur',
        height: 7,
        weight: 69,
        sprites: {
            front_default: 'front.png',
        },
        types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
    };

    test('renders pokemon card and navigates on view details', () => {
        render(<PokemonCard pokemon={pokemon} />);

        expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
        fireEvent.click(screen.getByText(/View Details/i));
        expect(mockNavigate).toHaveBeenCalledWith('/pokemon/1');
    });

    test('favorite button toggles class', () => {
        render(<PokemonCard pokemon={pokemon} />);
        const favoriteButton = screen.getByRole('button', { name: /♡/i });

        expect(favoriteButton).not.toHaveClass('favorited');
        fireEvent.click(favoriteButton);
        expect(favoriteButton).toHaveClass('favorited');
        fireEvent.click(favoriteButton);
        expect(favoriteButton).not.toHaveClass('favorited');
    });
});