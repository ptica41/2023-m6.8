let txt = document.querySelector('input');
let clr = document.querySelector('button');
let shw = document.querySelector('#duplicateField');

txt.addEventListener('keyup', (event) => {
    shw.textContent = txt.value;
})

clr.addEventListener('click', (event) => {
    if (event.which === 1) {
        console.log('Введенный текст:', txt.value);
        shw.textContent = '';
        txt.value = '';
    }
    event.preventDefault();
})