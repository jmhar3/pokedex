// MODAL

let modal = document.getElementsByClassName("modal");
let close = document.getElementById('close');


// CLOSE MODAL BUTTON

close.addEventListener("click", () => {
    document.querySelector(".modal").classList.add("hidden");
})


// COLLECTION BUTTON

const collectionButton = document.querySelector('#collection-button')

collectionButton.addEventListener("click", () => {
    if (collectionButton.innerText === "ADD TO COLLECTION") {
        collectionButton.style.backgroundColor = 'royalblue';
        collectionButton.innerText = "REMOVE FROM COLLECTION"
    } else {
        collectionButton.style.backgroundColor = '#CC0000';
        collectionButton.innerText = "ADD TO COLLECTION"
    };
})

document.addEventListener("click", addToCollection);

function addToCollection(e) {
    const button = e.target;

    if (button.classList === "title") {
        const card = button.parentElement;
        card.classList.toggle('caught');
    }
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