const nextBookButton = document.getElementById('next-book-button')
const bookCovers = document.querySelectorAll('.covers')
const divBookImages = document.querySelectorAll('.book-images')
let availableBooks = bookCovers.length

// CADA LIVRO TEM SEU NÚMERO, O PRIMEIRO DA LISTA É O NÚMERO -> 1
let selectedBookNumber = 1

console.log(`Livros Disponíveis: ${availableBooks}`)



nextBookButton.addEventListener('click', () => {

    console.log(availableBooks, selectedBookNumber)
    
    /* 
    AO CLICAR NO BOTÃO DA DIREITA:
    
    SE O NÚMERO DO LIVRO SELECIONADO FOR MENOR OU IGUAL AO TOTAL
    DE LIVROS DISPONÍVEIS: ADICIONAR +1 UNIDADE AO selectedBookNumber
    */
   if (selectedBookNumber <= (availableBooks)) {
       selectedBookNumber++
    }

    // SE O NÚMERO DO LIVRO SELECIONADO FOR MENOR OU IGUAL AO TOTAL DE LIVROS DISPONÍVEIS:
    if (selectedBookNumber <= availableBooks) {
        // CHAMAR A FUNÇÃO
        changeBook()
    }
    

    


})



function changeBook() {
   
    // Livro antes do próximo que foi selecionado ao ser chamada essa função
    let oldSelectedBook = document.querySelector('.selected-book')

    
    // RETIRAR A CLASSE selected-book do oldSelectedBook AO SER CHAMADA A FUNÇÃO
    oldSelectedBook.classList.remove('selected-book')
    
    // PASSAR A CLASSE selected-book PRO PRÓXIMO LIVRO SELECIONADO (O ATUAL)
    bookCovers[selectedBookNumber - 1].classList.add('selected-book')
    
    oldSelectedBook.style.display = 'none'
    
    
}






