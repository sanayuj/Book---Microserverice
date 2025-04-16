


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
    getAllBooks(){
        return this.bookModel.findAll();
    }

    getBookById(uuid){
        return this.bookModel.findOne({
            where:{
                id:uuid
            }
        }).then(function(book){
            if(!book){
                return 'book not found';
            }
            return book.dataValue;
        })
    }

    async updateBookById(uuid,updatedName,updatedReleaseDate,updatedAuthor){
        var updatedBookObject={};
        return this.bookModel.update({name:updatedName,releaseDate:updatedReleaseDate,authorName:updatedAuthor},{returning: true, plain: true, where: {id: uuid} }). then(function(result){
            if(result!=null && result.length>0){
                console. log('updated record' + result [1].dataValues) ;
                 return result[1].dataValues;

            }else{
                return updatedBookObject
            }

        }
        );
}