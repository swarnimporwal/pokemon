import { render, screen } from '@testing-library/react';
import Header from './index';

const mockUseLocation = jest.fn(() => ({ pathname: '/' }));

jest.mock('react-router-dom', () => ({
    useLocation: () => mockUseLocation(),
}));

describe('Header', () => {
    test('shows search bar on home route', () => {
        mockUseLocation.mockReturnValue({ pathname: '/' });
        render(<Header search="" setSearch={jest.fn()} pokemons={[]} />);

        expect(screen.getByPlaceholderText(/Search Pokémon/i)).toBeInTheDocument();
    });

    test('hides search bar on details route', () => {
        mockUseLocation.mockReturnValue({ pathname: '/pokemon/1' });
        render(<Header search="" setSearch={jest.fn()} pokemons={[]} />);

        expect(screen.queryByPlaceholderText(/Search Pokémon/i)).not.toBeInTheDocument();
    });
});