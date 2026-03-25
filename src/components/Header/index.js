import './styles.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-left">
                    <img
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDp7H9MNFosv56udvUYvDj_6Ct-raFff9BookmUvaE5UHamFq34OW6W8HF-tw4pQBaE3xGN_8uNs4uRKg62RQYwIKfcZLIeuz0gOIynmGNAHJJPfzF9Snq6mrBD93QB_nWF-X3iRGUSPY/s200-rw/pokemon-tv.png" alt="Pokémon Logo" className="logo"
                    />
                    <h1 className="project-title">Pokemon</h1>
                </div>
                <div className="header-center">
                </div>
                <div className="header-right">
                    <div className="username" title="Swarnim Porwal">SP</div>
                </div>
            </div>
        </header>
    );
};

export default Header;