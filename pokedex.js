//SEARCH
const searchBar = document.getElementById('input');
const searchIcon = document.getElementById('search');
const pokedex = {}

let card

searchIcon.addEventListener('click', () => {
    searchBar.focus();
})

//POKEDEX
document.addEventListener("DOMContentLoaded", () => {
    // document.querySelector(".modal").classList.add("hidden");
    fetchKantoPokemon();
});

function fetchKantoPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then(allpokemon => {
            allpokemon.results.forEach(function (pokemon) {
                fetchPokemonData(pokemon);
                filteredData();
                pokedex[pokemon.name] = pokemon
            })
        })
        .catch(function (error) {
            alert("fetchKantoPokemon failed");
            console.log(error.message);
        })
    console.log(pokedex)
}


function fetchPokemonData(pokemon) {
    let url = pokemon.url
    fetch(url)
        .then(response => response.json())
        .then(pokeData => {
            renderPokemon(pokeData)
        })
    .catch(function (error) {
        alert("fetchPokemonData failed!");
        console.log(error.message);
    })
}


// function updatePokedex(pokemon) {
//     let pokedex = document.getElementById('pokedex');
//     removePokemon(pokedex);
//     pokemon.forEach(poke => addPokemon(poke))
// }

// function removePokemon(element) {
//     let child = element.lastElementChild;
//     while (child) {
//         element.removeChild(child);
//         child = element.lastElementChild
//     }
// }

function renderPokemon(pokeData) {
    let allPokemonContainer = document.getElementById('pokedex');
    let pokeContainer = document.createElement("div")
    pokeContainer.classList.add('card');

    createPokeImage(pokeData.id, pokeContainer);

    let pokeName = (pokeData.name).toUpperCase();

    let pokeID = String(pokeData.id).padStart(3, '0');

    let pokeTitle = document.createElement('h4')
    pokeTitle.innerText = `${pokeID} ${pokeName}`

    let pokeTypes = document.createElement('div')
    pokeTypes.className = 'type';

    createTypes(pokeData.types, pokeTypes)

    pokeContainer.append(pokeTitle, pokeTypes);

    allPokemonContainer.appendChild(pokeContainer);

    allPokemonContainer.addEventListener('click', (e) => {
        if (e.target.classList.includes('.card')) {
            document.querySelector(".modal").classList.remove("hidden");
        };
    });
}

function createTypes(types, div) {
    types.forEach(function (type) {
        let typeDiv = document.createElement('p');
        typeDiv.innerText = type['type']['name'];
        if (typeDiv.innerText === 'normal') { typeDiv.style.backgroundColor = "darkkhaki" }
        else if (typeDiv.innerText === 'fire') { typeDiv.style.background = "darkorange" }
        else if (typeDiv.innerText === 'water') { typeDiv.style.background = "dodgerblue" }
        else if (typeDiv.innerText === 'grass') { typeDiv.style.background = "forestgreen" }
        else if (typeDiv.innerText === 'electric') { typeDiv.style.background = "gold" }
        else if (typeDiv.innerText === 'ice') { typeDiv.style.background = "lightblue" }
        else if (typeDiv.innerText === 'fighting') { typeDiv.style.background = "crimson" }
        else if (typeDiv.innerText === 'poison') { typeDiv.style.background = "lightpurple" }
        else if (typeDiv.innerText === 'ground') { typeDiv.style.background = "darkgoldenrod" }
        else if (typeDiv.innerText === 'flying') { typeDiv.style.background = "orchid" }
        else if (typeDiv.innerText === 'psychic') { typeDiv.style.background = "hotpink" }
        else if (typeDiv.innerText === 'bug') { typeDiv.style.background = "yellowgreen" }
        else if (typeDiv.innerText === 'rock') { typeDiv.style.background = "saddlebrown" }
        else if (typeDiv.innerText === 'ghost') { typeDiv.style.background = "grey" }
        else if (typeDiv.innerText === 'dragon') { typeDiv.style.background = "purple" }
        else if (typeDiv.innerText === 'dark') { typeDiv.style.background = "browngrey" }
        else if (typeDiv.innerText === 'steel') { typeDiv.style.background = "lightgrey" }
        else if (typeDiv.innerText === 'fairy') { typeDiv.style.background = "pink" }
        div.append(typeDiv)
    })
}

function createPokeImage(pokeID, containerDiv) {
    let pokeImgContainer = document.createElement('div');

    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}

function pokemonSearch(input) {
    update
}

function filteredData() {
    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();

        const filteredPokemon = pokeData.filter((pokemon) => {
            return (
                pokemon.name.toLowerCase().includes(searchString) ||
                pokemon.type.toLowerCase().includes(searchString)
            );
        });
        renderPokemon(filteredPokemon);
    });
}

//MODAL
let modal = document.getElementsByClassName("modal");
let close = document.getElementById('close')
let collectionButton = document.getElementById('collection-button');

function openModal() {
    document.querySelector(".modal").classList.remove("hidden");

    collectionButton.addEventListener('click', (e) => {
        if (e.target.innerText.includes('ADD')) {
            addToCollection(pokeData);
        } else (e.target.innerText.includes('REMOVE'))
        removeFromCollection(pokeData);
    });

}

close.addEventListener("click", function () {
    document.querySelector(".modal").classList.add("hidden");
})

//CAUGHT CATALOGUE

collectionButton.addEventListener("click", function () {
    if (collectionButton.innerText == "ADD TO COLLECTION") {
        document.querySelector('#collection-button').style.backgroundColor = 'royalblue';
        document.getElementById('collection-button').innerText = "REMOVE FROM COLLECTION"
    } else {
        document.getElementById('collection-button').style.backgroundColor = '#CC0000';
        document.getElementById('collection-button').innerText = "ADD TO COLLECTION"
    };
})

//create user, 

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

// let caughtTally = document.getElementById('caught')
// let missingTally = document.getElementById('missing')
// missingTally.innerText = `MISSING = ${missing}`;
// caughtTally.innerText = `CAUGHT = ${collection}`;