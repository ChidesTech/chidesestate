interface IEstateInterface{
    _id? : any | null,
    title : string,
    type : string,
    status: string,
    location : string,
    price : number,
    cover : string,
    images : string[],
    videos : string[],
    description : string,
    bathrooms : number,
    bedrooms : number,
    period : string,
    garages : number,
    features : string[],
    details : string[],
    success? : string,
    property? : object,
    error? : string,
    createdAt? : any
} 

export default IEstateInterface;


 
  
  
 
 
 