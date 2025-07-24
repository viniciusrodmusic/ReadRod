const menuIcon = document.querySelector('.menu-icon') // Menu hambúrguer
const overlay = document.querySelector('.overlay') // O que aparece quando o menu hambúrguer é pressionado
const bookContent = document.querySelector('.book-content') // Onde o conteúdo do livro é exibido
const bookChapter = document.querySelector('.chapter')

// ESCONDE/EXIBE O MENU HAMBÚRGUER
menuIcon.addEventListener('click', (e) => {
    overlay.classList.toggle('overlay-disable')
})

let selectedBook = sessionStorage.getItem("livro-selecionado")
let selectedChapter = 1


// EXIBINDO O CONTEÚDO NA PÁGINA

async function exibirConteudo(selectedBook) {
    // BUSCANDO O CONTEÚDO DO LIVRO
   const response = await fetch("../contents/contents.json");
    // CONVERTENDO PRA OBJETO JAVASCRIPT
    const responseObject = await response.json();

    return responseObject
}

exibirConteudo(selectedBook).then( (responseObject) => {
    bookContent.innerHTML = responseObject[selectedBook - 1]["capitulo"][selectedChapter]["conteudo"]
    bookChapter.innerText = responseObject[selectedBook - 1]["capitulo"][selectedChapter]["titulo"]
})