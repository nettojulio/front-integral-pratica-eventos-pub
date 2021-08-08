const mainMenu = document.querySelector('#menu-main');
const hideMenu = document.querySelector('.side-menu');
const menuTools = document.querySelector('.menu-tools');

const galleryPics = document.querySelectorAll('.pics');

const modal = document.querySelector('.modal');
const modalPic = document.querySelector('.modal-principal-img');
const modalLike = document.querySelector('.like-on-modal');
const closeModal = document.querySelector('.close-modal');
const rewind = document.querySelector('.rewind');
const forward = document.querySelector('.forward');

let currentImage = 0;
let liked = [];

// OK

mainMenu.addEventListener('click', function () {
    hideMenu.classList.toggle('hidden-sidebar');
    menuTools.src = hideMenu.classList.contains('hidden-sidebar') ? './assets/closed-menu.svg' : './assets/open-menu.svg';
});

galleryPics.forEach(imagem => {
    imagem.addEventListener('click', (event) => {
        modal.classList.remove('hidden');
        currentImage = Number(event.target.dataset.index);

        if (liked.includes(currentImage)) {
            modalLike.classList.remove('hidden');
        } else {
            modalLike.classList.add('hidden');
        }
        abrirModal(event.target.src);
        updateModalButtons();
    });

    const itemLike = imagem.previousElementSibling;
    if (liked.includes(imagem.dataset.index)) {
        itemLike.classList.remove('hidden');
    } else {
        itemLike.classList.add('hidden');
    }
});

modalPic.addEventListener('click', (event) => {
    event.stopPropagation();
});

closeModal.addEventListener('click', function () {
    modal.classList.add('hidden');
})

function abrirModal(src) {
    modalPic.src = src;
}

modalPic.addEventListener('dblclick', () => {

    const itemLike = galleryPics[currentImage].previousElementSibling;

    if (liked.includes(currentImage)) {
        liked = liked.filter(like => like !== currentImage);
        itemLike.classList.add('hidden');
        modalLike.classList.add('hidden');
    } else {
        liked.push(currentImage);
        itemLike.classList.remove('hidden');
        modalLike.classList.remove('hidden');
    }
});

// EDITAR

rewind.addEventListener('click', (event) => {
    event.stopPropagation();

    currentImage--;
    const image = galleryPics[currentImage];
    abrirModal(image.src);
    updateModalButtons();
    updateModalLike();
});

forward.addEventListener('click', (event) => {
    event.stopPropagation();

    currentImage++;

    const image = galleryPics[currentImage];
    abrirModal(image.src);
    updateModalButtons();
    updateModalLike();
});

function updateModalButtons() {
    rewind.classList.remove('hidden');
    forward.classList.remove('hidden');
    if (currentImage === 0) {
        rewind.classList.add('hidden');
    }
    if (currentImage === 9) {
        forward.classList.add('hidden');
    }
}

function updateModalLike() {
    if (liked.includes(currentImage)) {
        modalLike.classList.remove('hidden');
    } else {
        modalLike.classList.add('hidden');
    }
}

modal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});