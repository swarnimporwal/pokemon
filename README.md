# Pokémon Explorer 🏆

A modern, responsive React application for exploring and discovering Pokémon. Built with React 19, featuring infinite scroll, search functionality, detailed Pokémon information, and a beautiful UI.

![Pokemon Explorer](https://img.shields.io/badge/React-19.2.4-blue) ![React Router](https://img.shields.io/badge/React_Router-6.28.0-green) ![Testing](https://img.shields.io/badge/Test_Coverage-80.28%25-yellow)

## 🌐 Live Demo

🚀 **[View Live Application](https://pokemon-explorer-demo.netlify.app)**

## 📸 Screenshots

### Desktop View

![Desktop Screenshot](./screenshots/desktop-home.png)
_Main listing page with search and infinite scroll_

### Mobile View

![Mobile Screenshot](./screenshots/mobile-home.png)
_Responsive header with search hidden on mobile_

### Tablet View

![Tablet Screenshot](./screenshots/tablet-home.png)
_Responsive header with search hidden on tablet_

### Pokémon Details

![Details Desktop Screenshot](./screenshots/desktop-details.png)
_Comprehensive Pokémon information page_

### Pokémon Details

![Details Mobile Screenshot](./screenshots/mobile-details.png)
_Comprehensive Pokémon information page_

## ✨ Features

- 🔍 **Real-time Search**: Search Pokémon by name with live suggestions
- 📱 **Responsive Design**: Optimized for desktop and mobile devices
- ♾️ **Infinite Scroll**: Load more Pokémon as you scroll
- 📄 **Detailed Views**: Comprehensive Pokémon information including stats, abilities, and evolution data
- 🎨 **Modern UI**: Beautiful card-based design with hover effects
- ⚡ **Fast Performance**: Optimized with React.memo and efficient state management
- 🧪 **Comprehensive Testing**: 80%+ test coverage with Jest and React Testing Library

## 🛠️ Tech Stack

- **Frontend**: React 19.2.4 with Hooks
- **Routing**: React Router DOM 6.28.0
- **Styling**: CSS3 with modern layouts
- **API**: PokéAPI (https://pokeapi.co/)
- **Testing**: Jest + React Testing Library
- **Build Tool**: Create React App
- **Deployment**: Netlify/Vercel

## 🏗️ Architecture

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header/         # App header with search
│   ├── SearchBar/      # Search input with suggestions
│   ├── PokemonCard/    # Individual Pokémon card
│   └── PokemonList/    # Grid layout with infinite scroll
├── pages/              # Route-based page components
│   └── PokemonDetail/  # Detailed Pokémon view
├── hooks/              # Custom React hooks
│   └── usePokemons/    # Data fetching and pagination
├── services/           # API service layer
│   └── pokemonApi.js   # PokéAPI integration
└── App.js              # Main application component
```

### Component Architecture

- **Separation of Concerns**: Clear separation between data fetching, UI components, and business logic
- **Custom Hooks**: `usePokemons` hook encapsulates all Pokémon data management
- **Component Composition**: Modular components that can be easily tested and reused
- **Route-based Code Splitting**: Each page is a separate route for better performance

### State Management

- **Local State**: React hooks (`useState`, `useEffect`) for component-level state
- **Custom Hooks**: Centralized data fetching and pagination logic
- **Props Flow**: Unidirectional data flow from parent to child components

## 🚀 Setup Instructions

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/pokemon-explorer.git
   cd pokemon-explorer
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

- `npm start` - Start development server
- `npm test` - Run test suite
- `npm test -- --coverage` - Run tests with coverage report
- `npm run build` - Create production build
- `npm run eject` - Eject from Create React App (irreversible)

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run with coverage
npm test -- --coverage

# Run specific test file
npm test -- --testPathPattern=PokemonCard.test.js
```

### Test Coverage

- **Statements**: 80.28%
- **Branches**: 64.77%
- **Functions**: 75%
- **Lines**: 80.88%

### Test Structure

- **Unit Tests**: Individual component and hook testing
- **Integration Tests**: Component interaction testing
- **API Mocking**: External API calls are properly mocked
- **Router Testing**: Navigation and routing behavior tested

## 🎯 Architectural Decisions

### React 19 Adoption

- **Decision**: Used React 19.2.4 (latest stable)
- **Rationale**: Access to latest features, performance improvements, and future-proofing
- **Trade-off**: Potential compatibility issues with older packages

### React Router v6

- **Decision**: Used React Router v6.28.0 for Jest compatibility
- **Rationale**: React Router v7 has ESM-only exports that conflict with Jest's CommonJS environment
- **Trade-off**: Missing some v7 features, but stable and well-tested

### Infinite Scroll Implementation

- **Decision**: Used `IntersectionObserver` API with custom hook
- **Rationale**: Native browser API, no external dependencies, performant
- **Trade-off**: Requires polyfill for older browsers

### Component Optimization

- **Decision**: Used `React.memo` for expensive components
- **Rationale**: Prevents unnecessary re-renders, improves performance
- **Trade-off**: Adds complexity, requires careful prop comparison

## ⚖️ Trade-offs Made

### Search Implementation

- **Trade-off**: Client-side filtering vs API search
- **Decision**: Client-side filtering for simplicity
- **Impact**: Works well with cached data, but limited by loaded Pokémon count

### Data Fetching Strategy

- **Trade-off**: Load all data upfront vs pagination
- **Decision**: Infinite scroll with pagination
- **Impact**: Better performance, but requires more complex state management

### Styling Approach

- **Trade-off**: CSS-in-JS vs plain CSS
- **Decision**: Plain CSS for simplicity and performance
- **Impact**: No runtime styling overhead, but less dynamic theming

### Testing Scope

- **Trade-off**: Unit tests vs integration tests
- **Decision**: Focus on unit tests with some integration
- **Impact**: Faster test execution, but less end-to-end coverage

## 🤖 AI Usage Details

This project was developed with assistance from GitHub Copilot and Claude AI. Here's how AI was utilized:

### Code Generation

- **Component Scaffolding**: AI helped generate initial component structures
- **API Integration**: Assisted with PokéAPI data fetching and error handling
- **Test Writing**: Generated comprehensive test suites for all components

### Problem Solving

- **Bug Fixes**: AI helped identify and fix routing and testing issues
- **Performance Optimization**: Suggested React.memo and efficient re-rendering strategies
- **Responsive Design**: Assisted with mobile-first CSS approaches

### Documentation

- **README Creation**: AI helped structure and write comprehensive documentation
- **Code Comments**: Generated meaningful comments for complex logic

### Specific AI Contributions

1. **React Router Mocking**: Solved Jest compatibility issues with router mocking
2. **IntersectionObserver Testing**: Created proper mocks for browser APIs
3. **Error Boundary Implementation**: Suggested robust error handling patterns
4. **CSS Grid Layouts**: Optimized responsive grid systems

## 🚀 Deployment

### Netlify Deployment

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Deploy!

### Vercel Deployment

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: ~150KB (gzipped)
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <2s

## 🔧 Development Guidelines

### Code Style

- ESLint configuration follows React app standards
- Prettier for consistent formatting
- Component naming: PascalCase
- File naming: kebab-case

### Git Workflow

- Feature branches for new functionality
- Pull requests for code review
- Semantic commit messages

### Testing Strategy

- Test all user-facing features
- Mock external dependencies
- Maintain >80% coverage
- Test both success and error scenarios

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [PokéAPI](https://pokeapi.co/) for the amazing Pokémon data
- [Create React App](https://create-react-app.dev/) for the excellent boilerplate
- [React Testing Library](https://testing-library.com/) for testing utilities
- GitHub Copilot and Claude AI for development assistance

## 📞 Contact

For questions or feedback, please open an issue on GitHub.

---

**Built with ❤️ using React and PokéAPI**

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
