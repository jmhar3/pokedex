//SEARCH
const searchBar = document.getElementById('input');
const searchIcon = document.getElementById('search');

searchIcon.addEventListener('click', () => {
    searchBar.focus();
})  

//     //POKEDEX
document.addEventListener("DOMContentLoaded", () => {
    let allPokemonContainer = document.getElementById('pokedex')
    allPokemonContainer.innerText = "";
    fetchKantoPokemon();
})

function fetchKantoPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(function(allpokemon){
        allpokemon.results.forEach(function(pokemon){
            fetchPokemonData(pokemon);
        })
    })
}

function fetchPokemonData(pokemon){
    let url = pokemon.url
    fetch(url)
    .then(response => response.json())
    .then(function(pokeData){
        renderPokemon(pokeData)
    })
}


function renderPokemon(pokeData){
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
}

function createTypes(types, div){
    types.forEach(function(type){
        let typeDiv = document.createElement('p');
        typeDiv.innerText = type['type']['name'];
        div.append(typeDiv)
    })
    //create custom background colour to match text
    // if (typeDiv.innerText === 'poison'){ typeDiv.style.backgroundColor = "#000"};
    // else if (typeDiv.innerText === 'grass'){ typeDiv.style.background = "#000"};
    // else if (typeDiv.innerText === 'water'){ typeDiv.style.background = "rgb(230, 87, 4)"};
    // else if (typeDiv.innerText === 'ground'){ typeDiv.style.background = "rgb(230, 87, 4)"};
}

function createPokeImage(pokeID, containerDiv){
    let pokeImgContainer = document.createElement('div');

    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`

    pokeImgContainer.append(pokeImage);
    containerDiv.append(pokeImgContainer);
}

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

    //MODAL
    // let modal = document.getElementsByClassName("modal");
    // let card = document.getElementsByClassName("card");
    // let back = document.getElementsByClassName("collection")[0];

    // card.addEventListener("click", function () {
    //     modal.style.display = "block";
    // })

    // back.addEventListener("click", function () {
    //     modal.style.display = "none";
    // })

    // window.addEventListener("click", function () {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // })

    //CAUGHT CATALOGUE
        let collectionButton = document.getElementById('collection-button');

        collectionButton.addEventListener("click", function () {
            if(collectionButton.innerText === "ADD TO COLLECTION") {
                document.getElementById('collection-button').style.backgroundColor = '#3B4CCA';
                collectionButton.innerText = "REMOVE FROM COLLECTION"
                // update pokemon[i].caught to true;
            } else(collectionButton.innerText === "REMOVE FROM COLLECTION"){
                collectionButton.style.backgroundColor = '#CC0000';
                collectionButton.innerText = "ADD TO COLLECTION"
                // if (pokemon[i].caught === true) update to false
            }
        })