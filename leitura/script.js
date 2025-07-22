const menuIcon = document.querySelector('.menu-icon')
const overlay = document.querySelector('.overlay')

menuIcon.addEventListener('click', (e) => {
    overlay.classList.toggle('overlay-disable')
})