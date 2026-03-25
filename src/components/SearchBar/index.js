import './styles.css';

const SearchBar = ({ search, setSearch }) => {

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search Pokémon"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-bar"
            />
        </div>
    );
};

export default SearchBar;