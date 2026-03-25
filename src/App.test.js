import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./hooks/usePokemons', () => ({
  usePokemons: () => ({
    pokemons: [],
    loading: false,
    hasMore: false,
    loadMore: jest.fn(),
  }),
}));

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => element,
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: '/' }),
  useParams: () => ({}),
}));

test('renders header and default path', () => {
  render(<App />);

  expect(screen.getByText(/Pokemon/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Search Pokémon/i)).toBeInTheDocument();
});
