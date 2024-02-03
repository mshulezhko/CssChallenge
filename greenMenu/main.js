const menu = document.querySelector('.menu')

menu.addEventListener('click', () => {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open')
        menu.classList.add('close')
    } else {
        menu.classList.add('open')
        menu.classList.remove('close')
    }
})