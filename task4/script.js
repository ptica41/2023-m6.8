const lnk = document.querySelector('a');
lnk.addEventListener('click', (event) => {
    let txt = prompt('Введите текст ссылки', lnk.textContent);
    if (txt.length === 0) {
        alert('Вы ничего не ввели!');
        lnk.textContent = 'Измените текст ссылки';
    }

    else lnk.textContent = txt;
    event.preventDefault();
})