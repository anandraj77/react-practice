
export const PokemonCards = ({ actualData }) => {
    return <li className="pokemon-card">
        <figure>
            <img src={actualData.sprites.other.dream_world.front_default}
                alt={actualData.name}
                className="pokemon-image"
            />
        </figure>
        <h1 className="pokemon-name">{actualData.name}</h1>
        <div className="pokemon-info pokemon-highlight">
            <p>
                {
                    actualData.types.map((curType) => {
                        return curType.type.name
                    }).join(", ")
                }
            </p>
        </div>
        <div className="grid-three-cols">
            <p className="pokemon-info">
                <span>Height: {actualData.height}</span>
            </p>
            <p className="pokemon-info">
                <span>Weight: {actualData.weight}</span>
            </p>
            <p className="pokemon-info">
                <span>speed: {actualData.stats[5].base_stat}</span>
            </p>
        </div>
        <div className="grid-three-cols">
            <div className="pokemon-info">
                <p>{actualData.base_experience}</p>
                <span>Experience:</span>
            </div>
            <div className="pokemon-info">
                <p>{actualData.stats[1].base_stat}</p>
                <span>Attack:</span>
            </div>
            <div className="pokemon-info">
                <p>
                    {
                        actualData.abilities
                            .map((abilityInfo) => abilityInfo.ability.name)
                            .slice(0, 1)
                            .join(", ")
                    }
                </p>
                <span>Abilities:</span>
            </div>
        </div>
    </li>
}
