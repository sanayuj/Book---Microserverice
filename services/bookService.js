const uuid=require('uuid');

const customResourceResponse=require("../utils/constantMessage");

class BookService{
    constructor (bookRepo){
        this.bookRepo=bookRepo;
    }

    async addBook(async){
        const {name}=req.body;
        const {releaseDate}=req.body;
        const {authorName}=req.body;
        const uuidV4=uuid.v4();
        const response={};

        if(!name||!releaseDate||!authorName){
            response.message = customResourceResponse.reqValidationError.message;
            response. statusCode = customResourceResponse.reqValidationError.statusCode;
            return response;
        }
        const book = await this.bookRepo.addBook(uuidV4, name, releaseDate, authorName)
            if(!book) {
            response.message = customResourceResponse.serverError.message;
    }
}