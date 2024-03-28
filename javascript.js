const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read)
    myLibrary.push(book)
}

addBookToLibrary("Can't Stop Won't Stop", 'Jeff Chang', 350, false)
addBookToLibrary('David Copperfield', 'Charles Dickens', 786, false)
addBookToLibrary('The History of Jazz', 'Ted Gioia', 426, true)

const submitButton = document.getElementById('submit-button')
submitButton.addEventListener('click', () => {
    let title = document.getElementById('title-input').value
    let author = document.getElementById('author-input').value
    let read = document.getElementById('read-input').value
    let pages = document.getElementById('pages-input').value
    const entry = addBookToLibrary(title, author, pages, read)
    addBooksToShelves()
})

function addBooksToShelves () {
    myLibrary.forEach((book) => {
        const shelves = document.getElementById('shelves')
        bookDiv = document.createElement('div')
        bookDiv.classList.add('book')
        bookDiv.setAttribute('id', book.title)
        const bookTitle = document.createElement('h2')
        bookTitle.textContent = book.title
        const bookAuthor = document.createElement('div')
        bookAuthor.textContent = book.author
        const bookPages = document.createElement('div')
        bookPages.textContent = `${book.pages} Pages`
        const bookRead = document.createElement('div')
        if (book.read) {
            bookRead.textContent = 'Read'
        } else {
            bookRead.textContent = 'Unread'
        }
        bookDiv.append(bookTitle)
        bookDiv.append(bookAuthor)
        bookDiv.append(bookPages)
        bookDiv.append(bookRead)
        shelves.append(bookDiv)
    })
}