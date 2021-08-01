// FLIP CARD

const card = document.querySelectorAll(".card-inner");

function flipCard() {
  this.classList.toggle('is-flipped');
}

// COLLECTION BUTTON

// const card = document.querySelectorAll(".card-inner");

// function addToCollection() {
//   this.classList.toggle('caught');
// }



// function addToCollection(pokeID, button) {
//     button.onclick = () => {
//         if (pokeID.classList === "missing") {
//             pokeID.classList('');
//             pokeID.classList.add('caught')
//             button.style.backgroundColor = 'royalblue';
//             button.innerText = "REMOVE FROM COLLECTION"
//         } else {
//             pokeID.classList('');
//             pokeID.classList.add('missing')
//             button.style.backgroundColor = '#CC0000';
//             button.innerText = "ADD TO COLLECTION"
//         };
//     }
// }


// COLLECTION
// auto update without reloading browser

// let caughtTally = document.getElementById('caught');
// let missingTally = document.getElementById('missing');
// let collectionButton = document.getElementById('collection-button');

// missingTally.innerText = `MISSING = ${missingTally}`;
// caughtTally.innerText = `CAUGHT = ${collectionTally}`;

// const caughtPokemon = localStorage.getItem('collection');
// const caughtTally = caughtPokemon.reduce(pokemon => pokemon.collection === true);


// // set up local storage for pokemon collection

// // forEach pokemon
// card.addEventListener("click", e => {
//     localStorage.setItem('collection', 'caught')
// })

// let collection = localStorage.getItem('collection');

// // update
// specificPokemon = localStorage.setItem('collection', 'caught')