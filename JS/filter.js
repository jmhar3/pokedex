// BACK TO TOP

const icon = document.getElementById('header-icon');

icon.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


// SEARCH

const searchBar = document.getElementById('input');
let pokeContainer = document.querySelector('#pokedex');

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredPokemons = pokemons.filter(pokemon => {
        return (
            pokemon.name.toLowerCase().includes(searchString) ||
            pokemon.types[0].type.name.toLowerCase().includes(searchString)
        );
    });
    pokeContainer.innerHTML = "";
    filteredPokemons.forEach(pokemon => renderPokemon(pokemon));
});


// FILTER TYPES

// const type = document.querySelectorAll('type')

// type.addEventListener('click', (e) => {
//     const typeClicked = e.target.innerText;
//     console.log(e.target)
//     const filteredTypes = pokemons.filter(pokemon => {
//         return (
//             pokemon.types[0].type.name.includes(typeClicked)
//         );
//     });
//     pokeContainer.innerHTML = "";
//     filteredTypes.forEach(pokemon => renderPokemon(pokemon));
// });


// FILTER COLLECTION

const caughtTally = document.querySelector('#caught');
const missingTally = document.querySelector('#missing');

// caughtTally.addEventListener("click", (e) => {
//     const caughtPokemon = pokemons.filter(pokemon => {
//         return pokemon.collection.includes('caught');
//     })
//     pokeContainer.innerHTML = "";
//     caughtPokemon.forEach(pokemon => renderPokemon (pokemon));
//     console.log(caughtPokemon)
// });

// missingTally.addEventListener("click", () => {
//     const missingPokemon = pokemons.filter(pokemon => {
//         return pokemon.classList.contains('caught');
//     })
//     pokeContainer.innerHTML = "";
//     missingPokemon.forEach(pokemon => renderPokemon (pokemon));
// });