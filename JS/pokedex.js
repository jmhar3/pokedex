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
        const pokemons = await res.json();
        renderPokemon(pokemons);
    } catch (err) {
        console.error(err);
    }
}

fetchPokemon();


// RENDER POKEMON

const card = document.getElementsByClassName('card');

const renderPokemon = pokemons => {
    let pokedex = document.getElementById('pokedex');
    let card = document.createElement("div")
    card.classList.add('card');

    createPokeImage(pokemons.id, card);

    let pokeName = (pokemons.name).toUpperCase();

    let pokeID = String(pokemons.id).padStart(3, '0');

    let pokeTitle = document.createElement('h4')
    pokeTitle.innerText = `${pokeID} ${pokeName}`

    let pokeTypes = document.createElement('div')
    pokeTypes.className = 'type';

    createTypes(pokemons.types, pokeTypes)

    card.append(pokeTitle, pokeTypes);

    pokedex.appendChild(card);
}


//TYPES

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