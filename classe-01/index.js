const esconder = document.querySelector('aside');
const main = document.querySelector('.main');
const menu = document.querySelector('#menu-main');
const menuTools = document.querySelector('.menu-tools');
const post = document.querySelector('.pics');
const like = document.querySelector('.like-on');

const postAll = document.querySelectorAll('.pics');
const likeAll = document.querySelectorAll('.like-on');


const imagensGaleria = document.querySelectorAll('.pics');
const imagemModal = document.querySelector('.modal-principal-img');
const modal = document.querySelector('.modal');
const fecharModal = document.querySelector('.close-modal');
const voltarModal = document.querySelector('.rewind');
const avancarModal = document.querySelector('.forward');

const likeModal = document.querySelectorAll('.like-on-modal');

const rewindModal = document.querySelector('.rewind');
const forwardModal = document.querySelector('.forward');

menu.addEventListener('click', function () {
    esconder.classList.toggle('hidden-sidebar');
    menuTools.src = esconder.classList.contains('hidden-sidebar') ? './assets/closed-menu.svg' : './assets/open-menu.svg';
})


function abrirModal(src) {
    modal.style.display = 'flex';
    imagemModal.src = src;
}

imagensGaleria.forEach(function (imagem) {
    imagem.addEventListener('click', function (event) {
        if (imagensGaleria[0].src === event.target.src) {
            voltarModal.style.display = 'none';
        }
        if (imagensGaleria[imagensGaleria.length - 1].src === event.target.src) {
            avancarModal.style.display = 'none';
        }
        abrirModal(event.target.src);
    });
});

fecharModal.addEventListener('click', function () {
    modal.style.display = 'none';
    voltarModal.style.display = '';
    avancarModal.style.display = '';
})

imagemModal.addEventListener('dblclick', function () {
    let imagemParametro = '';

    for (const imagem of imagensGaleria) {
        if (imagem.src === imagemModal.src) {
            imagemParametro = imagem.src;
        }
    }

    console.log(imagemParametro);

    likeModal[0].classList.toggle('hidden');

    // console.log(likeModal[0].classList.toggle('hidden'))
})

rewindModal.addEventListener('click', function () {
    
});

forwardModal.addEventListener('click', function () {

});

