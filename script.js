const nextBookButton = document.getElementById('next-book-button')
const previousBookButton = document.getElementById('previous-book-button')
const bookCovers = document.querySelectorAll('.covers')
const divBookImages = document.querySelectorAll('.book-images')


let availableBooks = bookCovers.length
console.log(`Livros Disponíveis: ${availableBooks}`)


// CADA LIVRO TEM SEU NÚMERO, O PRIMEIRO DA LISTA É O NÚMERO -> 1
let selectedBookNumber = 1 // A PÁGINA INICIA SELECIONANDO O LIVRO 1

// ARMAZENA O NÚMERO DO LIVRO SELECIONADO PARA SER USADO NA PÁGINA DE LEITURA
sessionStorage.setItem('livro-selecionado', selectedBookNumber)


// Sinopse dos livros
let paragraphSynopsis = document.querySelectorAll('.paragraph')
// Título dos livros
let bookName = document.querySelectorAll('.book-name')





async function buscarConteudo() {
    // BUSCANDO O TITULO E SINOPSE DO LIVRO
   const response = await fetch("./contents/contents.json");
    // CONVERTENDO PRA OBJETO JAVASCRIPT
    const responseObject = await response.json();
    // RETORNA O OBJETO PARA SER USADO NO THEN
    return responseObject
}

function colocandoConteudo() {
    // FUNÇÃO QUE COLOCA O TITULO E A SINOPSE DO LIVRO SELECIONADO NO HTML
    buscarConteudo().then( (responseObject) => {
        bookName.forEach( (name) => {
            name.innerHTML = responseObject[selectedBookNumber - 1]["livro"];
        })

        paragraphSynopsis.forEach( (synopsis) => {
            synopsis.innerText = responseObject[selectedBookNumber - 1]["sinopse"];
        })
        }
    )
}

colocandoConteudo()









    /* BOTÕES PARA PASSAR O LIVRO: ESQUERDA E DIREITA */
    
previousBookButton.addEventListener('click', () => {
 
// SE O NÚMERO DO LIVRO SELECIONADO FOR MAIOR QUE 1 (Ou seja algum livro depois do primeiro):
if (selectedBookNumber > 1) {
    // REMOVER 1 UNIDADE AO selectedBookNumber
    selectedBookNumber--
    console.log(` Livros disponíveis: ${availableBooks} \n Livro selecionado: ${selectedBookNumber}`)
    // CHAMAR A FUNÇÃO
    changeBook(bookCovers)
    buttonHidden()
    colocandoConteudo()
  
    // ARMAZENA O NÚMERO DO LIVRO SELECIONADO PARA SER USADO NA PÁGINA DE LEITURA
    sessionStorage.setItem('livro-selecionado', selectedBookNumber)
}

})



nextBookButton.addEventListener('click', () => {
    
    // SE O NÚMERO DO LIVRO SELECIONADO(já começa em 1) FOR MENOR QUE O TOTAL DE LIVROS DISPONÍVEIS:
    if (selectedBookNumber < availableBooks) {

        // ADICIONA 1 UNIDADE, AGORA SERÁ O LIVRO 2 E ASSIM POR DIANTE...
        selectedBookNumber++
        console.log(` Livros disponíveis: ${availableBooks} \n Livro selecionado: ${selectedBookNumber}`)

        // CHAMAR AS FUNÇÕES
        changeBook(bookCovers)
        buttonHidden()
        colocandoConteudo()

        // ARMAZENA O NÚMERO DO LIVRO SELECIONADO PARA SER USADO NA PÁGINA DE LEITURA
        sessionStorage.setItem('livro-selecionado', selectedBookNumber)

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

// TRANSFORMA OS LIVROS EM UM BOTÃO CLICÁVEL, E REDIRECIONA PARA A PÁGINA DE LEITURA
bookCovers.forEach( (cover) => {
    cover.addEventListener('click', () => {
    location.href = "leitura/index.html"})
}) 