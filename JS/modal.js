let modal = document.querySelector('.modal');

function openModal(e) {
    modal.classList.toggle('hidden');

    let buttonData = e.target.dataset.pokemon
    let data = JSON.parse(buttonData);

    let pokeID = String(data.id).padStart(3, '0')

    modal.innerHTML = `<div class="modal-inner">
    <img src="./images/arrow.png" id="close">
    <img src="${data.sprites.front_default}" id="pokemon-image">
    <div id="modal-title">
    <img src="./images/insignia.png" id="insignia">
    <h3>${pokeID} ${data.name.toUpperCase()}</h3>
    </div>
    <h4>Height: ${data.height} Weight: ${data.weight}</h4>
    </div>`;

    let close = document.querySelector('#close')
    close.addEventListener("click", closeModal);

    modal.addEventListener("click", closeModal)
}

function closeModal() {
    modal.classList.add('hidden');
}