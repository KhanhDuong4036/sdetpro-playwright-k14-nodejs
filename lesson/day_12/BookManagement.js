class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isCheckout = false;
    }

    borrowBook() {
        if (!this.isCheckout) {
            console.log('Checking out the book...');
            this.isCheckout = true;
        } else {
            console.log('Not available!');
        }
    }

    returnBook() {
        this.isCheckout = false;
    }
}

class Library{
    constructor(){
        this.books = [];
    }

    addBook(book){
        this.books.push(book);
        console.log(`Current books: ${JSON.stringify(this.books)}`);

    }

    removeBook(book){
        const bookIndex = this.books.indexOf(book);
        const isBookExisting = bookIndex !== -1;
        if(isBookExisting){
            this.books.splice(bookIndex, 1);
        } else{
            console.log('The book is not in the library to remove');
        }
    }

    searchByAuthor(book){

    }

    searchByTitle(book){

    }
}

// In-memory DB

const library = new Library();
const book01 = new Book('How to learn JS');
const book02 = new Book('How to learn Python');
library.addBook(book01);
library.addBook(book02);

book01.borrowBook();
book01.borrowBook();
