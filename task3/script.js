const A = document.querySelector('#a');
const B = document.querySelector('#b');
const C = document.querySelector('#c');
const D = document.querySelector('#d')

function makeGreen() {
    A.style.background = ('green');
    B.style.background = ('black');
    C.style.background = ('black');
    D.removeEventListener('click', makeGreen);
    D.addEventListener('click', makeYellow);
}

function makeYellow() {
    B.style.background = ('yellow');
    A.style.background = ('black');
    C.style.background = ('black');
    D.removeEventListener('click', makeYellow);
    D.addEventListener('click', makeRed);
}

function makeRed() {
    C.style.background = ('red');
    A.style.background = ('black');
    B.style.background = ('black');
    D.removeEventListener('click', makeRed);
    D.addEventListener('click', makeGreen);
}

D.addEventListener('click', makeGreen);