const menuIcon = document.querySelector('.menu-icon') // Menu hambúrguer
const overlay = document.querySelector('.overlay') // O que aparece quando o menu hambúrguer é pressionado
const bookContent = document.querySelector('.book-content') // Onde o conteúdo do livro é exibido
const bookChapter = document.querySelector('.chapter')

const previousChapterButton = document.getElementById('previous-book-button') // BOTÃO LEFT
const nextChapterButton = document.getElementById('next-book-button') // BOTÃO RIGHT

const fontSizeButtons = document.querySelector(".font-size-buttons")
const fontSizeMinus = fontSizeButtons.children[0] // -
const fontSizePlus = fontSizeButtons.children[2] // +

const themeButton = document.querySelector('.theme-button')
const themeIcon = document.querySelector('.theme-icon')
const main = document.querySelector('main')

let selectedBook = sessionStorage.getItem("livro-selecionado")
let selectedChapter = 1

let changeFontSize = 1 // 1rem

// ESCONDE/EXIBE O MENU HAMBÚRGUER
menuIcon.addEventListener('click', (e) => {
    overlay.classList.toggle('overlay-disable')
})

// AUMENTA/DIMINUI LETRA
fontSizePlus.addEventListener('click', (e) => {
    fontSizeMinus.style.opacity = 1
    // SE O TAMANHO DA LETRA FOR MENOR QUE O LIMITE DE 2.5REM
    if (changeFontSize < 2.5) {
    changeFontSize += 0.5 
    bookContent.style.fontSize = `${changeFontSize}rem`
    bookContent.style.lineHeight = `${changeFontSize + 1}rem`
    }

})

fontSizeMinus.addEventListener('click', (e) => {
    if (changeFontSize > 1) {
    changeFontSize -= 0.5 
    bookContent.style.fontSize = `${changeFontSize}rem`
    bookContent.style.lineHeight = `${changeFontSize + 1}rem`
    }

})










let availableChapters = undefined

// EXIBINDO O CONTEÚDO NA PÁGINA----------------------
async function buscarConteudo() {
    // BUSCANDO O CONTEÚDO DO LIVRO
   const response = await fetch("../contents/contents.json");
    // CONVERTENDO PRA OBJETO JAVASCRIPT
    const responseObject = await response.json();
    // RETORNA O OBJETO PARA SER USADO NO THEN
    return responseObject
}

function colocandoConteudo() {
    buscarConteudo().then( (responseObject) => {
        bookContent.innerHTML = responseObject[selectedBook - 1]["capitulo"][selectedChapter]["conteudo"];
        bookChapter.innerText = responseObject[selectedBook - 1]["capitulo"][selectedChapter]["titulo"];

        // ARMAZENANDO A QUANT. DE CAPÍTULOS NO SESSION STORAGE DO NAVEGADOR
        sessionStorage.setItem("availableChapters", responseObject[selectedBook - 1]["capitulos-disponiveis"]);
        // CAPTURANDO ESSA QUANTIDADE E COLOCANDO NA VARIÁVEL
        availableChapters = sessionStorage.getItem("availableChapters")
        })
        
    }

colocandoConteudo()










// ADICIONANDO EVENTO AOS BOTÕES LEFT/RIGHT, PARA QUE O LEITOR POSSA TROCAR AS PÁGINAS
// REUTILIZEI OS BOTÕES DE TROCAR LIVRO DA PÁGINA PRINCIPAL



function buttonHidden() {
    
    // ESCONDE O BOTÃO DA DIREITA SE CHEGAR NO ÚLTIMO CAPÍTULO DISPONÍVEL
    if (selectedChapter == availableChapters) {
        nextChapterButton.classList.add("disable")
    } else if (nextChapterButton.classList.contains("disable")) {
        nextChapterButton.classList.remove("disable")
    }
    
    // ESCONDE O BOTÃO DA ESQUERDA SE ESTIVER NO PRIMEIRO CAPÍTULO DISPONÍVEL
    if (selectedChapter == 1) {
        previousChapterButton.classList.add('disable')
    } else if (previousChapterButton.classList.contains('disable')) {
        previousChapterButton.classList.remove('disable')
    }
}



nextChapterButton.addEventListener('click', (event) => {

    if (selectedChapter < availableChapters) {

        selectedChapter++;
        buttonHidden();
        colocandoConteudo();
    }
   
})

previousChapterButton.addEventListener('click', (event) => {
    if (selectedChapter > 1) {
        selectedChapter--;
        colocandoConteudo();
        buttonHidden();
    }
})

//------------------------------------------------------------------------------------


themeButton.addEventListener('click', (event) => {
    overlay.classList.toggle('dark-theme');
    main.classList.toggle('dark-theme')
    nextChapterButton.classList.toggle('button-dark-theme')
    previousChapterButton.classList.toggle('button-dark-theme')

    if (themeIcon.classList.contains('fa-moon')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun')
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon')
    }
})

//