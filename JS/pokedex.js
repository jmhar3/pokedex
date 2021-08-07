// FETCH POKEMON

const pokedex = document.getElementById('pokedex');
const pokemonQuantity = 151;

const fetchPokemon = async () => {
    for(let i = 1; i <= pokemonQuantity; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const pokemon = await res.json();
        renderPokemon(pokemon);
        storePokemon(pokemon);
    } catch (err) {
        console.error(err);
    }
}

fetchPokemon();


// STORE POKEMON

const pokemons = [];

function storePokemon(pokemon) {
    pokemons.push(pokemon);
}


// RENDER POKEMON

const cardFront = document.getElementsByClassName('card-front');
const cardBack = document.getElementsByClassName('card-back');

const renderPokemon = pokemons => {
    let pokedex = document.getElementById('pokedex');
    
    let card = document.createElement("div");
    card.classList.add("card");

    //POKEMON TITLE
    let pokeID = String(pokemons.id).padStart(3, '0');
    let pokeName = (pokemons.name).toUpperCase();

    let pokeTitle = document.createElement('h4');
    pokeTitle.innerText = `${pokeID} ${pokeName}`
    pokeTitle.classList.add('title');

    // CREATE TYPES
    let pokeTypes = document.createElement('div');
    pokeTypes.className = 'type';
    createTypes(pokemons.types, pokeTypes);

    // MODAL BUTTON
    let button = document.createElement('button');
    button.innerText = 'see more';
    button.dataset.pokemon = JSON.stringify(pokemons);
    button.addEventListener("click", openModal);
    
    createPokeImage(pokemons.id, card);

    card.append(pokeTitle, pokeTypes, button);
    pokedex.appendChild(card);
}


// TYPES

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


// SOURCE IMAGES

function createPokeImage(id, card) {
    let pokeImgContainer = document.createElement('div');

    let pokeImage = document.createElement('img')
    pokeImage.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

    pokeImgContainer.append(pokeImage);
    card.append(pokeImgContainer);
}