let exConsole = document.querySelector('#consolelog');
exConsole.addEventListener('click', (event) => {
    alert('Этот метод консоли используется для вывода сообщений в браузерную консоль');
})

let exAlert = document.querySelector('#alert');
exAlert.addEventListener('click', (evene) => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK');
})

let exPromt = document.querySelector('#promt');
exPromt.addEventListener('click', (event) => {
    alert('Отображает диалоговое окно с запросом на ввод текста');
})