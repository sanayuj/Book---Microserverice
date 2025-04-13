

class BookRepository{
    constructor(bookModel){
        this.bookModel=bookModel;
    }

    addBook(uuid,name,releaseData,authorName){
        return this.bookModel.create({
            uuid,
            name,
            releaseDate,
            authorName
        })
    }
}