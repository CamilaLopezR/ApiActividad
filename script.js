async function searchPokemon() {
    const input = document.getElementById('pokemonInput').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${input}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Pokémon no encontrado');
        const data = await response.json();
        displayPokemon(data);
    } catch (error) {
        document.getElementById('pokemonInfo').innerHTML = `<p>${error.message}</p>`;
    }
}

function displayPokemon(pokemon) {
    const pokemonInfo = document.getElementById('pokemonInfo');
    pokemonInfo.innerHTML = `
        <h2>${pokemon.name.toUpperCase()}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
        <div class="types">
            <strong>Tipos:</strong> ${pokemon.types.map(t => t.type.name).join(', ')}
        </div>
        <div class="abilities">
            <strong>Habilidades:</strong> ${pokemon.abilities.map(a => a.ability.name).join(', ')}
        </div>
    `;
}
