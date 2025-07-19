const nextBookButton = document.getElementById('next-book-button')
const previousBookButton = document.getElementById('previous-book-button')
const bookCovers = document.querySelectorAll('.covers')
const divBookImages = document.querySelectorAll('.book-images')
let availableBooks = bookCovers.length
console.log(`Livros Disponíveis: ${availableBooks}`)


// CADA LIVRO TEM SEU NÚMERO, O PRIMEIRO DA LISTA É O NÚMERO -> 1
let selectedBookNumber = 1 // A PÁGINA INICIA SELECIONANDO O LIVRO 1

import * as conteudo from "./contents.js"
// Sinopse dos livros
let paragraphSynopsis = document.querySelector('.paragraph')
paragraphSynopsis.innerText = conteudo.synopsis[selectedBookNumber]
// Título dos livros
let bookName = document.querySelector('.book-name')
bookName.innerText = conteudo.bookTitle[selectedBookNumber]

















    /* BOTÕES PARA PASSAR O LIVRO: ESQUERDA E DIREITA */
    
previousBookButton.addEventListener('click', () => {
// AO CLICAR NO BOTÃO DA ESQUERDA:
 
// SE O NÚMERO DO LIVRO SELECIONADO FOR MAIOR QUE 1 (Ou seja algum livro depois do primeiro):
if (selectedBookNumber > 1) {
    // REMOVER 1 UNIDADE AO selectedBookNumber
    selectedBookNumber--
    console.log(` Livros disponíveis: ${availableBooks} \n Livro selecionado: ${selectedBookNumber}`)
    // CHAMAR A FUNÇÃO
    changeBook(bookCovers)
    buttonHidden()

    // TROCAR A SINOPSE E O TÍTULO
    paragraphSynopsis.innerText = conteudo.synopsis[selectedBookNumber]
    bookName.innerText = conteudo.bookTitle[selectedBookNumber]
    
}

})



nextBookButton.addEventListener('click', () => {
    
    // AO CLICAR NO BOTÃO DA DIREITA:
    
    // SE O NÚMERO DO LIVRO SELECIONADO(já começa em 1) FOR MENOR QUE O TOTAL DE LIVROS DISPONÍVEIS:
    if (selectedBookNumber < availableBooks) {

        // ADICIONA 1 UNIDADE, AGORA SERÁ O LIVRO 2 E ASSIM POR DIANTE...
        selectedBookNumber++
        console.log(` Livros disponíveis: ${availableBooks} \n Livro selecionado: ${selectedBookNumber}`)

        // CHAMAR AS FUNÇÕES
        changeBook(bookCovers)
        buttonHidden()

        // TROCAR A SINOPSE E O TÍTULO
        paragraphSynopsis.innerText = conteudo.synopsis[selectedBookNumber]
        bookName.innerText = conteudo.bookTitle[selectedBookNumber]
        
                
                
                
    }    
        })
        
        



function changeBook(livros) {
    
    livros.forEach( livro => {
        if (livro.classList.contains('selected-book')) {
            // RETIRAR A CLASSE selected-book do oldSelectedBook AO SER CHAMADA A FUNÇÃO
            livro.classList.remove('selected-book')
        }
    })
        // PASSAR A CLASSE selected-book PRO PRÓXIMO LIVRO SELECIONADO (O ATUAL)
            bookCovers[selectedBookNumber - 1].classList.add('selected-book')
            
    
}



function buttonHidden() {
    
    // ESCONDE O BOTÃO DA DIREITA SE CHEGAR NO ÚLTIMO LIVRO DISPONÍVEL
    if (selectedBookNumber == availableBooks) {
        nextBookButton.classList.add("disable")
    } else if (nextBookButton.classList.contains("disable")) {
        nextBookButton.classList.remove("disable")
    }
    
    if (selectedBookNumber == 1) {
        previousBookButton.classList.add('disable')
    } else if (previousBookButton.classList.contains('disable')) {
        previousBookButton.classList.remove('disable')
    }
}
// ----------------------------------------------------------------------------------------\\

