import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPokemonDetails } from '../services/pokemonApi';
import './PokemonDetail.css';

const PokemonDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState(null);
    const [species, setSpecies] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPokemon = async () => {
            try {
                setLoading(true);
                setError(null);
                const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
                const data = await fetchPokemonDetails(url);
                setPokemon(data);

                // Fetch species data for additional details
                const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
                const speciesData = await fetchPokemonDetails(speciesUrl);
                setSpecies(speciesData);
            } catch (err) {
                setError(err.message || 'Failed to load Pokémon details');
            } finally {
                setLoading(false);
            }
        };

        loadPokemon();
    }, [id]);

    if (loading) {
        return (
            <div className="detail-page">
                <button className="back-btn" onClick={() => navigate('/')}>← Back</button>
                <div className="loading">Loading Pokémon details...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="detail-page">
                <button className="back-btn" onClick={() => navigate('/')}>← Back</button>
                <div className="error">
                    <h2>Error Loading Pokémon</h2>
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    if (!pokemon) {
        return (
            <div className="detail-page">
                <button className="back-btn" onClick={() => navigate('/')}>← Back</button>
                <div className="error">Pokémon not found</div>
            </div>
        );
    }

    const heightInMeters = (pokemon.height / 10).toFixed(1);
    const weightInKg = (pokemon.weight / 10).toFixed(1);

    return (
        <div className="detail-page">
            <button className="back-btn" onClick={() => navigate('/')}>← Back to List</button>

            <div className="detail-container">
                <div className="detail-header">
                    <h1>{pokemon.name}</h1>
                </div>

                <div className="detail-content">
                    <div className="detail-image-gallery">
                        <div className="image-item">
                            <img
                                src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
                                alt={pokemon.name}
                                className="main-image"
                            />
                        </div>

                        <div className="sprite-gallery">
                            {pokemon.sprites.front_default && (
                                <div className="sprite-item">
                                    <img src={pokemon.sprites.front_default} alt="Front" title="Front" />
                                    <span>Front</span>
                                </div>
                            )}
                            {pokemon.sprites.back_default && (
                                <div className="sprite-item">
                                    <img src={pokemon.sprites.back_default} alt="Back" title="Back" />
                                    <span>Back</span>
                                </div>
                            )}
                            {pokemon.sprites.front_shiny && (
                                <div className="sprite-item">
                                    <img src={pokemon.sprites.front_shiny} alt="Shiny Front" title="Shiny Front" />
                                    <span>Shiny</span>
                                </div>
                            )}
                            {pokemon.sprites.back_shiny && (
                                <div className="sprite-item">
                                    <img src={pokemon.sprites.back_shiny} alt="Shiny Back" title="Shiny Back" />
                                    <span>Shiny Back</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="detail-info">
                        <div className="types-section">
                            <h3>Types</h3>
                            <div className="types-list">
                                {pokemon.types.map(type => (
                                    <span key={type.type.name} className={`type-badge type-${type.type.name}`}>
                                        {type.type.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="physical-section">
                            <h3>Physical Attributes</h3>
                            <div className="physical-grid">
                                <div className="physical-item">
                                    <span className="label">Height</span>
                                    <span className="value">{heightInMeters} m</span>
                                </div>
                                <div className="physical-item">
                                    <span className="label">Weight</span>
                                    <span className="value">{weightInKg} kg</span>
                                </div>
                                <div className="physical-item">
                                    <span className="label">Base Experience</span>
                                    <span className="value">{pokemon.base_experience}</span>
                                </div>
                                {species && (
                                    <>
                                        <div className="physical-item">
                                            <span className="label">Color</span>
                                            <span className="value capitalize">{species.color?.name || 'N/A'}</span>
                                        </div>
                                        <div className="physical-item">
                                            <span className="label">Capture Rate</span>
                                            <span className="value">{species.capture_rate}%</span>
                                        </div>
                                        <div className="physical-item">
                                            <span className="label">Happiness</span>
                                            <span className="value">{species.base_happiness}</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="abilities-section">
                            <h3>Abilities</h3>
                            <ul className="abilities-list">
                                {pokemon.abilities.map((ability, index) => (
                                    <li key={index}>
                                        {ability.ability.name}
                                        {ability.is_hidden && <span className="hidden-badge">Hidden</span>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="stats-section">
                    <h3>Base Stats</h3>
                    <div className="stats-grid">
                        {pokemon.stats.map(stat => (
                            <div key={stat.stat.name} className="stat-item">
                                <div className="stat-name">{stat.stat.name.toUpperCase()}</div>
                                <div className="stat-bar-container">
                                    <div
                                        className="stat-bar"
                                        style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                                    ></div>
                                </div>
                                <div className="stat-value">{stat.base_stat}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {pokemon.held_items.length > 0 && (
                    <div className="held-items-section">
                        <h3>Held Items</h3>
                        <div className="held-items-list">
                            {pokemon.held_items.map((item, index) => (
                                <span key={index} className="item-badge">
                                    {item.item.name}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                <div className="moves-section">
                    <h3>Moves ({pokemon.moves.length} total)</h3>
                    <div className="moves-list">
                        {pokemon.moves.map((move, index) => (
                            <span key={index} className="move-badge">
                                {move.move.name}
                            </span>
                        ))}
                    </div>
                </div>

                {species && (
                    <div className="species-section">
                        <h3>Species Information</h3>
                        <div className="species-grid">
                            <div className="species-item">
                                <span className="label">Generation</span>
                                <span className="value capitalize">{species.generation?.name || 'N/A'}</span>
                            </div>
                            <div className="species-item">
                                <span className="label">Habitat</span>
                                <span className="value capitalize">{species.habitat?.name || 'N/A'}</span>
                            </div>
                            <div className="species-item">
                                <span className="label">Growth Rate</span>
                                <span className="value capitalize">{species.growth_rate?.name || 'N/A'}</span>
                            </div>
                            <div className="species-item">
                                <span className="label">Hatch Counter</span>
                                <span className="value">{species.hatch_counter}</span>
                            </div>
                            <div className="species-item">
                                <span className="label">Gender Ratio</span>
                                <span className="value">
                                    {species.gender_rate === -1 ? 'Genderless' : `M:F ${Math.round((8 - species.gender_rate) / 8 * 100)}:${Math.round(species.gender_rate / 8 * 100)}`}
                                </span>
                            </div>
                            <div className="species-item">
                                <span className="label">Is Legendary</span>
                                <span className="value">{species.is_legendary ? 'Yes' : 'No'}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PokemonDetail;
