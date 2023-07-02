interface IUserInterface{
    _id? : any | null,
    username : string,
    email : string,
    password: string,
    confirmPassword? : string,
    isAdmin? : boolean,
    success? : string,
    user? : object,
    error? : string
} 

export default IUserInterface;


 
  
  
 
 
 