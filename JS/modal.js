let modal = document.querySelector('.modal');

function openModal(e) {
    modal.classList.toggle('hidden');

    let buttonData = e.target.dataset.pokemon
    let data = JSON.parse(buttonData);

    let pokeID = String(data.id).padStart(3, '0')

    modal.innerHTML = `<div class="modal-inner">
    <h1>${pokeID} ${data.name.toUpperCase()}</h1>
    <img src="${data.sprites.front_default}">
    </div>`;
}