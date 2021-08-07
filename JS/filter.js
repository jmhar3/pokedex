// SEARCH

const searchBar = document.getElementById('input');
let pokeContainer = document.querySelector('#pokedex');

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredPokemons = pokemons.filter(pokemon => {
        return (
            pokemon.name.toLowerCase().includes(searchString) ||
            pokemon.types.some((type) => type['type']['name'].toLowerCase().match(searchString))
        );
    });
    pokeContainer.innerHTML = "";
    filteredPokemons.forEach(pokemon => renderPokemon(pokemon));
});


// BACK TO TOP

const icon = document.getElementById('header-icon');

icon.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})