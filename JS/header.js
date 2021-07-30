// SEARCH

const searchBar = document.getElementById('input');
const searchIcon = document.getElementById('search');


// SEARCH ICON

searchIcon.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


// FILTER COLLECTION

const caught = document.querySelector('#caught');
const missing = document.querySelector('#missing');
const collection = document.querySelector('#caught');

// collection.addEventListener("click", filterCollection(e));

// function filterCollection(e) {
//     const cards = collection.childNodes;
//     console.log(cards);
// }

document.addEventListener('click', e => {
    console.log(e.target);
})

// SEARCH BAR

// searchBar.addEventListener('keyup', (e) => {
//     const searchString = e.target.value.toLowerCase();
//     const filteredPokemon = pokemons.filter(pokemon => {
//         return (
//             pokemon.name.toLowerCase().includes(searchString) || pokemon.type.toLowerCase().includes(searchString)
//         );
//     });
//     renderPokemon(filteredPokemon);
// });


// HEADER ANIMATION

const header = document.querySelector('header');

document.addEventListener("scroll", () => {
    headerScroll()
})

function headerScroll() {
    let y = window.scrollY;
    if (y > 10) {
        header.classList.add('small');
    } else if (y < 10) {
        header.classList.remove('small');
    }
}