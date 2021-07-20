document.addEventListener("DOMContentLoaded", function () {
    const pokedex = document.getElementById('pokedex');
    let pokeID = String(pokeData.id).padStart(3, '0');
    let pokemon = [];

    const loadPoke = async () => {
        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
            pokemon = await res.json();
            displayPokedex(pokemon);
        } catch (err) {
            console.error(err);
        }
    };

    const displayPokedex = (htmlString) => {
        const pokes = htmlString
            .map((poke) => {
                return `
                <div class="card">
                <img src="${poke.image}"></img>
                <h4>${pokeID} + ${poke.name}</h4>
                <div id="type">
                <h5>${poke.type}</h5>
                </div>
                </div>
            </div>`;
            })
            .join('');
        pokedex.innerHTML = pokes;
    };

    loadPoke();



    function fetchKantoPokemon() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(response => response.json())
            .then(function (allpokemon) {
                allpokemon.results.forEach(function (pokemon) {
                    fetchPokemonData(pokemon);
                })
            })
        // .then(allpokemon => console.log(allpokemon))
    }

    function fetchPokemonData(pokemon) {
        let url = "https://pokeapi.co/api/v2/pokemon/1/"
        fetch(url)
            .then(response => response.json())
            .then(function (pokeData) {
                console.log(pokeData)
            })
    }

    function renderPokemon(pokeData) {
        let pokedex = document.getElementById('pokedex');
        let card = document.createElement("div");
        card.className = card;
        let pokeID = String(pokeData.id).padStart(3, '0');
        let pokeTitle = document.createElement('h4');
        pokeTitle.innerText = `#${pokeID} ${pokeData.name}`;
        let pokeTypes = document.createElement('div');
        createTypes(pokeData.types, pokeTypes)
        card.append(pokeTitle, pokeTypes);
        pokedex.appendChild(card);
    }

    function createTypes(types, div) {
        types.forEach(function (type) {
            let typeText = document.createElement('h5');
            typeText.innerText = type['type']['name'];
            div.append(typeLi)
        })
    }

    //SEARCH
    // let input = document.getElementById('input');
    // const search = document.getElementById('search')

    // search.addEventListener("click", function () {
    //     for (i = 0; i < pokemon.length; i++) {
    //         a = pokemon[i].getElementsByTagName("a")[0];
    //         txtValue = a.textContent || a.innerText;
    //         if (txtValue.toUpperCase().indexOf(input) > -1) {
    //             pokemon[i].style.display = "";
    //         } else {
    //             pokemon[i].style.display = "none";
    //         }
    //     }
    // })

    //POKEDEX

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

    //CAUGHT BUTTON
    //     const collectionButton = document.getElementById('collection');
    //     collectionButton.addEventListener("click", function () {
    //         update pokemon[i].caught to true;
    //         if (pokemon[i].caught === true) update to false
    //     })
})