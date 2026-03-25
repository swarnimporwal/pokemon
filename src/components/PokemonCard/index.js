import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const PokemonCard = ({ pokemon }) => {
    const navigate = useNavigate();
    const [isFavorited, setIsFavorited] = useState(false);
    const heightInMeters = (pokemon.height / 10).toFixed(1);
    const weightInKg = (pokemon.weight / 10).toFixed(1);

    const handleViewDetails = () => {
        navigate(`/pokemon/${pokemon.id}`);
    };

    return (
        <div className="pokemon-card">
            <div className="card-top">
                <div className="image-container">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image" />
                </div>
                <button
                    className={`favorite-btn ${isFavorited ? 'favorited' : ''}`}
                    onClick={() => setIsFavorited(!isFavorited)}
                >
                    ♡
                </button>
            </div>

            <div className="card-body">
                <h3 className="pokemon-name">{pokemon.name}</h3>

                <div className="rating">
                    <div className="stars">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="star">☆</span>
                        ))}
                    </div>
                    <span className="rating-count">(0)</span>
                </div>

                <div className="pokemon-info">
                    <div className="types">
                        {pokemon.types.map(type => (
                            <span key={type.type.name} className={`type-tag type-${type.type.name}`}>
                                {type.type.name}
                            </span>
                        ))}
                    </div>
                    <div className="stats-row">
                        <span className="stat">H: {heightInMeters}m</span>
                        <span className="stat">W: {weightInKg}kg</span>
                    </div>
                </div>

                <button className="catch-btn" onClick={handleViewDetails}>
                    View Details
                </button>
            </div>
        </div>
    );
};

export default React.memo(PokemonCard);