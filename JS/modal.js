
// COLLECTION BUTTON

const collectionButton = document.querySelectorAll('.collection-button')

function addToCollection(id) {
    if (id.classList === "missing") {
        id.classList('');
        id.classList('caught')
        collectionButton.style.backgroundColor = 'royalblue';
        collectionButton.innerText = "REMOVE FROM COLLECTION"
    } else {
        id.classList('');
        id.classList('missing')
        collectionButton.style.backgroundColor = '#CC0000';
        collectionButton.innerText = "ADD TO COLLECTION"
    };
}


// COLLECTION

// let caughtTally = document.getElementById('caught');
// let missingTally = document.getElementById('missing');
// let collectionButton = document.getElementById('collection-button');

// // auto update without reloading browser
// missingTally.innerText = `MISSING = ${missingTally}`;
// caughtTally.innerText = `CAUGHT = ${collectionTally}`;

// const caughtPokemon = localStorage.getItem('collection');
// const caughtTally = caughtPokemon.reduce(pokemon => pokemon.collection === true);

// const missingPokemon = fetchPokemonList.filter(pokemon => pokemon.collection === false);
// const missingTally = fetchPokemonList.reduce(pokemon => pokemon.collection === false);


// set up local storage for pokemon collection

// forEach pokemon
// card.addEventListener("click", e => {
//     localStorage.setItem('collection', 'caught')
// })

// let collection = localStorage.getItem('collection');

// // update
// specificPokemon = localStorage.setItem('collection', 'caught')

// // clear
// localStorage.clear();