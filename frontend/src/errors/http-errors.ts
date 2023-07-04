class HttpError extends Error{
    constructor(message? : string){
        super(message)
        this.name = this.constructor.name
    }
}


// Error Status Code 401
export class UnauthorizedError extends HttpError{

}

// Error Status Code 409
export class ConflictError extends HttpError{
    
}