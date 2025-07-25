const menuIcon = document.querySelector('.menu-icon') // Menu hambúrguer
const overlay = document.querySelector('.overlay') // O que aparece quando o menu hambúrguer é pressionado
const bookContent = document.querySelector('.book-content') // Onde o conteúdo do livro é exibido
const bookChapter = document.querySelector('.chapter')

const previousBookButton = document.getElementById('previous-book-button') // BOTÃO LEFT
const nextBookButton = document.getElementById('next-book-button') // BOTÃO RIGHT

// ESCONDE/EXIBE O MENU HAMBÚRGUER
menuIcon.addEventListener('click', (e) => {
    overlay.classList.toggle('overlay-disable')
})

let selectedBook = sessionStorage.getItem("livro-selecionado")
let selectedChapter = 1






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
        bookContent.innerHTML = responseObject[selectedBook - 1]["capitulo"][selectedChapter]["conteudo"]
        bookChapter.innerText = responseObject[selectedBook - 1]["capitulo"][selectedChapter]["titulo"]
        console.log("Capítulos disponíveis nesse livro: ", responseObject[selectedBook - 1]["capitulos-disponiveis"])
        // ARMAZENANDO A QUANT. DE CAPÍTULOS NO SESSION STORAGE DO NAVEGADOR
        sessionStorage.setItem("availableChapters", responseObject[selectedBook - 1]["capitulos-disponiveis"])
        })
        
    }

colocandoConteudo()
// PEGA A QUANTIDADE DE CAPÍTULOS DISPONÍVEIS NO LIVRO, QUE ESTÁ ARMAZENADO NO SESSION STORAGE DO NAVEGADOR, E A ARMAZENA
const availableChapters = sessionStorage.getItem("availableChapters")
//------------------------------------------------------








// ADICIONANDO EVENTO AOS BOTÕES LEFT/RIGHT, PARA QUE O LEITOR POSSA TROCAR AS PÁGINAS
nextBookButton.addEventListener('click', (event) => {
    if (selectedChapter < availableChapters) {
        selectedChapter++
        colocandoConteudo()
        console.log(selectedChapter)
    }
   
})
//------------------------------------------------------------------------------------


