// Script para el carrusel
let index = 0;
let images = document.querySelectorAll('#carousel img');
let arrows = document.querySelectorAll('#carousel .arrow');

function showImage(n) {
    images[index].classList.remove('active');
    index = (n + images.length) % images.length;
    images[index].classList.add('active');
}

function showNext() {
    showImage(index + 1);
}

function showPrev() {
    showImage(index - 1);
}

arrows.forEach(function(arrow) {
    arrow.addEventListener('click', function() {
        if (this.classList.contains('next')) {
            showNext();
        } else {
            showPrev();
        }
    });
});

// Script para el foro
let form = document.querySelector('#forum form');
let messages = document.querySelector('#forum .messages');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let
    name = form.querySelector('#name').value;
let message = form.querySelector('#message').value;
let timestamp = new Date().toLocaleString();
let html = `
    <div class="message">
        <p class="name">${name} dijo:</p>
        <p class="timestamp">${timestamp}</p>
        <p class="content">${message}</p>
    </div>
`;
messages.innerHTML += html;
form.reset();
});