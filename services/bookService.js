const uuid=require('uuid');

const customResourceResponse=require("../utils");

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
    }
}