// SEARCH

const searchBar = document.getElementById('input');
const searchIcon = document.getElementById('search');

let pokeContainer = document.querySelector('#pokedex');


// SEARCH ICON

searchIcon.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


// FILTER COLLECTION

// const caught = document.querySelector('#caught');
// const missing = document.querySelector('#missing');
// const collection = document.querySelector('#collection');

// collection.addEventListener("click", filterCaught);

// function filterCaught(e) {
//     const cards = pokedex.childNodes;
//     cards.forEach(card => {
//         switch (e.target.value) {
//             case "caught":
//                 if (card.classList.contains('caught')) {
//                     card.style.display = "block";
//                 } else {
//                     card.style.display = "none";
//                 }
//                 break;
//             case "missing":
//                 if (card.classList.contains('missing')) {
//                     card.style.display = "block";
//                 } else {
//                     card.style.display = "none";
//                 }
//                 break;
//             case ""
        
//     })
// }


// SEARCH BAR

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredPokemons = pokemons.filter(pokemon => {
        return (
            pokemon.name.toLowerCase().includes(searchString)
        );
    });
    pokeContainer.innerHTML = "";
    filteredPokemons.forEach(pokemon => renderPokemon(pokemon));
});