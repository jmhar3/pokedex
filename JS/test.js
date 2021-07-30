const searchBar = document.getElementById('input');
const searchIcon = document.getElementById('search');
const pokedex = document.getElementById('pokedex');
const card = document.getElementsByClassName('card');
let modal = document.getElementsByClassName("modal");
let close = document.getElementById('close');
let caughtTally = document.getElementById('caught');
let missingTally = document.getElementById('missing');

window.addEventListener("DOMContentLoaded", () => {
    fetchPokemonList();
})

// CLOSE MODAL BUTTON

close.addEventListener("click", () => {
    document.querySelector(".modal").classList.add("hidden");
})

// COLLECTION BUTTON

let collectionButton = document.getElementById('collection-button');
collectionButton.addEventListener("click", () => {
    if (collectionButton.innerText === "ADD TO COLLECTION") {
        document.querySelector('#collection-button').style.backgroundColor = 'royalblue';
        document.getElementById('collection-button').innerText = "REMOVE FROM COLLECTION"
    } else {
        document.getElementById('collection-button').style.backgroundColor = '#CC0000';
        document.getElementById('collection-button').innerText = "ADD TO COLLECTION"
    };
})

//SEARCH

// SEARCH ICON

searchIcon.addEventListener('click', () => {
    searchBar.focus();
})

// SEARCH BAR - fix

// searchBar.addEventListener('keyup', (e) => {
//     const searchString = e.target.value.toLowerCase();
//     const filteredPokemon = pokemon.filter(pokeData => {
//         return (
//             pokeData.name.toLowerCase().includes(searchString) || pokeData.type.toLowerCase().includes(searchString)
//         );
//     });
//     renderPokemon(filteredPokemon);
// });

// POKEDEX
// const allPokemon = []

// PARSE DATA TO GET ARRAY OF OBJECTS

const pokedex = document.getElementById('pokedex');
const pokemonQuantity = 150;

const fetchPokemon = async () => {
    for(let i = 1; i <= pokemonQuantity; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokeData = await res.json();
    renderPokemon(pokeData);
}

fetchPokemon();

// FETCH POKEMON LIST INCLUDING NAME + URL

// const fetchPokemonList = async () => {
//     fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
//         .then(response => response.json())
//         .then(allPokemon => {
//             allPokemon.results.forEach(pokemon => {
//                 fetchPokemonData(pokemon);
//                 // filterPokemon();
//             })
//         })
//         .catch(error => {
//             console.log("fetchPokemonList failed");
//             console.log(error.message);
//         })
// }

// FETCH INDIVIDUAL STATS

// const fetchPokemonData = async (pokemon) => {
//     let url = pokemon.url
//     fetch(url)
//         .then(response => response.json())
//         .then(pokeData => {
//             // const converted = JSON.parse(pokeData)
//             // renderPokemon(converted);
//             renderPokemon(pokeData);
//         })
//         .catch(error => {
//             console.log("fetchPokemonData failed!");
//             console.log(error.message);
//         })
// }

GENERATE POKEMON CARD INFO

function renderPokemon(pokeData) {
    let allPokemonContainer = document.getElementById('pokedex');
    let card = document.createElement("div")
    card.classList.add('card');

    createPokeImage(pokeData.id, card);

    let pokeName = (pokeData.name).toUpperCase();

    let pokeID = String(pokeData.id).padStart(3, '0');

    let pokeTitle = document.createElement('h4')
    pokeTitle.innerText = `${pokeID} ${pokeName}`

    let pokeTypes = document.createElement('div')
    pokeTypes.className = 'type';

    createTypes(pokeData.types, pokeTypes)

    card.append(pokeTitle, pokeTypes);

    allPokemonContainer.appendChild(card);
}

//TYPES *custom colours*
function createTypes(types, div) {
    types.forEach(type => {
        let typeDiv = document.createElement('p');
        typeDiv.innerText = type['type']['name'];

        switch (typeDiv.innerText) {
            case 'normal': typeDiv.style.backgroundColor = "darkkhaki"; break;
            case 'fire': typeDiv.style.background = "darkorange"; break;
            case 'water': typeDiv.style.background = "dodgerblue"; break;
            case 'grass': typeDiv.style.background = "forestgreen"; break;
            case 'electric': typeDiv.style.background = "gold"; break;
            case 'ice': typeDiv.style.background = "lightblue"; break;
            case 'fighting': typeDiv.style.background = "crimson"; break;
            case 'poison': typeDiv.style.background = "lightpurple"; break;
            case 'ground': typeDiv.style.background = "darkgoldenrod"; break;
            case 'flying': typeDiv.style.background = "orchid"; break;
            case 'psychic': typeDiv.style.background = "hotpink"; break;
            case 'bug': typeDiv.style.background = "yellowgreen"; break;
            case 'rock': typeDiv.style.background = "saddlebrown"; break;
            case'ghost': typeDiv.style.background = "grey"; break;
            case 'dragon': typeDiv.style.background = "purple"; break;
            case 'dark': typeDiv.style.background = "browngrey"; break;
            case'steel': typeDiv.style.background = "lightgrey"; break;
            case 'fairy': typeDiv.style.background = "pink"; break;
        }

        div.append(typeDiv)
    })
}

//SOURCE IMAGES
function createPokeImage(pokeID, containerDiv) {
    let pokeImgContainer = document.createElement('div');

    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}

// // OPEN MODAL
// const cards = document.querySelectorAll(".card")
// for (const card of cards) {
//   card.addEventListener('click', function(event) {
//     document.querySelector(".modal").classList.remove("hidden");
//   })
// }

// //MODAL INFO
// //fix
// const renderModal = async (pokeData) => {
//     let modal = document.getElementById('modal');
//     let modalCard = document.createElement("div")
//     modalCard.classList.add('modal-card');

//     createPokeImage(pokeData.id, modalCard);

//     let pokeName = (pokeData.name).toUpperCase();

//     let pokeID = String(pokeData.id).padStart(3, '0');

//     let pokeTitle = document.createElement('h2')
//     pokeTitle.innerText = `${pokeID} ${pokeName}`

//     let pokeTypes = document.createElement('div')
//     pokeTypes.className = 'type';
//     createTypes(pokeData.types, pokeTypes)

//     let pokeAbility = document.createElement('div')
//     pokeAbility.className = 'ability';
//     createAbilities(pokeData.ability, pokeAbility)

//     let pokeHeightWeight = document.createElement('div')
//     pokeHeightWeight.className = 'height-weight';
//     createHeightWeight(pokeData.height, pokeData.height, pokeHeightWeight)

//     card.append(pokeTitle, pokeTypes, pokeAbility);

//     modal.appendChild(card);
// }

// //ABILITY
// function createAbilities(abilities, div) {
//     abilities.forEach(ability => {
//         let abilityDiv = document.createElement('h4');
//         abilityDiv.innerText = ability['ability']['name'];
//         div.append(abilityDiv)
//     })
// }

// //HEIGHT WEIGHT
// function createHeightWeight(heightWeight, div) {
//     heightWeight.forEach((height, weight) => {
//         let height = document.createElement('h4');
//         height.innerText = height['height']['name'];
//         let weight = document.createElement('h4');
//         weight.innerText = weight['weight']['name'];
//         div.append(height + weight)
//     })
// }

//MODAL

//OPEN MODAL

// function openModal(pokeData) {
//     document.querySelector(".modal").classList.remove("hidden");
// }

// pokedex.addEventListener('click', e => {
//     if (e.target.className === 'card') {
//         openModal(e.target)
//     }
// })

    // console.log(e.target)
    // check target to figure out how to link modal

// or

// card.addEventListener('click', (e) => {
//     if (e.target.innerText.includes(`${pokeName}`)) {
//         document.querySelector(".modal").classList.remove("hidden");
//     }
// });



// CREATE NEW USER

// const form = document.querySelector('.user-form');
// const feedback = document.querySelector('.feedback');
// const username = form.username.value;
// const usernamePattern = /^[a-zA-Z0-9]{6,20}$/;

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     if (usernamePattern.test(username)) {
//         feedback.textContent = 'username is valid'
//     } else {
//         feedback.textContent = 'username not valid. must be made up of letters and/or numbers only & be 6-20 characters long'
//     }
// })

// form.username.addEventListener('keyup', e => {
//     if (usernamePattern.test(e.target.value)) {
//         form.username.setAttribute('class', 'success');
//     } else {
//         form.username.setAttribute('class', 'error')
//     }
// })



//CAUGHT CATALOGUE

// convert api info into locally stored array
// .map to return array with collection value to each pokemon automatically set to false
// use .filter to show all true (caught) and all false (missing)

// $(document).ready(function(){
//     $(".addButton").on("click", function(event){
//         event.preventDefault();
//         var button = $(this);
//         var parent = button.parent(); // We need to find the container in which to seach our fields.
//         var idArticle = parent.find("input[name$='.id']").val(); // Find the ID
//         var nameArticle = parent.find("input[name$='.name']").val(); // Find ather data
//         alert("Add article with id = " + idArticle + " and name = " + nameArticle);
//         // Next step is the ajax method to call the server with the correct data. 
//     });
// });

// missingTally.innerText = `MISSING = ${missingTally}`;
// caughtTally.innerText = `CAUGHT = ${collectionTally}`;

// forEach pokemon
// localStorage.setItem('collection', 'caught')

// let collection = localStorage.getItem('collection');

//update
// specificPokemon = localStorage.setItem('collection', 'caught')

//clear
// localStorage.clear();

// const caughtPokemon = fetchPokemonList.filter(pokemon => pokemon.collection === true);
// const caughtTally = fetchPokemonList.reduce(pokemon => pokemon.collection === true);

// const missingPokemon = fetchPokemonList.filter(pokemon => pokemon.collection === false);
// const missingTally = fetchPokemonList.reduce(pokemon => pokemon.collection === false);



// CLOSE MODAL WHEN CLICKING OUTSIDE BOX

// WHY DOES THIS BREAK EVERYTHING THAT COMES AFTER IT?
// AND STILL NOT WORK?!
// modal.addEventListener("click", () => {
//     document.querySelector(".modal").classList.add("hidden");
// })