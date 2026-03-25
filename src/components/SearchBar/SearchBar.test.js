import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './index';

describe('SearchBar', () => {
    test('renders input and suggestions based on search value', () => {
        const setSearchMock = jest.fn();
        render(
            <SearchBar
                search="bulb"
                setSearch={setSearchMock}
                pokemons={[
                    { name: 'bulbasaur' },
                    { name: 'ivysaur' },
                    { name: 'venusaur' },
                ]}
            />
        );

        const input = screen.getByPlaceholderText(/Search Pokémon/i);
        expect(input).toBeInTheDocument();

        const suggestion = screen.getByText(/bulbasaur/i);
        expect(suggestion).toBeInTheDocument();

        fireEvent.click(suggestion);
        expect(setSearchMock).toHaveBeenCalledWith('bulbasaur');
    });

    test('clear button resets search', () => {
        const setSearchMock = jest.fn();
        render(
            <SearchBar search="bulb" setSearch={setSearchMock} pokemons={[{ name: 'bulbasaur' }]} />
        );

        const clearIcon = screen.getByAltText(/clear/i);
        expect(clearIcon).toBeInTheDocument();

        // eslint-disable-next-line testing-library/no-node-access
        fireEvent.click(clearIcon.closest('button'));
        expect(setSearchMock).toHaveBeenCalledWith('');
    });
});