const menuIcon = document.querySelector('.menu-icon')
const overlay = document.querySelector('.overlay')
// ESCONDE/EXIBE O MENU HAMBÚRGUER
menuIcon.addEventListener('click', (e) => {
    overlay.classList.toggle('overlay-disable')
})


const bookContent = document.querySelector('.book-content')


console.log(sessionStorage.getItem("livro-selecionado"))

